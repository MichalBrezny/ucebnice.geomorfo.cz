# TODO – návrhy callouts / admonitions

Návrhy, kde do textu doplnit callouty (admonition boxy) pro lepší didaktiku. Jde o **návrhy k uvážení**, ne o povinnost – vybrat ty, které dávají smysl, a nepřehltit text (ideálně 1–3 boxy na kapitolu).

## Připomenutí syntaxe

```liquid
{% include admonition.html type="example" title="Příklad: výpočet průtoku" body="Text boxu…" %}
```

Delší/formátovaný obsah (rovnice, seznamy) je lepší vložit přes samostatný soubor:

```liquid
{% include admonition.html type="example" title="…" content="/cesta/k/souboru.md" %}
```

**Dostupné typy:** `note`, `abstract`, `info`, `tip`, `success`, `question`, `warning`, `failure`, `danger`, `bug`, `example`, `quote`.

**Doporučené použití typů v učebnici:**
- `example` – řešené příklady (výpočty), konkrétní lokality/události
- `tip` – pomůcky k zapamatování, jak něco poznat v terénu
- `info` – zajímavosti a rozšiřující kontext
- `note` – upřesnění, terminologické poznámky
- `warning` – časté záměny a nedorozumění
- `danger` – přírodní hrozby (geohazardy)
- `quote` – historické citáty
- `question` – už se používá na konci kapitol (Otázky a pojmy)

---

## Návrhy po kapitolách

