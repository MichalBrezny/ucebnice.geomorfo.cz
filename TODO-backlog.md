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

