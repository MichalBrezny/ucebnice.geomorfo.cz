# TODO – backlog

Nezávazné návrhy a vylepšení k uvážení. Nejde o chyby ani obsahové mezery (ty jsou vyřešené), ale o věci, které stojí za zvážení do budoucna.

## Projektový slovník pro kontrolu pravopisu (cSpell)

Editor (cSpell) hlásí stovky „neznámých slov", ale jde téměř výhradně o **korektní odborné termíny, cizí názvy a citační klíče** (např. *permafrost, klasty, sinusoita, blokovobahenní, Froudeho, Hjulstrøm, saltací, cruden, hungr*…). **Nejsou to překlepy.**

Tato hlášení zbytečně zahlcují editor a mohou zakrývat skutečné překlepy.

**Návrh:** přidat projektový slovník s těmito termíny, aby zůstala aktivní jen relevantní hlášení. Varianty:
- `cspell.json` v kořeni projektu (pole `words`), nebo
- `.vscode/settings.json` → `cSpell.words`.

Do slovníku patří odborné termíny geomorfologie, cizí místní/osobní názvy z popisků obrázků a BibTeX citační klíče.

## Automatické číslování obrázků
Čísla obrázků jsou teď zapsaná ručně v popiscích i odkazech, takže při přidání/odebrání obrázku je nutné vše přečíslovat ručně (riziko rozjetí, jako u eolické kapitoly). Zvážit automatické číslování – např. CSS counters (`counter-reset`/`counter-increment` nad `<figure>`/`<figcaption>`) pro popisky, ideálně spolu s Liquid/pluginem pro odkazy „Obr. X" v textu, aby čísla i křížové odkazy generovala sazba. Řešit jednotně pro celou učebnici, ne jen eolickou kapitolu.

## ~~MathJax – dokončit migraci na v3 + zapnout mhchem~~ (hotovo 2026-07-18)

Mrtvý v2 loader (`cdn.mathjax.org`, vypnuto 2017) i v2 config v [`_includes/head.html`](_includes/head.html) nahrazeny jedním v3 configem + async loaderem `tex-chtml.js` z jsdelivr; zakomentovaný v3 loader v [`_includes/footer.html`](_includes/footer.html) smazán. Zapnut balíček **mhchem** → lze psát chemické rovnice přes `\ce{...}`.

Rovnice krasovění v `080-kras.md` přepsána z ručního TeXu na `\ce{...}`.

Nasazeno 2026-07-18. Ověřeno headless MathJaxem (Node) nad vygenerovanými stránkami: 126 vzorců, 0 chyb TeXu.

### Jak psát matematiku (pozor na dolar v textu)

- `$$...$$` – rovnice na samostatném řádku. Převádí **kramdown už při buildu** na `\[...\]`.
- `$...$` – proměnné v textu (`$Re$`, `$\tau$`). Kramdown je **neumí** (zná jen dvojité), zpracuje je až **MathJax v prohlížeči** – proto je v [`_includes/head.html`](_includes/head.html) v konfiguraci `inlineMath` s jednoduchým dolarem. Bez toho by se na webu zobrazovaly doslova i s dolary.

⚠️ **Důsledek:** dolar v textu se od té doby bere jako oddělovač vzorce. Když v odstavci napíšeš např. „cena 5 $" a někde dál padne další osamocený dolar, MathJax si je spáruje a vysází mezi nimi nesmysl. Pro dolar jako znak psát **`\$`** (`processEscapes` je zapnutý). Aktuálně jsou všechny výskyty `$` v kapitolách matematika, takže problém nikde nenastává.

## Deploy – jak to funguje (poznámka pro připomenutí)

Větve:
- `main` – hlavní obsah (bez kvízu)
- `kviz-poznavacka` – obsah s kvízem/poznávačkou (sdílený engine)
- `site` – **výstupní** větev: jen zkompilované HTML (`_site/`). Needituje se ručně, generuje ji Jekyll.

Postup nasazení:
1. Změny obsahu → commit + push do `main` (příp. `kviz-poznavacka`).
2. Zbuildovat web (Jekyll `build` / devcontainer zapíše do `_site/`; `_site/` je v `.gitignore`).
3. Zbuildované HTML dostat do větve `site`. Tento krok se v čase měnil a je potřeba ho na daném počítači mít nastavený:
   - **Historicky:** samostatná složka = klon větve `site`, kam se ručně zkopíroval obsah `_site/` a pushnul se (přes GitHub Desktop) – jen HTML soubory.
   - **Skriptově:** `bin/deploy.ps1` – při prvním spuštění nastaví `_site/` jako git **worktree** větve `site`, při dalších spuštěních commitne a pushne.
   - **Stav na tomto počítači (od 2026-07-18):** `_site/` už JE nastavený jako git worktree větve `site` (one-time setup přes `deploy.ps1` proběhl). Další deploy = jen znovu spustit `deploy.ps1` (commit + push).
4. Push do `site` **automaticky** spustí GitHub Action `.github/workflows/deploy-wedos.yaml` (žije na větvi `site`), která přes FTPS nahraje soubory na WEDOS hosting → web je live. FTP údaje jsou v GitHub Secrets (`WEDOS_FTP_*`).

Pozn.: push do `main` sám o sobě web NENASADÍ – automatická je jen část `site → WEDOS`.

⚠️ **Důležité – čistý build vs. watch:** Devcontainer běží `jekyll serve --watch`, který do `_site/` zapisuje **dev build** a **NEMAŽE** už zkopírované obsolete soubory. `deploy.ps1` sám nebuilduje – jen commitne, co je v `_site/`. Takže když se deployuje nad watch-buildem, jde na web neuklizený dev build (přesně proto se na web od června dostaly `CLAUDE.md`, `TODO-*`, `docker-compose.yml`, než jsme je 2026-07-18 přidali do `exclude`). **Před deployem dělat čistý produkční build**, který pročistí `_site/`:
```
docker run --rm -e JEKYLL_ENV=production -e JEKYLL_NO_BUNDLER_REQUIRE=true \
  -v "<projekt>:/srv/jekyll" -w /srv/jekyll <devcontainer-image> bash -lc "jekyll build"
```
(`JEKYLL_NO_BUNDLER_REQUIRE=true` obchází Bundler – jinak padá na `Gemfile.lock`; `entry_point.sh` to řeší mazáním `Gemfile.lock`.) Ideálně tenhle čistý build zadrátovat přímo do `deploy.ps1`, aby se na to nezapomínalo.

⚠️ **`keep_files` v `_config.yml` neodstraňovat.** Ve větvi `site` (= obsah `_site/`) žije i `.github/workflows/deploy-wedos.yaml`. Výchozí `keep_files` Jekyllu je jen `['.git', '.svn']`, takže čistý build by workflow smazal → push do `site` by zrušil automatický deploy na WEDOS. Proto je od 2026-07-18 v configu `keep_files: ['.git', '.github']` (ověřeno: workflow build přežije, obsolete soubory se dál mažou).

**Úklid k uvážení:** `bin/deploy` (bash, deploy do `gh-pages`) je starý pozůstatek šablony jekyll-chapterbook a nepoužívá se – lze smazat.

