# Web Form to Google Sheet (*No Backend*)

A simple example of sending data from an ordinary web form
straight to a Google Spreadsheet *without a server*.

## Why? (*context*)

A *friend* called and asked for a *favor*:

> "*Can you set up a* ***web form***
*that* ***posts data*** *to a*
***Google Spreadsheet***  
***without*** *a (server)* ***backend***...?
*(We need it done by tomorrow)*"

*Never* one to turn down a chance to help a *friend*
and *learn* something new, I agreed to the task!

## Whaaaat? (*you can build things without backend?!*)

The *plan* is to *simulate* the `POST` request an *actual* Google Form sends when it submits a survey response to its google ("results") spreadsheet. Sounds simple. it is. kinda ...

## How?

### 1. Create a *New* Google Form

Open your ***Google Drive*** and create a new form:

![01-google-drive-create-form](https://cloud.githubusercontent.com/assets/194400/10529330/d9c59f4a-7394-11e5-9e22-ad92c45553c3.png)

### 2. Click "Get Started"

Skip the Wizard and dive straight into building your form:

![02-gform-wizard-get-started](https://cloud.githubusercontent.com/assets/194400/10529351/1b604270-7395-11e5-8617-92152180e157.png)


### 3. Add a Few Questions to your Form

Add a couple of fields to your form.

![03-gform-wizard-create-field](https://cloud.githubusercontent.com/assets/194400/10529380/565eb852-7395-11e5-99a4-50a80a77fd54.png)

### 4. Click on "View Responses"

To create the Spreadsheet where your form data will be stored:

![04-sample-form](https://cloud.githubusercontent.com/assets/194400/10529416/c2fc9538-7395-11e5-99ee-d0ddc9d1e16e.png)

### 5. (Click to) *Create* the Spreadsheet

Create a new spreadsheet for the results:

![05-create-responses-spreadsheet](https://cloud.githubusercontent.com/assets/194400/10529468/2153de70-7396-11e5-996a-908c2ac7e2ac.png)

### 6. Open the Form in *Firefox* & Submit Some Data

Open the form in ***Firefox*** and open the ***Web Inspector*** to "*Network*" and populate the form:

![06-firefox-inspector-data-in-form](https://cloud.githubusercontent.com/assets/194400/10529708/38a8a23e-7398-11e5-9528-314ce856ef8f.png)

***Submit*** the form with dummy data.

### 7. View the cURL for the `POST` Request issued by the Browser

After you click `Submit` on the form, you will see the request(s)
being sent to the server, the main one you're interested in
is the `POST` request which sends the form data to Google.

![07-firefox-inspector-copy-as-curl](https://cloud.githubusercontent.com/assets/194400/10529578/1e03925a-7397-11e5-8dec-9dce7523a8b0.png)

Right-click on the `POST` row in the "*Network*" inspector then click on "***Copy as cURL***" to get the code you will need to Submit the form from your command line.

#### 7.1 Example cURL Request

```sh
curl 'https://docs.google.com/forms/d/1qwGbbUAT1yPZ-yVqXzIg8h0PGW281srrkBtCdJwFgdA/formResponse' \
-H 'Host: docs.google.com' \
-H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0' \
-H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' \
-H 'Accept-Language: en-US,en;q=0.5' --compressed \
-H 'Referer: https://docs.google.com/forms/d/1qwGbbUAT1yPZ-yVqXzIg8h0PGW281srrkBtCdJwFgdA/viewform?fbzx=-4417037870062614176' \
-H 'Cookie: S=spreadsheet_forms=QDGgsetEGofY8ACPHHufQw; NID=71=Remk3p7UeYnI01GsXgQ3acVcBgiN8iKiBVrXK9GdwVnop4j9kaBDSWlxWl1vuvTKPdrK66DdXWRFTFo-2Onj0zUyCaJ1xfMACh8hTUb0XBIVYdVJdkr1jvvmlkhZVAkgbow9Scr_X17OI-M9tw4evTQHJ4tU6P7xM695WlCtODmubmt57QgkpTAXNwdZrQ05GqRhWfw; PREF=ID=1111111111111111:FF=0:TM=1442226709:LM=1442226709:V=1:S=es4FGMNhg_KRMNf0; OGP=-5061451:' \
-H 'Connection: keep-alive' \
--data 'entry.507774908=23&entry.241430440=tesa&entry.335159234=Female&draftResponse=%5B%2C%2C%22-4417037870062614176%22%5D%0D%0A&pageHistory=0&fvv=0&fbzx=-4417037870062614176'
```

### 8. Confirm the response was recorded in the spreadsheet

Go back to the Google Spreadsheet you created in **Step 5** above.

![08-gform-response-in-sheet](https://cloud.githubusercontent.com/assets/194400/10529619/774bec5e-7397-11e5-85ad-619f9ae3b195.png)

The data is exactly as we submitted it in the Google Form in **Step 6**.

### 9. Attempt to Re-Submit the Form using cURL

Paste the cURL command you copied from FireFox into your terminal
and hit the enter key:

![09-curl-response-in-terminal](https://cloud.githubusercontent.com/assets/194400/10529836/40e63c4e-7399-11e5-8b46-468ec0035c39.png)

## The *Fun* Part ...

### 10. Craft your HTML Form with JQuery Ajax Submission

built a basic HTML form with the same fields as the Google Form:

![html form](https://cloud.githubusercontent.com/assets/194400/10537810/380648f0-73ec-11e5-96c6-26b62145dbe3.png)

tried to submit the form using ***JQuery Ajax*** *directly* to
google but this was rejected because of CORS...

![Ajax Form Submission Blocked by CORS](https://cloud.githubusercontent.com/assets/194400/10537624/0d9fa076-73eb-11e5-9532-d3b4d52fd1d5.png)

We can either attempt to get JQuery to set the correct headers for this or...

### 11. Use an *iFrame* ?

Still have the same CORS issue ... need to *re-think* this.

## 12. Google Apps *Script*

### 12.1 Open & Make a Copy of the Sample Spreadsheet

Open the Sample Google Spreasheet (*Ensure you are signed into your Google Account*)

> https://docs.google.com/spreadsheets/d/10tt64TiALYhPMqR2fh9JzkuhxW7oC0rXXPb_pmJ7HAY

![12-gscript-make-a-copy](https://cloud.githubusercontent.com/assets/194400/10540271/75e1df1a-73fe-11e5-8304-2492683e1394.png)

### 12.2 Open the Script Editor

Once you have made the copy, open the ***Script Editor***
so you can edit the App Script

![12 2-open-the-script-editor](https://cloud.githubusercontent.com/assets/194400/10540508/885f8dac-7400-11e5-9557-ae4c436df343.png)

### 12.3 Publish as a Web App

Without modifying the sample script, Publish it!

![12 3-publish-as-web-app](https://cloud.githubusercontent.com/assets/194400/10540579/1b275cb4-7401-11e5-894c-f49ad7fa2591.png)

### 12.4 Deploy the Script as a *Web App*

Deploy the script as a "Web App"

![12 4-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10540599/51e2216c-7401-11e5-8c44-7351c129eb9d.png)

### 12.5 Authorize the App for your Google Account

*Authorize* the script to access your Google Drive

![12 5-authorise-to-run](https://cloud.githubusercontent.com/assets/194400/10540651/da345ed6-7401-11e5-896c-e7549581584c.png)

### 12.6 Copy the URL of your newly deployed App

You will need the url for step {X} below...

![12 6-copy-the-url](https://cloud.githubusercontent.com/assets/194400/10540687/37ac709e-7402-11e5-92e9-123ec1a727b3.png)

I my case the url is:
```js
https://script.google.com/macros/s/AKfycby2i5t13ccSQ9e-atuknlnPDbqKplF2QUVFiWIX_wnEPD34GM0/exec
```
But your *will* be different.

### 12.7 Run the Setup Script

The Setup Script gets the Name of your associated Google Spreadsheet
so it knows where to put the data...

![12 7-run-setup-function](https://cloud.githubusercontent.com/assets/194400/10540765/e5da721a-7402-11e5-822a-0589c713cb47.png)

### 12.8 Re-Publish ...

Once you have run the Setup Script, *test* that it worked.

![12 8-test-your-code](https://cloud.githubusercontent.com/assets/194400/10540852/cc7f7170-7403-11e5-92e9-1d4a417dbf9b.png)

### 12.9 Test Success

Clicking that link will open a new page with a `JSON` result:

![12 8-success](https://cloud.githubusercontent.com/assets/194400/10540902/3baff970-7404-11e5-9c6b-36b886ea6fa2.png)

### 12.10 Confirm the Row was Inserted

Back in your spreadsheet, confirm that the row was inserted:

![12 9-confirm-row-4-was-inserted](https://cloud.githubusercontent.com/assets/194400/10540913/6600b5de-7404-11e5-870d-582be240da8e.png)

## HTML Form

> *Now the fun part...*

Copy the code from this [**index.html**](https://github.com/nelsonic/web-form-to-google-sheet/blob/6ed85d975a4d58ecd4731e71a288802952dfed38/index.html) and paste it into your own `index.html`

### 12.12 Update the Script URL

Find the line in that defines the "ajax" request:

```js
request = $.ajax({
  url: "https://script.google.com/macros/s/AKfycby2i5t13ccSQ9e-atuknlnPDbqKplF2QUVFiWIX_wnEPD34GM0/exec",
  type: "post",
  data: serializedData
});
```
And update it to be the url for *your* "App" which you copied in step 12.6 above!

Save and open the form in your web browser.

### 12.13 Submit the Form!

Enter some data and submit the form!

![12 13-submit-the-form](https://cloud.githubusercontent.com/assets/194400/10541023/8c80a4fc-7405-11e5-87d7-9b818ebdf0e6.png)

### 12.14 Confirm the Data you Submitted was Inserted in the Spreadsheet

Back in the spreadsheet, confirm that the row was inserted:

![12 14-confirm-the-form-sumits](https://cloud.githubusercontent.com/assets/194400/10541065/da754fa0-7405-11e5-86d4-f0eabc66d962.png)


## Customise!!

### 12.15 Customise the Fields as Required

![custom fields](https://cloud.githubusercontent.com/assets/194400/10541119/64003b86-7406-11e5-9392-c5ee86af89ad.png)

```html
<form id="gform">

  <p><label for="checkin">Checkin Date</label>
  <input id="checkin" name="checkin" type="date" value=""/></p>

  <p><label for="checkout">Checkout Date</label>
  <input id="checkout" name="checkout" type="date" value=""/></p>

  <p><label for="email">Email:</label>
  <input id="email" name="email" type="text" value=""/></p>

  <p><label for="guests">Number of Guests:</label>
  <input id="guests" name="guests" type="text" value=""/></p>

  <p id="result"></p>
  <input type="submit" value="Send"/>

</form>
```

### 12.6 Submit the Form with the Custom Fields

Save `index.html` and *open* it in your browser:

![12 16-totes-worked](https://cloud.githubusercontent.com/assets/194400/10541310/d108f87a-7407-11e5-9370-cdbb6efa520c.png)

Submit the form with some sample data!

### 12.7 Confirm that it inserted a new Row in the Spreadsheet

Back in your Google Sheet, confirm that the row was inserted:

![12 17-new-row-in-spreadsheet](https://cloud.githubusercontent.com/assets/194400/10541367/5d5bf82c-7408-11e5-9abd-7236dd8423cd.png)



## Background Reading

+ Record HTTP Form `POST`: http://stackoverflow.com/questions/5119861/record-http-form-posts-via-a-browser
+ Firefox copy cURL Command: https://hacks.mozilla.org/2013/08/firebug-1-12-new-features/#copyAsCURL
+ Add headers to JQuery Ajax request:
http://stackoverflow.com/questions/10093053/add-header-in-ajax-request-with-jquery
+ AJAX post to google spreadsheet: http://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet which points to:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
+ MailApp Service: https://developers.google.com/apps-script/reference/mail/mail-app
+ CORS info: http://stackoverflow.com/questions/24371734/firefox-cors-request-giving-cross-origin-request-blocked-despite-headers
+ CORS is is *meant* to block this... http://stackoverflow.com/questions/23607901/cross-origin-request-blocked-on
