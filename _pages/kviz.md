---
layout: page
title: Geomorfologický kvíz
description: Procvičte si poznávání geomorfologických forem reliéfu z fotografií, hillshadů a schémat.
permalink: /kviz.html
---

<div id="kviz-app">

  <!-- ÚVODNÍ OBRAZOVKA -->
  <div id="kviz-uvod" class="kviz-screen">
    <div class="kviz-uvod-obsah">
      <h2>🗺️ Geomorfologický kvíz</h2>
      <p>Procvičte si poznávání geomorfologických forem a procesů z fotografií, hillshadů a schémat.</p>

      <div class="kviz-nastaveni">
        <div class="kviz-nastaveni-skupina">
          <label for="filtr-kategorie"><strong>Kategorie:</strong></label>
          <select id="filtr-kategorie">
            <option value="vse">Všechny kategorie</option>
          </select>
        </div>
        <div class="kviz-nastaveni-skupina">
          <label for="filtr-obtiznost"><strong>Obtížnost:</strong></label>
          <select id="filtr-obtiznost">
            <option value="vse">Všechny</option>
            <option value="1">⭐ Základní</option>
            <option value="2">⭐⭐ Střední</option>
            <option value="3">⭐⭐⭐ Pokročilá</option>
          </select>
        </div>
        <div class="kviz-nastaveni-skupina">
          <label for="pocet-otazek"><strong>Počet otázek:</strong></label>
          <select id="pocet-otazek">
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="vse">Všechny</option>
          </select>
        </div>
      </div>

      <div class="kviz-jmeno-blok">
        <label for="jmeno-studenta"><strong>Jméno</strong> <span class="kviz-volitelne">(nepovinné – pro statistiky)</span>:</label>
        <input type="text" id="jmeno-studenta" placeholder="Vaše jméno nebo přezdívka" maxlength="50">
      </div>

      <button id="btn-start" class="kviz-btn kviz-btn-primary">Začít kvíz →</button>
    </div>
  </div>

  <!-- KVÍZ OTÁZKA -->
  <div id="kviz-otazka" class="kviz-screen" style="display:none;">
    <div class="kviz-progress-bar">
      <div id="kviz-progress-fill"></div>
    </div>
    <div class="kviz-progress-text">
      Otázka <span id="cislo-otazky">1</span> z <span id="celkem-otazek">10</span>
      &nbsp;·&nbsp;
      <span id="skore-live">0 správně</span>
      &nbsp;·&nbsp;
      <span id="kategorie-badge" class="kviz-badge"></span>
    </div>

    <div class="kviz-otazka-obsah">
      <div id="obrazek-kontejner" class="kviz-obrazek-kontejner" style="display:none;">
        <img id="otazka-obrazek" src="" alt="Geomorfologický snímek">
        <p id="obrazek-popis" class="kviz-obrazek-popis"></p>
      </div>
      <p id="otazka-text" class="kviz-otazka-text"></p>
      <div id="moznosti-kontejner" class="kviz-moznosti"></div>
    </div>
  </div>

  <!-- VÝSLEDKOVÁ OBRAZOVKA -->
  <div id="kviz-vysledky" class="kviz-screen" style="display:none;">
    <div class="kviz-vysledky-obsah">
      <div id="vysledek-emoji" class="kviz-vysledek-emoji"></div>
      <h2>Výsledky kvízu</h2>
      <div class="kviz-skore-velky">
        <span id="skore-final">0</span> / <span id="skore-max">10</span>
      </div>
      <p id="skore-procent" class="kviz-skore-procent"></p>
      <p id="skore-zhodnoceni" class="kviz-zhodnoceni"></p>

      <div id="statistiky-kategorie" class="kviz-stat-tabulka"></div>

      <div class="kviz-akce">
        <button id="btn-znovu" class="kviz-btn kviz-btn-primary">Zkusit znovu</button>
        <button id="btn-detail" class="kviz-btn kviz-btn-secondary">Přehled odpovědí</button>
      </div>
    </div>
  </div>

  <!-- PŘEHLED ODPOVĚDÍ -->
  <div id="kviz-prehled" class="kviz-screen" style="display:none;">
    <h2>Přehled odpovědí</h2>
    <div id="prehled-seznam"></div>
    <button id="btn-zpet" class="kviz-btn kviz-btn-secondary">← Zpět na výsledky</button>
  </div>

</div>