### Úvod (`010-Úvod/01-uvod.md`)
- **`quote`** u pasáže o Huttonovi/Lyellovi – dobový citát k uniformitarianismu („The present is the key to the past").
- **`info`** u zmínky o studiu jiných planet – Olympus Mons na Marsu, srovnání se Zemí (propojit se sopkami).

### Základní koncepty (`010-Úvod/02-zakl_konc.md`)
- **`example`** k zachování hmoty – konkrétní dosazení do `I − O = δS` (např. bilance sedimentů v korytě nebo na svahu).
- **`warning`** k magnitudu × frekvenci – upozornit, že „velký účinek" ≠ „častý"; časté nedorozumění (viz i pětiletá vs. pětisetletá povodeň v poznámce).
- **`tip`** – jak si zapamatovat endogenní (nitro, „staví do výšky") × exogenní („zarovnává").

### Globální geomorfologie (`020-…/010-globalni.md`)
- **`tip`** k rychlosti desek – názorné přirovnání (desky se pohybují rychlostí ~ růstu nehtů, cm/rok).
- **`note`** k Mohorovičičově diskontinuitě – jak byly hranice v nitru Země zjištěny (lom seismických vln).
- **`info`** k horkým skvrnám – Havajské souostroví, stáří ostrovů roste se vzdáleností od skvrny.

### Tektonická geomorfologie (`020-…/020-tectonic.md`)
- **`tip`** – návod „jak poznat pravostranný/levostranný zlom" (postavit se čelem ke zlomu…) jako box vedle videa.
- **`warning`** – rozdíl **puklina × zlom** (u pukliny nedošlo k pohybu).
- **`example`** k inverzi reliéfu – konkrétní příklad antiklinálního údolí.

### Sopky (`020-…/030-sopky.md`)
- **`danger`** k pyroklastickému proudu a lahárům – rychlost (150–700 km/h), teplota, proč jsou tak smrtící.
- **`example`** ke stratovulkánům – konkrétní erupce (Mount St. Helens 1980, Vesuv 79 n. l., Pinatubo 1991).
- **`tip`** – vztah viskozita ↔ typ erupce (kyselé = explozivní, bazické = efuzivní).

### Zvětrávání (`030-…/010-zvetravani.md`)
- **`tip`** ke Goldichovu pravidlu – „minerály krystalizující při nejvyšší teplotě zvětrávají nejrychleji" (obrácené Bowenovo schéma).
- **`warning`** – zvětrávání (změna in situ) × eroze (odnos) se často zaměňují.
- **`info`** – dešťová voda je díky CO₂ mírně kyselá (pH ≈ 5,7).

### Svahy (`030-…/020-svahy.md`)
- **`example`** – **řešený výpočet faktoru bezpečnosti FS** na konkrétních číslech (koheze, úhel tření, pórový tlak) → ukázat pásma stability. Vysoká přidaná hodnota.
- **`danger`** – blokovobahenní proudy, reálná událost (Vrátná dolina, Malá Fatra 2014 – už zmíněná u obrázku).
- **`warning`** – **svahový pohyb (proces) × svahová deformace (výsledná forma)**; klíčové rozlišení čs. klasifikace.

### Fluviální geomorfologie (`030-…/030-fluvial.md`)
- **`example`** – **řešené výpočty**: průtok `Q = vA`, Manningova rovnice, Froudeho číslo na konkrétních hodnotách. Silně doporučeno.
- **`warning`** – **výsep (nárazový, erozní) × jesep (jesepní, akumulační) břeh** – notoricky se plete.
- **`info`** – říční pirátství (kaptáž) s konkrétním příkladem.
- **`note`** – jak číst Hjulstrømův diagram (proč se nejjemnější jíl hůř eroduje).

### Povodí (`030-…/040-povodi.md`)
- **`tip`** – hydrologické číslování (zdola, od ústí) × geomorfologické (shora, Strahler/Shreve); snadno se zamění.
- **`example`** – Strahlerova vs. Shrevova klasifikace názorně na malé síti.

### Glaciální (`030-…/050-glac.md`)
- **`info`** – aktuální úbytek hmoty ledovců (~270 Gt/rok) v kontextu klimatické změny.
- **`example`** – Glenova rovnice: proč malá změna napětí → velká změna deformace (n ≈ 3).
- (Boxy `note`/`info` k oblíku a striacím už v kapitole jsou – ponechat.)

### Periglaciální (`030-…/060-periglac.md`)
- **`info`** – mocnost permafrostu (Sibiř až 1500 m); podíl souše v periglaciální zóně.
- **`warning`/`danger`** – degradace permafrostu a klimatická změna (termokras, dopady na stavby a infrastrukturu).
- **`example`** – epigenetický × syngenetický permafrost (směr růstu mocnosti).

### Eolická (`030-…/070-eolicka.md`)
- **`info`** – transport saharského prachu do střední Evropy a Amazonie (živiny, fosfor) – zvýraznit, už je v textu.
- **`tip`** – jak z typu duny odvodit množství písku a variabilitu větru (návaznost na Obr.).
- **`note`** – spraš jako archiv kvartéru (sekvence pohřbených půd).

### Kras (`030-…/080-kras.md`)
- **`info`** – konkrétní lokality (Moravský kras – přikrytý; cenoty na Yucatánu; věžový kras / mogoty).
- **`warning`** – **kras × pseudokras** (tvary v nerozpustných horninách).
- **`example`** – reverzibilita rovnice krasovění (rozpouštění vs. srážení krápníků). *(Pozn.: samotná rovnice zatím chybí – viz `TODO-obsahove-mezery.md`.)*

### Marinní / pobřeží (`030-…/090-marinni.md`)
- **`danger`** – **tsunami**: vznik (vertikální pohyb dna), chování na širém oceánu vs. u pobřeží, proč je nebezpečné.
- **`warning`** – **amplituda × výška vlny** (amplituda je polovina výšky) – přesně na to místo, kde jsme opravovali definici.
- **`example`** – typy delt podle převažujícího procesu (Mississippi × Nil × slapové delty).
- **`info`** – glaciizostatický výzdvih Skandinávie; vyzdvižené antické přístavy ve Středomoří.

---

## Vzorové snippety (pro „jak")

Řešený příklad (svahy – faktor bezpečnosti):
```liquid
{% include admonition.html type="example" title="Příklad: faktor bezpečnosti svahu" body="Uvažujme svah o sklonu θ = 30°… (dosazení do S = c + σ′·tan φ a FS = S/τ)…" %}
```

Přírodní hrozba (pobřeží – tsunami):
```liquid
{% include admonition.html type="danger" title="Tsunami" body="Na širém oceánu má vlna výšku jen desítky cm, ale u pobřeží se zkracuje a její výška prudce roste…" %}
```

Častá záměna (fluviál – břehy meandru):
```liquid
{% include admonition.html type="warning" title="Výsep vs. jesep" body="Výsepní břeh je nárazový (eroze), jesepní je vnitřní (akumulace)." %}
```
