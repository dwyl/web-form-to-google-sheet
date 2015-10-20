/******************************************************************************
 * If you have any questions, please get in touch: contact.nelsonic@gmail.com *
 ******************************************************************************/

var LON_ADDRESS1 = "london.reservations@reservations.company.com";
var LON_ADDRESS2 = "london@reservations.company.com";
var PAR_ADDRESS  = "paris@reservations.company.com";


function dayOfWeek () {
  new Date().getDay();
}

function getAddress (e) {
  if(e.parameter['city'] === 'LON') {
    if(dayOfWeek() % 2 === 0) { // even days are Sun, Tues, Thurs
      return LON_ADDRESS1;
    }
    else { // Monday Wednesday Friday
      return LON_ADDRESS2;
    }

  }
  else {
   return PAR_ADDRESS;
  }
}

function doPost(e) {

  try {
    Logger.log(e); // the Google Script version of console.log see: Class Logger
    var ROW_NUMBER = record_data(e); // saves the data to the spreadsheet and returns ROW_NUMBER
    var TO_ADDRESS = getAddress(e);
    var START      = e.parameter['start_date'] || "no start"; // date or blank
    var END        = e.parameter['end_date']   || "no end"; // date or blank
    var CITY       = e.parameter['city'];
    var SLEEPS     = e.parameter['sleeps'] || "TBD";
    var SUBJECT    = "*MOBILE* Enquiry for " + CITY
    + " from: " + START  + " - " + END + " "
    + " for " + SLEEPS + " people "
    +" (Enquiry # " +ROW_NUMBER  + ") GO GET IT!"
    MailApp.sendEmail(TO_ADDRESS, SUBJECT,
                      "Please check the Google Spreadsheet http://goo.gl/EkRtIX");
    return ContentService    // return json success results
          .createTextOutput(
            JSON.stringify({"result":"success",
                            "data": JSON.stringify(e.parameters) }))
          .setMimeType(ContentService.MimeType.JSON);
  } catch(error) { // if error return this
    Logger.log(error);
    return ContentService
          .createTextOutput(JSON.stringify({"result":"error", "error": e}))
          .setMimeType(ContentService.MimeType.JSON);
  }
}

// new property service GLOBAL
var SCRIPT_PROP = PropertiesService.getScriptProperties();
// see: https://developers.google.com/apps-script/reference/properties/

/**
 * select the sheet
 */
function setup() {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    SCRIPT_PROP.setProperty("key", doc.getId());
}

/**
 * record_data inserts the data received from the html form submission
 * e is the data received from the POST
 * @param {Object} e - the POST parameters
 * @returns {Number} ROW_NUMBER - the row number for the latest row in the sheet.
 */
function record_data(e) {
  Logger.log(JSON.stringify(e)); // log the POST data in case we need to debug it
  var ROW_NUMBER;
  try {
    var doc     = SpreadsheetApp.openById(SCRIPT_PROP.getProperty("key"));
    var sheet   = doc.getSheetByName('LON+PAR'); // select the responses sheet
    var headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getValues()[0];
    var nextRow = sheet.getLastRow()+1; // get next row
    ROW_NUMBER  = nextRow; // this gets returned so we can included it in the email sbject
    var row     = [ new Date() ]; // first element in the row should always be a timestamp
    // loop through the header columns
    for (var i = 1; i < headers.length; i++) { // start at 1 to avoid Timestamp column
      if(headers[i].length > 0 && e.parameter[headers[i]] !== undefined) {
        row.push(e.parameter[headers[i]]); // add data to row
      }
    }
    // more efficient to set values as [][] array than individually
    sheet.getRange(nextRow, 1, 1, row.length).setValues([row]);
  }
  catch(error) {
    Logger.log(e);
  }
  finally {
    return ROW_NUMBER;
  }

}