<!-- DATA Z JEKYLLU -->
<script>
const KVIZ_DATA = [
  {% for otazka in site.data.kviz.otazky %}
  {
    id: {{ otazka.id | jsonify }},
    kategorie: {{ otazka.kategorie | jsonify }},
    obtiznost: {{ otazka.obtiznost }},
    typ: {{ otazka.typ | jsonify }},
    otazka: {{ otazka.otazka | jsonify }},
    {% if otazka.obrazek %}
    obrazek: {{ otazka.obrazek | jsonify }},
    obrazek_popis: {{ otazka.obrazek_popis | jsonify }},
    {% else %}
    obrazek: null,
    obrazek_popis: null,
    {% endif %}
    moznosti: [
      {% for m in otazka.moznosti %}
      { text: {{ m.text | jsonify }}, spravne: {{ m.spravne }} }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ],
    vysvetleni: {{ otazka.vysvetleni | jsonify }}
  }{% unless forloop.last %},{% endunless %}
  {% endfor %}
];

// Google Sheets logging – doplň URL svého Apps Script webhooku
const SHEETS_WEBHOOK_URL = ""; // např. "https://script.google.com/macros/s/XXXXX/exec"
const OBRAZKY_BASE = "{{ '/assets/kviz/img/' | relative_url }}";
</script>

<script src="{{ '/assets/kviz/kviz.js' | relative_url }}"></script>

<style>
/* ===== KVÍZ STYLY – kompatibilní s jekyll-chapterbook ===== */
#kviz-app {
  max-width: 720px;
  margin: 0 auto;
  font-family: inherit;
}

.kviz-screen { width: 100%; }

/* Úvodní obrazovka */
.kviz-uvod-obsah {
  padding: 1.5rem 0;
}

