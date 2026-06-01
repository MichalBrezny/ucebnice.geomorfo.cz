/**
 * Google Apps Script – Geomorfologický kvíz logger
 * 
 * INSTALACE:
 * 1. Otevři Google Sheets (vytvoř nový spreadsheet)
 * 2. Extensions → Apps Script
 * 3. Vlož tento kód a ulož
 * 4. Deploy → New deployment → Web app
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 5. Zkopíruj URL webhooku do kviz.md (proměnná SHEETS_WEBHOOK_URL)
 * 
 * Spreadsheet bude mít dva listy:
 *   "Výsledky"  – jeden řádek na dokončený kvíz
 *   "Detaily"   – jeden řádek na každou zodpovězenou otázku
 */

const SHEET_VYSLEDKY = 'Výsledky';
const SHEET_DETAILY  = 'Detaily';

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    // === List: Výsledky ===
    let sheetV = ss.getSheetByName(SHEET_VYSLEDKY);
    if (!sheetV) {
      sheetV = ss.insertSheet(SHEET_VYSLEDKY);
      sheetV.appendRow([
        'Datum a čas', 'Jméno', 'Skóre', 'Celkem otázek', 'Úspěšnost (%)',
        'Doba (s)', 'Kategorie', 'Obtížnost'
      ]);
      // Formátovat záhlaví
      const hlavicka = sheetV.getRange(1, 1, 1, 8);
      hlavicka.setFontWeight('bold');
      hlavicka.setBackground('#4a7c59');
      hlavicka.setFontColor('white');
      sheetV.setFrozenRows(1);
    }

    sheetV.appendRow([
      new Date(data.cas),
      data.jmeno || 'anonymní',
      data.skore,
      data.celkem,
      data.procent,
      data.doba_sekund,
      data.kategorie || 'vše',
      data.obtiznost || 'vše',
    ]);

    // === List: Detaily ===
    let sheetD = ss.getSheetByName(SHEET_DETAILY);
    if (!sheetD) {
      sheetD = ss.insertSheet(SHEET_DETAILY);
      sheetD.appendRow([
        'Datum a čas', 'Jméno', 'ID otázky', 'Kategorie', 'Obtížnost', 'Správně'
      ]);
      const hlavicka = sheetD.getRange(1, 1, 1, 6);
      hlavicka.setFontWeight('bold');
      hlavicka.setBackground('#4a7c59');
      hlavicka.setFontColor('white');
      sheetD.setFrozenRows(1);
    }

    if (data.detaily && Array.isArray(data.detaily)) {
      const cas = new Date(data.cas);
      const jmeno = data.jmeno || 'anonymní';
      const rows = data.detaily.map(d => [
        cas, jmeno, d.id, d.kategorie, d.obtiznost, d.spravne ? 'Ano' : 'Ne'
      ]);
      if (rows.length > 0) {
        sheetD.getRange(sheetD.getLastRow() + 1, 1, rows.length, 6).setValues(rows);
      }
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'ok' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Pomocná funkce – spusť ručně pro testování (Tools → Run)
 * Vloží jeden testovací záznam do sheetu.
 */
function testInsert() {
  const testData = {
    postData: {
      contents: JSON.stringify({
        cas: new Date().toISOString(),
        jmeno: 'testovací student',
        skore: 7,
        celkem: 10,
        procent: 70,
        doba_sekund: 245,
        kategorie: 'vše',
        obtiznost: 'vše',
        detaily: [
          { id: 'svahy_001', kategorie: 'Svahové procesy', obtiznost: 1, spravne: true },
          { id: 'svahy_002', kategorie: 'Svahové procesy', obtiznost: 2, spravne: false },
          { id: 'glacial_001', kategorie: 'Glaciální geomorfologie', obtiznost: 1, spravne: true },
        ]
      })
    }
  };
  const result = doPost(testData);
  Logger.log(result.getContent());
}

/**
 * Funkce pro generování souhrnné statistiky v samostatném listu.
 * Spusť ručně dle potřeby: Extensions → Apps Script → Run → generujSouhrn
 */
function generujSouhrn() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheetD = ss.getSheetByName(SHEET_DETAILY);
  if (!sheetD) { Logger.log('List Detaily nenalezen'); return; }

  const data = sheetD.getDataRange().getValues();
  if (data.length < 2) { Logger.log('Žádná data'); return; }

  // Agregovat podle ID otázky
  const stat = {};
  for (let i = 1; i < data.length; i++) {
    const id = data[i][2];
    const kat = data[i][3];
    const obt = data[i][4];
    const spravne = data[i][5] === 'Ano';
    if (!stat[id]) stat[id] = { id, kat, obt, spravne: 0, celkem: 0 };
    stat[id].celkem++;
    if (spravne) stat[id].spravne++;
  }

  // Zapsat do nového listu
  let sheetS = ss.getSheetByName('Souhrn otázek');
  if (!sheetS) sheetS = ss.insertSheet('Souhrn otázek');
  sheetS.clearContents();

  sheetS.appendRow(['ID otázky', 'Kategorie', 'Obtížnost', 'Celkem zodpovězeno', 'Správně', 'Úspěšnost (%)']);
  const hlavicka = sheetS.getRange(1, 1, 1, 6);
  hlavicka.setFontWeight('bold');
  hlavicka.setBackground('#4a7c59');
  hlavicka.setFontColor('white');

  Object.values(stat)
    .sort((a, b) => (a.spravne / a.celkem) - (b.spravne / b.celkem)) // nejproblematičtější nahoře
    .forEach(s => {
      sheetS.appendRow([
        s.id, s.kat, s.obt, s.celkem, s.spravne,
        Math.round(s.spravne / s.celkem * 100)
      ]);
    });

  // Podmíněné formátování – zbarvit dle úspěšnosti
  const dataRange = sheetS.getRange(2, 6, sheetS.getLastRow() - 1, 1);
  const rules = [
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberLessThan(50)
      .setBackground('#fdecea')
      .setRanges([dataRange]).build(),
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberBetween(50, 74)
      .setBackground('#fff8e1')
      .setRanges([dataRange]).build(),
    SpreadsheetApp.newConditionalFormatRule()
      .whenNumberGreaterThanOrEqualTo(75)
      .setBackground('#eaf7ee')
      .setRanges([dataRange]).build(),
  ];
  sheetS.setConditionalFormatRules(rules);

  Logger.log('Souhrn vygenerován: ' + Object.keys(stat).length + ' otázek');
}
