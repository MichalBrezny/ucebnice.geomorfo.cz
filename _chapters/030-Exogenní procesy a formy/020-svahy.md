---
title: Svahy a svahové procesy
slug: svahy
abstract: Svahy, svahové procesy a sesuvy
---


# Svahy

Svah – ukloněná část zemského povrchu je nejrozšířenějším a také nejdynamičtějším prvkem reliéfu krajiny. Svahy zabírají přibližně 90 % povrchu souše. Většina svahů (cca 60 %) má sklon do 10°.

V základu můžeme rozlišovat dva typy svahů. A to podle toho, zda jsou pokryté sedimenty či půdou (*soil-mantled hillslopes*). Tyto svahy jsou charakteristické svým hladkým průběhem s jen občasnými výchozy podloží. Druhým typem jsou svahy tvořené jen skalním podložím, neboli strukturní svahy (*bedrock hillslopes*). Takovéto svahy jsou typické rozeklaným povrchem.

## Části svahu

Svah lze rozčlenit do několika částí (jednotek, segmentů). Nejjednodušší rozdělení je do tří jednotek (Obr.[1](#fig:segmenty_svahu)). V horní části je konvexní jednotka, kde se sklon svahu s narůstající vzdáleností zvětšuje. Následuje lineární svah (sklon se nemění). Spodní část svahu má konkávní tvar, což znamená, že se sklon zmenšuje. V některých případech prostřední část svahu chybí a má konvexně-konkávní průběh {% cite whiteConvexConcaveLandslopesGeometrical1966 %}. Přechod mezi jednotlivými segmenty může být pozvolný ale i ostrý.

<figure id="fig:segmenty_svahu">
<img src="/assets/obrazky/svahy/segmenty_svahu.png" />
<figcaption>Tři základní segmenty svahu.</figcaption>
</figure>

Pojmenováním jednotlivých částí svahu se zabývala celá řada autorů. {% cite=dalrympleHypotheticalNineUnit1968 %} rozdělili svah
do osmi částí:

1. rozvodní část svahu o sklonu 0°–1°
2. konvexní infiltrační část svahu se sklonem 2°–4°
3. konvexní část svahu s plíživým pohybem materiálu
4. srub se sklonem minimálně 45°, zpravidla ale se sklonem přes 65°
5. konkávní erozně-denudační část se sklonem 26°–35° kde probíhá transport materiálu
6. konkávní akumulační část svahu
7. fluviální část svahu v dosahu říční činnosti
8. samotné říční koryto

## Síly působící na svah

Každá část svahu je pod vlivem gravitace. Ta vyvolává tíhové napětí. Pro zjednodušení si představte objekt který je na nakloněné rovině -- svahu. Tento objekt svou tíhou působí svisle na svah a vyvolává tíhové napětí. To můžeme rozložit do dvou složek. *Normálová* složka resp. *normálové napětí* působí kolmo na rovinu svahu. Po svahu dolů působí *smykové napětí*. Smykové a normálové napětí vypočítáme podle rovnic:

\text{Smykové napětí: } 
\text{Normálové napětí: } 
  
$$
\tau = \rho_{s}gz\sin{\theta} \\
\sigma = \rho_{s}gz\cos{\theta} 
$$

Velikost smykového a normálového napětí je závislá na velikosti sklonu
([\\(\\theta\\)]{.math .inline}) svahu. S rostoucím sklonem narůstá
smykové napětí a normálové klesá a naopak. Na horizontálním povrchu je
smykové nulové, normálové napětí se rovná tíhovému. U kolmé stěny je
naopak nulové normálové napětí a smykové se rovná tíhovému napětí.

<figure id="fig:svahnapeti">
<figure>
<img src="/assets/obrazky/svahy/svah_napeti.png"/>
</figure>
<figcaption>A: Rozklad tíhového napětí (síly) na normálové napětí (<span
class="math inline">\(\sigma\)</span>) a smykové napětí (<span
class="math inline">\(\tau\)</span>) v závislosti na sklonu svahu (<span
class="math inline">\(\beta\)</span>). B: ukázka rozložení sil na svahu
(upraveno podle <span class="citation"
data-cites="selbyHillslopeMaterialsProcesses1993"></span>)</figcaption>
</figure>

## Koncept stability svahu

Koncept stability svahu souvisí s působením výše uvedených sil (napětí)
ve svahu. Ve své podstatě se jedná o poměr mezi silami, které drží
materiál svahu v původní poloze a silami, které se snaží jej uvést do
pohybu. Stabilita svahu tedy lze vyjádřit rovnicí:

$$
\text{stabilita svahu} = \frac{\text{síly držící svah}}{\text{mobilizační síly}}
$$

Poměr těchto sil se označuje jako faktor bezpečnosti (*factor of safety*, FS) a ten vypočítáme jako podíl pevnosti ve smyku 
$S$ a smykového napětí $\tau$:

$$
\text{FS} = \frac{S}{\tau}
$$

Svah je stabilní pokud je faktor bezpečnosti větší než jedna. Zpravidla se vyčleňují tři "pásma stability":

-   FS $>1,3$ jedná se o stabilní svah
-   FS z intervalu $(1;1,3$ se jedná o podmínečně stabilní svah
-   FS $\leq1$ se jedná o aktivně nestabilní svah

Pevnost ve smyku (*shear strength*, S) lze vypočítat podle Coulomb-Terzagiho rovnice následovně:

$$
S = c+\sigma^\prime\tan{\phi}
$$

kde $c$ je koheze, $\phi$ je úhel vnitřního tření a $\sigma^\prime$ je efektivní normálové napětí.

*Koheze materiálu* ($c$) nebo také soudržnost materiálu je veličina, která udává jak jednotlivé částice materiálu drží pospolu. Je nezávislá na vnějších tlacích a je dána zejména chemickými vazbami a adhezí.

*Úhel vnitřního tření materiálu* $\phi$ je závislý na velikosti částic, jejich tvarem a rozmítění.

*Normálové napětí* zvyšuje úhel vnitřního tření. Jelikož proti normálovému napětí působí tlak vody v pórech (tzv. pórové tlaky) snižuje se o jejich hodnotu velikost normálového napětí. Hovoříme potom o *efektivním normálovém napětí* $\sigma^\prime$.

Stabilita svahu je stav, který se mění v čase v závislosti na celé řadě podmínek. Může se zvyšovat, ale i snižovat.

Tabulka [tab:stabilita_faktory](#tab:stabilita_faktory) obsahuje příklady různých příčin sesuvů a jiných svahových pohybů. Tyto příčiny můžeme rozdělit do tří skupin:
1.  Predispozice
2.  Přípravné faktory
3.  Spouštěcí faktory

*Predispozice* jsou vlastnosti hornin, kterými je svah budován (např. koheze, pevnost materiálu), přítomnost a orientace tektonických struktur (pukliny), sklon, výška svahu a podobně. *Přípravné faktory* způsobují postupné snižování stability svahu. Například zvětráváním horniny může docházet ke snižování koheze, rozpouštění tmele, který drží jednotlivé klasty. Akumulací sedimentů v horní části svahu dochází k zatěžování svahu (roste ve svahu smykové napětí). *Spouštěcí faktory* jsou ty, které svah uvedou do pohybu. Způsobí tedy to, že se faktor bezpečnosti sníží na jedna a méně. Spouštěcím faktorem může být například zemětřesení, které ve svahu vyvolává přechodné napětí. Významným spouštěčem jsou intenzivní srážky, které způsobují zvýšení pórových tlaků (a tedy snížení normálového napětí).

<figure id="fig:stability_diagram">
<img src="/assets/obrazky/svahy/stability_diagram.png" />
<figcaption>
Faktory ovlivňující stabilitu svahu. V případě destabilizace
svahu pak nastupují faktory, podporující nestabilitu svahu (upraveno
podle {% cite gladeLandslideGeomorphologyChanging2010 %})
</figcaption>
</figure>

<figure>
	<img src="/assets/obrazky/svahy/time_stability.png" style="width:100.0%"/>
	<figcaption>
    Vývoj stability dvou hypotetických svahů. Přípravné faktory (PF) postupně nebo nárazově snižují stabilitu svahu (snižují pevnost ve smyku). Spouštěcí faktory (triggery -- T) jsou ty, které sníží pevnost ve smyku tak, že faktor bezpečnosti $ \leq 1$ (upraveno podle {% cite popescuSuggestedMethodReporting1994 mcollLandslideCausesTriggers2015 %}
    </figcaption>
	<label for="fig:timestability"> </label>
</figure>


<table class="table table-striped table-hover table-sm">
<tbody>
<tr>
<td colspan="4" style="text-align: center;"><strong>Predispozice</strong></td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Plastický, měkký materiál</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Sypký materiál</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Navětralý materiál</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Tektonicky porušený materiál</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Příhodně orientované diskontinuity (např. vrstevní plochy, pukliny, zlomy)</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Kontrast mezi propustností hornin</td>
</tr>
<tr>
<td colspan="4" style="text-align: center;">Kontrastní pevnost hornin (pevné horniny v nadloží plastických např. pískovce na jílovcích)</td>
</tr>
</tbody>
</table>
<table class="table table-striped table-hover table-sm">
<tbody>
<tr>
<td style="text-align: center;"><strong>Proces</strong></td>
<td style="text-align: center;"><strong>Geomorfologický</strong></td>
<td style="text-align: center;"><strong>Fyzikální</strong></td>
<td style="text-align: center;"><strong>Antropogenní</strong></td>
</tr>
<tr>
<td><strong>Přípravné faktory</strong></td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Nárůst výšky svahu nebo sklonu</td>
<td>Tektonické pochody, vulkanismus, výzdvih po odlednění</td>
<td></td>
<td>Výkopy ve svahu, násypy</td>
</tr>
<tr>
<td></td>
<td>Fluviální, marinní nebo ledovcová eroze</td>
<td></td>
<td></td>
</tr>
<tr>
<td>Ztráta opory</td>
<td>Ústup ledovce</td>
<td></td>
<td>Odtěžení paty svahu</td>
</tr>
<tr>
<td>Odkrytí potenciálních smykových ploch</td>
<td>Eroze</td>
<td></td>
<td>Výkopy ve svahu</td>
</tr>
<tr>
<td>Snížení pevnosti horniny</td>
<td>Sufoze, rozpouštění</td>
<td>Zvětrávání</td>
<td>Hloubení tunelů, dolů; odlesnění</td>
</tr>
<tr>
<td></td>
<td>Zvětrávání</td>
<td>Únava materiálu</td>
<td></td>
</tr>
<tr>
<td>Zatěžování svahu</td>
<td>Postupná akumulace sedimentů</td>
<td></td>
<td>Stavba, ukládání materiálu -- výsypky</td>
</tr>
<tr>
<td>Dlouhodobé zvyšování hladiny podzemní vody</td>
<td>Klimatické změny</td>
<td></td>
<td>Infiltrace srážkových vod, prasklé potrubí</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>Zavlažování</td>
</tr>
<tr>
<td></td>
<td></td>
<td></td>
<td>Odstranění vegetace</td>
</tr>
<tr>
<td><strong>Spouštěče</strong></td>
<td><strong>Geomorfologické</strong></td>
<td><strong>Fyzikální</strong></td>
<td><strong>Antropogenní</strong></td>
</tr>
<tr>
<td>Rychlý nárůst pórových tlaků</td>
<td>Rychlé zatížení sedimenty z Undrained loading from rapid emplacement of sediment</td>
<td>Srážky</td>
<td>Zatížení rychlým uložením navážky</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Tání sněhu/ledu</td>
<td></td>
</tr>
<tr>
<td>Rychlý pokles hladiny podzemní vody</td>
<td>Protržení přírodních hrází</td>
<td></td>
<td>Snižování hladiny v nádržích</td>
</tr>
<tr>
<td>Přechodná napětí</td>
<td></td>
<td>Zemětřesení</td>
<td>Vibrace strojů</td>
</tr>
<tr>
<td></td>
<td></td>
<td>Vítr</td>
<td></td>
</tr>
<tr>
<td>Snížení pevnosti</td>
<td></td>
<td>Degradace permafrostu</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td>Zvětrávání</td>
<td></td>
</tr>
<tr>
<td></td>
<td></td>
<td>Únava materiálu</td>
<td></td>
</tr>
<tr>
<td>Zatěžování svahu</td>
<td>Jiné sesuvy</td>
<td>Srážky</td>
<td>Stavby</td>
</tr>
</tbody>
</table>




# Gravitační svahové pochody

## Světová klasifikace svahových pohybů

Gravitační svahové pohyby jsou způsobeny přímým působením gravitace. Dalo by se říct, že "klasickou" a celosvětově zaužívanou klasifikací
svahových pohybů je klasifikace []{.citation cites="crudenLandslideTypesProcesses1996"} s poslední úpravou od Hungra []{.citation cites="hungrVarnesClassificationLandslide2014"}. Tato klasifikace je založena na třech kritériích:
-   rychlost pohybu
-   mechanismus pohybu
-   typ horniny (skalní hornina/zemina)

Svahové pohyby rozdělují do následujících šesti skupin:
-   Řícení (*fall*)
-   Odklánění (*topple*)
-   Sesouvání (*slide*)
-   Boční rozšiřování (*spread*)
-   Tečení (*flow*)
-   Svahové deformace (*slope deformation*)

<figure>
  <center>
    <img src="/assets/obrazky/svahy/landslide_type.png" alt="Typy gravitačních svahových pohybů (Upraveno podle USGS)"/>
    <figcaption>Typy gravitačních svahových pohybů (Upraveno podle USGS)</figcaption>
  </center>
</figure>

### Řícení

*Řícení* (*fall*) je nejrychlejším gravitačním procesem, kdy rychlost pohybu činí řádově m s^−1^. K řícení dochází na strmých svazích ([\\(\>\\SI{45}{\\degree}\\)]{.math .inline}). Pohyb hmoty je alespoň v části trajektorie realizován volným pádem a následně se horninové
fragmenty kutálejí či poskakují. Řícení můžeme rozlišit podle materiálu, který se účastní pohybu na: skalní řícení, suťové řícení a řícení v zeminách (spraši).

Řícení může nabývat celé řady podob. *Sesypávání* probíhá nejčastěji v zeminách. Dále může docházet k *odpadávání úlomků* ze skalních výchozů. Na úpatí skalní stěny se tvoří osypy (*talus*). *Odvalové řícení* je způsobeno odkláněním bloku (viz níže), kdy po překročení kritické meze dojde k jeho kolapsu. *Planární řícení* zahrnuje podobně jako odvalové řícení větší masu horniny. V iniciální fázi dochází k sesouvání horniny podél planární smykové plochy a až následně dojde k pohybu volným pádem a tedy řícení. Jedná se často o velké katastrofické události.

### Odklánění

*Odklánění* nebo také *odsedání* (*toppling*) je proces, kdy dochází k pohybu horninového bloku kolem horizontální osy. V podstatě jde překlápění bloku ze svahu dolů. Jedná se o pomalé pohyby (mm ^−1^). Avšak ve finální fázi může dojít až ke katastrofickému zrychlení pohybu -- zřícení (m s^−1^).

[]{.citation cites="goodmanTopplingRockSlopes1976"} rozlišují dva základní druhy odklánění. Prvním typem je blokové odklánění. Jedná se o uklánění velkých bloků hornin. Predispozicí jsou strmě do svahu zapadající diskontinuity, které od sebe oddělují jednotlivé horninové bloky a případně doplněné o mírně ukloněné diskontinuity tvořící bázi bloků. Druhý typ je ohybové odklánění (*flexural toppling*). K této deformaci může docházet na strmých svazích, které jsou budované horninami se strmě zapadajícími diskontinuitami s velmi malým rozestupem. K odklánění může docházet i v zeminách např. na březích
vodních toků.

### Sesouvání

*Sesouvání* (*slide*) je relativně rychlý, klouzavý pohyb horninové hmoty na svahu podél jedné nebo více *smykových ploch*. Rychlost je variabilní, může se pohybovat v řádu mm ^−1^--m s^−1^. Rychlost pohybu uvolněné hmoty se směrem do hloubky nemění.

*Sesouvání je proces*, jehož výsledný tvar je *sesuv*.
Sesuv má tři základní části:
-   Odlučná oblast (výchoz smykové plochy) 
-   Transportní zóna 
-   Akumulační zóna

Smyková plocha je plocha, podél které došlo k sesouvání. Sesouvání může probíhat i po více smykových plochách. Podle tvaru smykové plochy můžeme sesuvy rozlišit na dva základní typy: rotační a translační sesuvy.

*Rotační sesuv* (*rotational slide* nebo *slump*, obr. [4](#fig:rotacni){reference="fig:rotacni" reference-type="ref"}) má smykovou plochu zakřivenou, válcovou. Na tvar smykové plochy nemají vliv geologické struktury (pukliny, vrstevní plochy). Z důvodu zakřivení smykové plochy dochází k naklonění povrchu sesunutých bloků proti svahu. Rotační sesuvy jsou typické pro homogenní materiály, kohezivní zeminy a měkké horniny, které mají v nadloží často vrstvu pevných hornin. Jelikož je pohyb podél zakřivené smykové plochy samostabilizační, jsou rotační sesuvy zpravidla pomalejší.

<figure id="fig:rotacni">
<img src="/assets/obrazky/svahy/rotacni.jpg"/>
<figcaption>Rotační sesuv poblíž Cusca, Peru roku 2018 (autor:
Ministerio de Defensa del Perú - <a
href="https://www.flickr.com/photos/ministeriodedefensaperu/39935939755/in/dateposted/"
class="uri">https://www.flickr.com/photos/ministeriodedefensaperu/39935939755/in/dateposted/</a>,
CC BY 2.0</figcaption>
</figure>

*Translační* nebo také *planární sesuvy* mají smykovou plochu rovnou. Ta je většinou predisponovaná nějakou nespojitostí v hornině. Může se jednat například o vrstevní plochy, pukliny, plochy foliace apod. Translační sesuvy ale mohou vznikat i na rozhraní sediment – skalní podloží. Pokud se horninová masa pohybuje jako jeden celek po jedné smykové ploše, označujeme to jako *blokový sesuv*. Specifickým typem translačních sesuvů jsou tzv. *wedge slides* – klínové sesuvy. Smyková plocha je tvořená zpravidla dvěma strukturami (např. puklinami), které oddělují nestabilní blok od zbytku skalního masivu. Na rozdíl od rotačních sesuvů nejsou translační sesuvy samostabilizační, tudíž se jedná zpravidla o velice rychlé události. Mělké planární sesuvy (vzniklé ve zvětralinách) vznikají často po intenzívních deštích.

Některé sesuvy mohou mít složenou smykovou plochu. Běžný typ *sesuvu podél složené smykové plochy* má v horní části zakřivenou smykovou plochu přecházející pak v planární níže po svahu.

<figure>
    <center>
        <img src="/assets/obrazky/svahy/melke.jpg" alt="Mělké translační sesuvy ve zvětralině vzniklé na svazích Chlebu a Hromové v roce 2014 v důsledku intenzivních srážek. Při události došlo k jejich následné transformaci do blokovobahenního proudu, který způsobil velké škody ve Vrátné dolině (Malá Fatra, Slovensko)." style="width:100%" />
        <figcaption>Mělké translační sesuvy ve zvětralině vzniklé na svazích Chlebu a Hromové v roce 2014 v důsledku intenzivních srážek. Při události došlo k jejich následné transformaci do blokovobahenního proudu, který způsobil velké škody ve Vrátné dolině (Malá Fatra, Slovensko).</figcaption>
    </center>
</figure>

### Boční rozšiřování

*Boční rozšiřování* (*lateral spreading*) je rozevírání trhlin pouze horizontálním pohybem v důsledku extenze rigidních (pevných) hornin v nadloží měkkých a plastických hornin. Může se jednat například od pískovce v nadloží jílovců. K bočnímu rozvolňování dochází zpravidla v důsledku pomalé deformace plastického podloží.

Jedná se o pomalé pohyby (mm ^−1^), které ale mohou být extrémně rychlé ve ztekucených zeminách.

### Tečení

Tečení je svahový pohyb, kdy materiál je ve viskózním stavu. Rychlost tečení je různorodá. Pohybuje se od cm ^−1^ až [\\(\>\\SI{100}{\\kilo\\metre\\per\\hour}\\)]{.math .inline}. Výsledný tvar je *proud*. Blokovobahenní proud, mura (debris flow). Hlavní příčinou tečení je nasycení materiálu vodou. Tečením mohou být transportovány i bloky hornin i metrových velikostí.

Častým typem tečení jsou tzv. *blokovobahenní proudy* (*debris flow*), také nazývané *mury*. Vyskytují se typicky v horském terénu. Jedná se o rychlý pohyb ztekuceného materiálu (bahna a velkých balvanů) ve stržích či údolích prvních řádů, kde se tyto proudy pravidelně opakují. K blokovobahenním proudům dochází zejména po prudkých deštích. Často se vyskytují během povodňových událostí. Prvopočátek blokovobahenního proudu může být v podobě sesuvu vodou saturovaného koluvia. Když tento sesuv narazí na dno strže/údolí dochází ke ztekucení materiálu a vzniku samotného blokovobahenního proudu. Ten má velkou erozní schopnost a díky tomu nabírá další hmotu během svého pohybu. V případě, že tekoucí materiál neobsahuje velké balvany a skládá se především ze siltu hovoříme o *bahnotoku*. Pro velké bahnotoky a blokovobahenní proudy ze sopečného materiálu se používátermín *lahary*.

<figure id="fig:debrisflow">
<img src="/assets/obrazky/svahy/debris_flow.jpg" />
<figcaption>Dráha blokovobahenních proudů, Švýcarsko.</figcaption>
</figure>

*Zemní proud* (*earthflow*) je relativně pomalý proces tečení zemin. Pro zemní proudy jsou typická období klidu (desítky i stovky let) proložená epizodami náhlé aktivity. Jejich rychlost pohybu se pohybuje od metrů za rok až po metry za hodinu. Délka zemních proudů je v řádu desítek metrů až několika kilometrů.

*Skalní laviny* jsou extrémním svahovým procesem. Jejich počátek je zpravidla v podobě velkého skalního sesuvu, který se ale záhy rozpadá a výsledkem je extrémně rychlý proud úlomků hornin. Objem sesunutých hornin bývá [\\(\> \\SI{1}{\\mega\\metre\\cubed}\\)]{.math .inline} a může dosahovat i desítek Gm^3^. Skalní laviny mají oproti klasickým sesuvům ohromnou mobilitu, tudíž mohou dosáhnout značných vzdáleností od svého počátku (i desítky km). Rychlost pohybu je v řádu stovek kilometrů
za hodinu.

### Svahové deformace

Termínem *svahové deformace* označujeme extrémně pomalé pohyby (mm až m ^−1^) horninových hmot na svahu. Často jsou tyto pomalé pohyby jen přípravnou fází pro jiné, rychlejší svahové procesy. Pomalými pohyby není překročena mez pevnosti hornin, jedná se tak o plastické pohyby, při kterých nevznikají smykové plochy. Podle hloubky do které zasahují pohyby svahové deformace dělíme na:

-   Povrchové ploužení
-   Deformace skalních (horských) svahů označované i jako hlubinné ploužení

#### Povrchové ploužení

Povrchové ploužení je pomalý plastický pohyb zvětralinového pláště (deluvia) a půd na svazích. Projevuje se už na velmi mírných svazích. Hloubkový dosah je v řádu m. K ploužení dochází z důsledku cyklických objemových změn ve zvětralinách v důsledku klimatický vlivů. K expanzi dochází např. při zvlhčení nebo mrznutí, kontrakci pak při vysychání a tání. Dále se uplatňuje růst ledových krystalků *jehlovitého ledu*. Mezi důsledky povrchového ploužení, ale i dobrým identifikačním znakem jsou ohnuté kmeny stromů (tzv. opilý les). Ploužení mů§že způsobovat také *hákování vrstev*, což je ohnutí vrstev směrem po svahu.

*Soliflukce* označuje pomalé stékání činné vrstvy permafrostu po zmrzlém podloží, což vede ke vzniku soliflukčních laloků.

#### Hlubinné ploužení

Pro hlubinné ploužení se často používá termín *sackung*. Tento proces postihuje velké objemy hornin do značné hloubky (desítky až stovky metrů). Rychlost hlubinného ploužení je velice nízká, což znamená, že se veškeré viditelné formy na svahu vyvíjejí velice pomalu. Sackung se typicky projevuje *zdvojenými hřbety*, různými *stupni na svazích* (Obr [6](#fig:sackung){reference="fig:sackung" reference-type="ref"}). Spodní část svahu je často vyboulená. Tento proces vyboulení se označuje jako *bulging*.

<figure id="fig:sackung">
<img src="/assets/obrazky/svahy/sackung.png"/>
<figcaption>Projevy hlubinného ploužení (sackungu) <span
class="citation"
data-cites="agliardiStructuralConstraintsDeepseated2001"></span></figcaption>
</figure>

## Československá klasifikace svahových pohybů

Na území ČR je používaná klasifikace svahových pohybů podle Nemčoka, Paška, Rybáře []{.citation cites=„nemcokDeleniSvahovychPohybu1974“}.Svahové pohyby dělí na základě mechanismu pohybu a rychlosti pohybu. Tato klasifikace je jednodušší na počet základních typů svahových pohybů, ale v podstatě pokrývá vše co je uvedené v mezinárodní Varnesově klasifikaci. Svahové pohyby dělí do čtyř základních skupin:
-   ploužení
-   sesouvání
-   stékání
-   řícení

Co je důležité, tak autoři rozlišují *svahový pohyb*, tedy proces a *svahovou deformaci*, což je výsledný tvar.

### Ploužení

Do ploužení spadají dlouhodobé pomalé (mm ^−1^ až cm ^−1^). Hranice mezi pohybující se horninovou hmotou a pevným podložím je nezřetelná. V důsledku ploužení může docházet k tzv. hákování vrstev (Obr. [7](#fig:hakovani){reference="fig:hakovani" reference-type="ref"}). Jedná se ohnutí vrstev po svahu dolů.

<figure id="fig:hakovani">
<img src="/assets/obrazky/svahy/hakovani.jpg"/>
<figcaption>Ukázka hákování vrstev devonských vápenců v
Praze-Hlubočepích (Zdroj: BOKR, P. (2002): Foto - Hákování vrstev v
Praze - Hlubočepích. In: Fotoarchiv České geologické služby [online
databáze]. Praha, Česká geologická služba [cit. 2022-02-15]. Dostupné z
URL <a href="http://www.geology.cz/foto/19777"
class="uri">http://www.geology.cz/foto/19777</a></figcaption>
</figure>

### Sesouvání

Sesouvání je krátkodobě klouzavý pohyb horninových hmot na svahu podél jedné nebo více průběžných smykových ploch. Jedná se o relativně rychlý pohyb (cm ^−1^ až m ^−1^). Výslednou formou sesuvného pohybu je sesuv. Sesuvy dále dělíme podle tvaru smykové plochy (viz výše).

### Tečení

Stékání je rychlý (km h^−1^) krátkodobý pohyb horninových hmot ve viskózním stavu. Podstatná část hmot vyteče z odlučného prostoru (jámy) a přemístí se po povrchu terénu na velkou vzdálenost (v ČR i stovky metrů). Stékající hmoty jsou ostře odděleny od neporušeného podloží.Výslednou formou je proud. V konečné fázi vývoje může stékání přecházet do pomalého ploužení. V ČR se vyskytuje nepravidelně a je vázán na extremní srážky spolu s vhodnými geologickými a geomorfologickými podmínkami.

### Řícení

Krátkodobý (řádově sekundy) rychlý pohyb horninových hmot na strmých svazích, přičemž se postižené hmoty rozvolní a ztrácejí krátkodobě
kontakt s podložím. Při pohybu se uplatňuje volný pád. Dříve než hmoty ztratí kontakt s podložím, může docházet k plouživým pohybům. Vzdálenost přemístěných hmot je vzhledem k prostorovým rozměrům zříceného masivu mnohonásobně větší. Tento jev je nejčastěji vyskytuje v oblasti skalních pískovcových měst, u nás např. v oblasti Hřenska, Českého Ráje nebo Broumovska.

<table>
<thead>
<tr>
<th>Proces (svahový pohyb)</th>
<th>Forma (výsledná svahová deformace)</th>
</tr>
</thead>
<tbody>
<tr>
<td>Ploužení</td>
<td>Rozvolňování svahů<br>Gravitační vrásnění<br>Blokové pohyby<br>Povrchové ploužení</td>
</tr>
<tr>
<td>Sesouvání</td>
<td>Sesouvání podél rotační smykové plochy<br>Sesouvání podél rovinné smykové plochy<br>Sesouvání podél složené smykové plochy</td>
</tr>
<tr>
<td>Stékání</td>
<td>Stékání svahových uloženin</td>
</tr>
<tr>
<td>Řícení</td>
<td>Sesypávání<br>Opadávání úlomků<br>Odvalové řícení<br>Planární řícení</td>
</tr>
</tbody>
</table>

## Další klasifikace svahových pohybů a jejich výsledných forem

Výše uvedené klasifikace jsou založené jen na několika málo kritériích (mechanismus pohybu, rychlost, materiál). Pro zjednodušení budu v této pasáži budu používat pojem sesuv ve volnějším pojetí jako zastřešující termín dalších výsledných forem (např. zemního proudu).

Z hlediska stáří rozlišujeme sesuvy recentní (současné), historické a fosilní.

Podle aktivity rozlišujeme sesuvy na *aktivní* (živý), kdy právě dochází k pohybu. V případě, že na přechodnou dobu ustaly podmínky, které způsobovaly pohyb, jedná se o sesuv *dočasně uklidněný*. Pokud ani změna podmínek nemůže způsobit reaktivaci sesuvu, jedná se o sesuv stabilizovaný.

# Geomorfologické důsledky svahových procesů

Propojení vodních toků a svahů je důležité z důvodu chodu sedimentů.

Způsob jakým jsou sesuvy a další gravitační procesy propojené s vodními toky lze rozdělit do pěti skupin []{.citation
cites="korupGeomorphicImprintLandslides2005"}.

1. Plošné – rozsáhlé rozsáhlých svahových deformací, které překračují jednotlivá rozvodí
2. Liniové – sesuv ve svém pohybu pokračuje v údolí ve vodním toku. Dojde například k tranformaci sesuvu na blokovobahenní proud apod
3. Bodové – akumulační oblast sesuvu zasahuje do vodního toku.
4. Nepřímé – Nepřímé působení je v případě sesunutí do vodní nádrže (přírodní či umělé).
5. Žádné – nedochází k interakci mezi sesuvem a vodním tokem (akumulace nezasahuje na dno údolí)

<figure id="fig:koruptoky">
<figure>
<img src="/assets/obrazky/svahy/korup_toky.png" />
</figure>
<figcaption>Možné interakce mezi vodním tokem a sesuvem (upraveno podle
{% cite korupGeomorphicImprintLandslides2005 %})
</figcaption>
</figure>

# Eroze na svazích

## Difuzní procesy

Difuzní procesy jsou charakteristické tím, že se na transportu sedimentů nepodílí soustředěný tok vody, větru či ledu. Tyto procesy zahlazují nerovnosti na svahu a postupně snižují vertikální členitost reliéfu. 

*Bombardování vodními kapkami* se uplatňuje zejména tam, kde *vegetační kryt je velice řídký či zcela chybí* (pouště, badlandy). Vodní kapka, která dopadá na ukloněný povrch vymrští částečky, které letí proti a po svahu. Ty, které jsou odmrštěny proti svahu mají kratší trajektorii, než ty, které letí po svahu dolů. Tímto způsobem se tak materiál postupně přesouvá směrem po svahu. samozřejmě čím větší je sklon, tím delší je transport po svahu dolů.

Významnějším procesem je *plošný (ronový) splach*. Jako *ron* označujeme nesoustředěný odtok vody po povrchu. Největší účinky má plošný splach opět na svazích, které nejsou pokryté vegetací. K tomuto *povrchovému odtoku* dochází při překročení infiltrační kapacity půdy nebo jejímu nasycení vodou. Se zvětšujícím se sklonem a narůstajícím množstvím vody se laminární proudění mění na turbulentní. To způsobuje soustředění odtoku a začátek hloubkové eroze, což v důsledku vede ke vzniku stružek a následně strží.

Do difuzních procesů se řadí i povrchové ploužení, ale o něm byla řeč již výše.

## Liniová eroze

Soustředěním povrchového odtoku a vznikem turbulentního proudění dochází k intenzivní výmolné činnosti v místech soustředění. Iniciálním stádiem liniové eroze je *stružková eroze*. *Stružky* jsou mělké erozní rýhy, které jsou občasně protékané vodou. Většinou se jedná o systém paralelních pravidelně uspořádaných rýh. Vznikají v důsledku silných srážek nebo rychlého tání sněhu na vegetací nekrytých površích.

Rozvojem stružek, jejich prohlubováním a prodlužováním do podoby, kdy jsou již trvalou součástí krajiny (např. jsou tak velké, že je nelze zaorat) vznikají *strže*. Hovoříme pak o *stržové erozi*. Strže mohou být občasně, ale i trvale protékané vodním tokem.

*Badland* je erozí zcela přemodelovaná plocha. Jedná se o hustou síť strží a stružek. Půda prakticky absentuje a vegetace je velice sporá. Badlandy často vznikají antropogenní příčinou.

Intenzivní a člověkem urychlená eroze ze svahů (např. odlesněním, špatným hospodařením na polích) není problematická jen z důvodu ztráty půdy z daného místa a zmenšení obdělávatelných ploch. Materiál, který je odnesen se dostává do vodních toků, což snižuje kvalitu vody ale také materiál někde sedimentuje a to může způsobovat další problémy.

## Sufoze

*Sufoze* je proces při kterém dochází k odnosu částic pod povrchem. Voda se dostává do podloží a následně soustavou drobných tunelů (*pipes*) odtéká a odplavuje materiál. Sufoze nemusí být na povrchu patrná. Postupným zvětšováním tunelů ale následně může docházet ke kolapsům povrchů a vznikají "závrty". V některých místech mohou tunely ústit na povrch a vytvářejí tak otevřené kanály, kde se na úpatí ukládá vyplavený materiál. Sufoze tak může předcházet následnému rozvoji strží.

Kontrolní a klíčové otázky, na které bychom měli znát odpověď
-   Jaké síly působí na svah? Jak jejich rozložení ovlivňuje sklon svahu?
-   Jaké faktory ovlivňují stabilitu svahu?
-   Co může snížit nebo naopak zvýšit stabilitu svahu?
-   Jaké základní typy svahových pohybů existují?
-   Jak moho sesuvy interagovat s vodními toky?
-   Co to jsou difuzní procesy? Jaký mají efekt na svahu?

Další klíčové pojmy k zapamatováníS
- normálové a smykové napětí 
- pevnost ve smyku
- úhel vnitřního tření
- koheze
- ron sufoze