.kviz-nastaveni {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;
  padding: 1.2rem;
  background: var(--color-highlight, #f5f5f0);
  border-radius: 6px;
  border: 1px solid var(--color-border, #ddd);
}

.kviz-nastaveni-skupina {
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  min-width: 150px;
}

.kviz-nastaveni-skupina select {
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 4px;
  background: var(--color-bg, #fff);
  color: inherit;
  font-family: inherit;
  font-size: 0.9rem;
}

.kviz-jmeno-blok {
  margin: 1rem 0 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.kviz-jmeno-blok input {
  max-width: 300px;
  padding: 0.5rem 0.7rem;
  border: 1px solid var(--color-border, #ccc);
  border-radius: 4px;
  font-family: inherit;
  font-size: 0.95rem;
  background: var(--color-bg, #fff);
  color: inherit;
}

.kviz-volitelne {
  font-weight: normal;
  font-size: 0.85rem;
  opacity: 0.7;
}

/* Progress bar */
.kviz-progress-bar {
  height: 6px;
  background: var(--color-border, #e0e0e0);
  border-radius: 3px;
  margin-bottom: 0.5rem;
  overflow: hidden;
}

#kviz-progress-fill {
  height: 100%;
  background: var(--color-primary, #4a7c59);
  border-radius: 3px;
  transition: width 0.4s ease;
}

.kviz-progress-text {
  font-size: 0.85rem;
  color: var(--color-muted, #666);
  margin-bottom: 1.5rem;
}

.kviz-badge {
  display: inline-block;
  padding: 0.1rem 0.5rem;
  background: var(--color-highlight, #f0f0eb);
  border: 1px solid var(--color-border, #ddd);
  border-radius: 3px;
  font-size: 0.8rem;
}

/* Otázka */
.kviz-otazka-obsah {
  margin-bottom: 1.5rem;
}

.kviz-obrazek-kontejner {
  margin: 1rem 0;
  text-align: center;
}

.kviz-obrazek-kontejner img {
  max-width: 100%;
  max-height: 400px;
  border-radius: 6px;
  border: 1px solid var(--color-border, #ddd);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
}

.kviz-obrazek-popis {
  font-size: 0.8rem;
  color: var(--color-muted, #666);
  font-style: italic;
  margin-top: 0.4rem;
}

.kviz-otazka-text {
  font-size: 1.1rem;
  font-weight: 600;
  margin: 1rem 0;
  line-height: 1.5;
}

/* Možnosti odpovědí */
.kviz-moznosti {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.kviz-moznost {
  padding: 0.75rem 1rem;
  border: 2px solid var(--color-border, #ddd);
  border-radius: 6px;
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, transform 0.1s;
  font-size: 0.95rem;
  line-height: 1.4;
  background: var(--color-bg, #fff);
  color: inherit;
  text-align: left;
  width: 100%;
}

.kviz-moznost:hover:not(:disabled) {
  border-color: var(--color-primary, #4a7c59);
  background: var(--color-highlight, #f5f5f0);
  transform: translateX(3px);
}

.kviz-moznost:disabled { cursor: default; transform: none; }

.kviz-moznost.spravna {
  border-color: #2d8a4e;
  background: #eaf7ee;
  color: #1a5c33;
}

.kviz-moznost.spatna {
  border-color: #c0392b;
  background: #fdecea;
  color: #7b1f1a;
}

.kviz-moznost.spravna::before { content: "✓ "; font-weight: bold; }
.kviz-moznost.spatna::before { content: "✗ "; font-weight: bold; }

/* Vysvětlení */
.kviz-vysvetleni {
  margin-top: 1rem;
  padding: 0.9rem 1.1rem;
  background: var(--color-highlight, #f8f8f3);
  border-left: 4px solid var(--color-primary, #4a7c59);
  border-radius: 0 6px 6px 0;
  font-size: 0.9rem;
  line-height: 1.5;
  animation: fadeIn 0.3s ease;
}

.kviz-vysvetleni strong { display: block; margin-bottom: 0.3rem; }

/* Tlačítko Další */
.kviz-dalsi-btn {
  margin-top: 1.2rem;
  padding: 0.7rem 1.5rem;
  background: var(--color-primary, #4a7c59);
  color: white;
  border: none;
  border-radius: 5px;
  font-family: inherit;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
}

.kviz-dalsi-btn:hover {
  background: var(--color-primary-dark, #3a6649);
  transform: translateY(-1px);
}

/* Výsledky */
.kviz-vysledky-obsah {
  text-align: center;
  padding: 1rem 0;
}

.kviz-vysledek-emoji {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
}

.kviz-skore-velky {
  font-size: 3rem;
  font-weight: bold;
  margin: 0.5rem 0;
  color: var(--color-primary, #4a7c59);
}

.kviz-skore-procent {
  font-size: 1.2rem;
  color: var(--color-muted, #555);
}

.kviz-zhodnoceni {
  font-size: 1rem;
  margin: 0.5rem 0 1.5rem;
  font-style: italic;
}

/* Statistiky podle kategorií */
.kviz-stat-tabulka {
  margin: 1.5rem auto;
  max-width: 480px;
  text-align: left;
}

.kviz-stat-radek {
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-bottom: 0.7rem;
  font-size: 0.9rem;
}

.kviz-stat-nazev {
  flex: 1;
  min-width: 120px;
}

.kviz-stat-bar-wrap {
  flex: 2;
  height: 14px;
  background: var(--color-border, #e0e0e0);
  border-radius: 7px;
  overflow: hidden;
}

.kviz-stat-bar-fill {
  height: 100%;
  border-radius: 7px;
  transition: width 0.6s ease;
}

.kviz-stat-cislo {
  min-width: 40px;
  text-align: right;
  font-weight: 600;
}

/* Tlačítka */
.kviz-akce {
  display: flex;
  gap: 0.8rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1.5rem;
}

.kviz-btn {
  padding: 0.65rem 1.4rem;
  border-radius: 5px;
  border: 2px solid transparent;
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all 0.2s;
}

.kviz-btn-primary {
  background: var(--color-primary, #4a7c59);
  color: white;
  border-color: var(--color-primary, #4a7c59);
}

.kviz-btn-primary:hover {
  background: var(--color-primary-dark, #3a6649);
  border-color: var(--color-primary-dark, #3a6649);
  transform: translateY(-1px);
}

.kviz-btn-secondary {
  background: transparent;
  color: var(--color-primary, #4a7c59);
  border-color: var(--color-primary, #4a7c59);
}

.kviz-btn-secondary:hover {
  background: var(--color-highlight, #f0f0eb);
  transform: translateY(-1px);
}

/* Přehled odpovědí */
#prehled-seznam {
  margin: 1rem 0;
}

.prehled-polozka {
  margin-bottom: 1.2rem;
  padding: 0.9rem 1rem;
  border-radius: 6px;
  border: 1px solid var(--color-border, #ddd);
}

.prehled-polozka.spravna { border-left: 4px solid #2d8a4e; }
.prehled-polozka.spatna { border-left: 4px solid #c0392b; }

.prehled-otazka { font-weight: 600; margin-bottom: 0.3rem; font-size: 0.9rem; }
.prehled-odpoved { font-size: 0.85rem; }
.prehled-odpoved .spravna-text { color: #2d8a4e; }
.prehled-odpoved .spatna-text { color: #c0392b; }

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}

@media (max-width: 600px) {
  .kviz-nastaveni { flex-direction: column; }
  .kviz-skore-velky { font-size: 2.2rem; }
  .kviz-stat-tabulka { max-width: 100%; }
}
</style>
