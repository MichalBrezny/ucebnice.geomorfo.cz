/**
 * Geomorfologický kvíz – kviz.js
 * ucebnice.geomorfo.cz
 * 
 * Závislosti: KVIZ_DATA, SHEETS_WEBHOOK_URL, OBRAZKY_BASE
 * (injektovány Jekyllem v kviz.md)
 */

(function () {
  'use strict';

  // === STAV KVÍZU ===
  let stav = {
    vsechnyOtazky: [],
    aktivniOtazky: [],
    aktualniIndex: 0,
    skore: 0,
    odpovedi: [],        // { id, otazka, vybranaOdpoved, spravnaOdpoved, spravne, kategorie }
    jmeno: '',
    zacatekCas: null,
  };

  // === INICIALIZACE ===
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    stav.vsechnyOtazky = KVIZ_DATA || [];

    // Naplnit select kategorií
    const kategorie = [...new Set(stav.vsechnyOtazky.map(q => q.kategorie))].sort();
    const selectKat = document.getElementById('filtr-kategorie');
    kategorie.forEach(k => {
      const opt = document.createElement('option');
      opt.value = k;
      opt.textContent = k;
      selectKat.appendChild(opt);
    });

    // Event listenery
    document.getElementById('btn-start').addEventListener('click', zacitKviz);
    document.getElementById('btn-znovu').addEventListener('click', () => zobrazit('kviz-uvod'));
    document.getElementById('btn-detail').addEventListener('click', zobrazitPrehled);
    document.getElementById('btn-zpet').addEventListener('click', () => zobrazit('kviz-vysledky'));
  }

  // === SPUŠTĚNÍ KVÍZU ===
  function zacitKviz() {
    const filtrKat = document.getElementById('filtr-kategorie').value;
    const filtrObt = document.getElementById('filtr-obtiznost').value;
    const pocetVal = document.getElementById('pocet-otazek').value;
    stav.jmeno = document.getElementById('jmeno-studenta').value.trim();

    // Filtrovat otázky
    let filtrovane = stav.vsechnyOtazky.filter(q => {
      const katOk = filtrKat === 'vse' || q.kategorie === filtrKat;
      const obtOk = filtrObt === 'vse' || q.obtiznost === parseInt(filtrObt);
      return katOk && obtOk;
    });

    if (filtrovane.length === 0) {
      alert('Pro tuto kombinaci filtrů nejsou k dispozici žádné otázky. Zkuste jiné nastavení.');
      return;
    }

    // Zamíchat a omezit počet
    filtrovane = zamichat(filtrovane);
    if (pocetVal !== 'vse') {
      filtrovane = filtrovane.slice(0, parseInt(pocetVal));
    }

    stav.aktivniOtazky = filtrovane;
    stav.aktualniIndex = 0;
    stav.skore = 0;
    stav.odpovedi = [];
    stav.zacatekCas = Date.now();

    zobrazit('kviz-otazka');
    zobrazitOtazku();
  }

  // === ZOBRAZENÍ OTÁZKY ===
  function zobrazitOtazku() {
    const q = stav.aktivniOtazky[stav.aktualniIndex];
    const celkem = stav.aktivniOtazky.length;
    const cislo = stav.aktualniIndex + 1;

    // Progress
    document.getElementById('kviz-progress-fill').style.width =
      ((cislo - 1) / celkem * 100) + '%';
    document.getElementById('cislo-otazky').textContent = cislo;
    document.getElementById('celkem-otazek').textContent = celkem;
    document.getElementById('skore-live').textContent = stav.skore + ' správně';
    document.getElementById('kategorie-badge').textContent = q.kategorie;

    // Obrázek
    const imgKont = document.getElementById('obrazek-kontejner');
    if (q.obrazek) {
      const img = document.getElementById('otazka-obrazek');
      img.src = OBRAZKY_BASE + q.obrazek;
      img.alt = q.otazka;
      document.getElementById('obrazek-popis').textContent = q.obrazek_popis || '';
      imgKont.style.display = 'block';
    } else {
      imgKont.style.display = 'none';
    }

    // Otázka
    document.getElementById('otazka-text').textContent = q.otazka;

    // Možnosti – zamíchat pořadí
    const moznostiKont = document.getElementById('moznosti-kontejner');
    moznostiKont.innerHTML = '';

    const zamichangeMoznosti = zamichat([...q.moznosti]);
    zamichangeMoznosti.forEach((moznost, idx) => {
      const btn = document.createElement('button');
      btn.className = 'kviz-moznost';
      btn.textContent = moznost.text;
      btn.dataset.spravne = moznost.spravne;
      btn.dataset.text = moznost.text;
      btn.addEventListener('click', () => odpovedet(btn, q));
      moznostiKont.appendChild(btn);
    });
  }

  // === ZPRACOVÁNÍ ODPOVĚDI ===
  function odpovedet(tlacitko, otazka) {
    const vsechnaTlacitka = document.querySelectorAll('.kviz-moznost');
    vsechnaTlacitka.forEach(t => t.disabled = true);

    const jeSpravne = tlacitko.dataset.spravne === 'true';
    const vybranaTxt = tlacitko.dataset.text;

    // Obarvit správnou/špatnou
    vsechnaTlacitka.forEach(t => {
      if (t.dataset.spravne === 'true') {
        t.classList.add('spravna');
      } else if (t === tlacitko && !jeSpravne) {
        t.classList.add('spatna');
      }
    });

    if (jeSpravne) stav.skore++;

    // Uložit odpověď
    const spravnaTxt = [...vsechnaTlacitka].find(t => t.dataset.spravne === 'true').dataset.text;
    stav.odpovedi.push({
      id: otazka.id,
      otazka: otazka.otazka,
      vybranaOdpoved: vybranaTxt,
      spravnaOdpoved: spravnaTxt,
      spravne: jeSpravne,
      kategorie: otazka.kategorie,
      obtiznost: otazka.obtiznost,
    });

    // Zobrazit vysvětlení
    if (otazka.vysvetleni) {
      const vysvetleniDiv = document.createElement('div');
      vysvetleniDiv.className = 'kviz-vysvetleni';
      vysvetleniDiv.innerHTML = '<strong>💡 Vysvětlení:</strong> ' + escapeHtml(otazka.vysvetleni);
      document.getElementById('moznosti-kontejner').appendChild(vysvetleniDiv);
    }

    // Tlačítko Další / Dokončit
    const jePoslenli = stav.aktualniIndex === stav.aktivniOtazky.length - 1;
    const dalsiBtn = document.createElement('button');
    dalsiBtn.className = 'kviz-dalsi-btn';
    dalsiBtn.textContent = jePoslenli ? 'Zobrazit výsledky →' : 'Další otázka →';
    dalsiBtn.addEventListener('click', () => {
      if (jePoslenli) {
        zobrazitVysledky();
      } else {
        stav.aktualniIndex++;
        zobrazitOtazku();
      }
    });
    document.getElementById('moznosti-kontejner').appendChild(dalsiBtn);

    // Scroll k vysvětlení na mobilu
    dalsiBtn.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  // === VÝSLEDKY ===
  function zobrazitVysledky() {
    const celkem = stav.aktivniOtazky.length;
    const procent = Math.round(stav.skore / celkem * 100);

    document.getElementById('skore-final').textContent = stav.skore;
    document.getElementById('skore-max').textContent = celkem;
    document.getElementById('skore-procent').textContent = procent + ' %';

    // Emoji a zhodnocení
    let emoji, text;
    if (procent >= 90) { emoji = '🏆'; text = 'Vynikající výsledek! Máte skvělou znalost geomorfologie.'; }
    else if (procent >= 75) { emoji = '🎯'; text = 'Velmi dobrý výsledek! Jen pár mezer k doplnění.'; }
    else if (procent >= 60) { emoji = '📚'; text = 'Dobrý základ! Doporučujeme zopakovat nesprávné odpovědi.'; }
    else if (procent >= 40) { emoji = '🔍'; text = 'Je co zlepšovat. Projděte si příslušné kapitoly v učebnici.'; }
    else { emoji = '💪'; text = 'Nevzdávejte to! Prostudujte učebnici a zkuste to znovu.'; }

    document.getElementById('vysledek-emoji').textContent = emoji;
    document.getElementById('skore-zhodnoceni').textContent = text;

    // Statistiky podle kategorií
    const statKont = document.getElementById('statistiky-kategorie');
    const statData = {};
    stav.odpovedi.forEach(o => {
      if (!statData[o.kategorie]) statData[o.kategorie] = { spravne: 0, celkem: 0 };
      statData[o.kategorie].celkem++;
      if (o.spravne) statData[o.kategorie].spravne++;
    });

    if (Object.keys(statData).length > 1) {
      statKont.innerHTML = '<p style="font-size:0.9rem;font-weight:600;margin-bottom:0.7rem;">Výsledky podle kategorií:</p>';
      Object.entries(statData).sort((a,b) => a[0].localeCompare(b[0], 'cs')).forEach(([kat, data]) => {
        const p = Math.round(data.spravne / data.celkem * 100);
        const barColor = p >= 75 ? '#2d8a4e' : p >= 50 ? '#d4a017' : '#c0392b';
        statKont.innerHTML += `
          <div class="kviz-stat-radek">
            <span class="kviz-stat-nazev">${escapeHtml(kat)}</span>
            <div class="kviz-stat-bar-wrap">
              <div class="kviz-stat-bar-fill" style="width:${p}%;background:${barColor}"></div>
            </div>
            <span class="kviz-stat-cislo">${data.spravne}/${data.celkem}</span>
          </div>`;
      });
    } else {
      statKont.innerHTML = '';
    }

    // Logovat do Google Sheets
    logDoSheetu(procent, celkem);

    zobrazit('kviz-vysledky');
  }

  // === PŘEHLED ODPOVĚDÍ ===
  function zobrazitPrehled() {
    const seznam = document.getElementById('prehled-seznam');
    seznam.innerHTML = '';
    stav.odpovedi.forEach((o, i) => {
      const div = document.createElement('div');
      div.className = 'prehled-polozka ' + (o.spravne ? 'spravna' : 'spatna');
      div.innerHTML = `
        <div class="prehled-otazka">${i+1}. ${escapeHtml(o.otazka)}</div>
        <div class="prehled-odpoved">
          ${o.spravne
            ? `<span class="spravna-text">✓ ${escapeHtml(o.vybranaOdpoved)}</span>`
            : `<span class="spatna-text">✗ Vaše odpověď: ${escapeHtml(o.vybranaOdpoved)}</span>
               <br><span class="spravna-text">✓ Správně: ${escapeHtml(o.spravnaOdpoved)}</span>`
          }
        </div>`;
      seznam.appendChild(div);
    });
    zobrazit('kviz-prehled');
  }

  // === LOGGING DO GOOGLE SHEETS ===
  function logDoSheetu(procent, celkem) {
    if (!SHEETS_WEBHOOK_URL) return;

    const data = {
      cas: new Date().toISOString(),
      jmeno: stav.jmeno || 'anonymní',
      skore: stav.skore,
      celkem: celkem,
      procent: procent,
      doba_sekund: Math.round((Date.now() - stav.zacatekCas) / 1000),
      kategorie: document.getElementById('filtr-kategorie').value,
      obtiznost: document.getElementById('filtr-obtiznost').value,
      detaily: stav.odpovedi.map(o => ({
        id: o.id,
        spravne: o.spravne,
        kategorie: o.kategorie,
      })),
    };

    fetch(SHEETS_WEBHOOK_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).catch(() => {}); // Tiše ignorujeme chyby – kvíz musí fungovat i bez loggingu
  }

  // === POMOCNÉ FUNKCE ===
  function zobrazit(idScreen) {
    ['kviz-uvod', 'kviz-otazka', 'kviz-vysledky', 'kviz-prehled'].forEach(id => {
      document.getElementById(id).style.display = id === idScreen ? 'block' : 'none';
    });
    // Scroll nahoru
    document.getElementById('kviz-app').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function zamichat(pole) {
    const a = [...pole];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
              .replace(/"/g, '&quot;').replace(/'/g, '&#039;');
  }

})();
