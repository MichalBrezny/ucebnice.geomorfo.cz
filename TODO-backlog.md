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
   - **Stav na tomto počítači (2026-07-17):** `_site/` je zatím jen build output, NENÍ worktree větve `site` (`git worktree list` ukazuje jen hlavní strom). Pro deploy odsud je třeba buď spustit one-time setup v `deploy.ps1`, nebo použít samostatnou složku s klonem `site`.
4. Push do `site` **automaticky** spustí GitHub Action `.github/workflows/deploy-wedos.yaml` (žije na větvi `site`), která přes FTPS nahraje soubory na WEDOS hosting → web je live. FTP údaje jsou v GitHub Secrets (`WEDOS_FTP_*`).

Pozn.: push do `main` sám o sobě web NENASADÍ – automatická je jen část `site → WEDOS`.

**Úklid k uvážení:** `bin/deploy` (bash, deploy do `gh-pages`) je starý pozůstatek šablony jekyll-chapterbook a nepoužívá se – lze smazat.

