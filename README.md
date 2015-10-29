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

## How? >> Google Apps *Script*

### 1. Open & Make a Copy of the Sample Spreadsheet

Open the Sample Google Spreasheet (*Ensure you are signed into your Google Account*)

> https://docs.google.com/spreadsheets/d/10tt64TiALYhPMqR2fh9JzkuhxW7oC0rXXPb_pmJ7HAY

![12-gscript-make-a-copy](https://cloud.githubusercontent.com/assets/194400/10540271/75e1df1a-73fe-11e5-8304-2492683e1394.png)

### 2. Open the Script Editor

Once you have made the copy, open the ***Script Editor***
so you can edit the App Script

![12 2-open-the-script-editor](https://cloud.githubusercontent.com/assets/194400/10540508/885f8dac-7400-11e5-9557-ae4c436df343.png)

### 3. Publish as a Web App

Without modifying the sample script, Publish it!

![12 3-publish-as-web-app](https://cloud.githubusercontent.com/assets/194400/10540579/1b275cb4-7401-11e5-894c-f49ad7fa2591.png)

### 4. Deploy the Script as a *Web App*

Deploy the script as a "Web App"

![12 4-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10540599/51e2216c-7401-11e5-8c44-7351c129eb9d.png)

### 5. Authorize the App for your Google Account

*Authorize* the script to access your Google Drive

![12 5-authorise-to-run](https://cloud.githubusercontent.com/assets/194400/10540651/da345ed6-7401-11e5-896c-e7549581584c.png)

### 6. Copy the URL of your newly deployed App

You will need the url for step {X} below...

![12 6-copy-the-url](https://cloud.githubusercontent.com/assets/194400/10540687/37ac709e-7402-11e5-92e9-123ec1a727b3.png)

I my case the url is:
```js
https://script.google.com/macros/s/AKfycby2i5t13ccSQ9e-atuknlnPDbqKplF2QUVFiWIX_wnEPD34GM0/exec
```
But your *will* be different.

### 7. Run the Setup Script

The Setup Script gets the Name of your associated Google Spreadsheet
so it knows where to put the data...

![12 7-run-setup-function](https://cloud.githubusercontent.com/assets/194400/10540765/e5da721a-7402-11e5-822a-0589c713cb47.png)

### 8. Re-Publish ...

Once you have run the Setup Script, *test* that it worked.

![12 8-test-your-code](https://cloud.githubusercontent.com/assets/194400/10540852/cc7f7170-7403-11e5-92e9-1d4a417dbf9b.png)

### 9. Test Success

Clicking that link will open a new page with a `JSON` result:

![12 8-success](https://cloud.githubusercontent.com/assets/194400/10540902/3baff970-7404-11e5-9c6b-36b886ea6fa2.png)

### 10. Confirm the Row was Inserted

Back in your spreadsheet, confirm that the row was inserted:

![12 9-confirm-row-4-was-inserted](https://cloud.githubusercontent.com/assets/194400/10540913/6600b5de-7404-11e5-870d-582be240da8e.png)

## HTML Form

> *Now the fun part...*

Copy the code from this [**index.html**](https://github.com/nelsonic/web-form-to-google-sheet/blob/6ed85d975a4d58ecd4731e71a288802952dfed38/index.html) and paste it into your own `index.html`

### 12. Update the Script URL

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

### 13. Submit the Form!

Enter some data and submit the form!

![12 13-submit-the-form](https://cloud.githubusercontent.com/assets/194400/10541023/8c80a4fc-7405-11e5-87d7-9b818ebdf0e6.png)

### 14. Confirm the Data you Submitted was Inserted in the Spreadsheet

Back in the spreadsheet, confirm that the row was inserted:

![12 14-confirm-the-form-sumits](https://cloud.githubusercontent.com/assets/194400/10541065/da754fa0-7405-11e5-86d4-f0eabc66d962.png)


## Customise!!

### 15. *Customize* the Fields as Required

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

> Note: that the field names in the Google Spreadsheet (column headers)
need to *match* the field names in the HTML ***exactly***
so no spaces in names, *please*... best to use single words and all lowercase or use underscores to separate words.

### 16. Submit the Form with the Custom Fields

Save `index.html` and *open* it in your browser:

![12 16-totes-worked](https://cloud.githubusercontent.com/assets/194400/10541310/d108f87a-7407-11e5-9370-cdbb6efa520c.png)

Submit the form with some sample data!

### 17. Confirm that it inserted a new Row in the Spreadsheet

Back in your Google Sheet, confirm that the row was inserted:

![12 17-new-row-in-spreadsheet](https://cloud.githubusercontent.com/assets/194400/10541367/5d5bf82c-7408-11e5-9abd-7236dd8423cd.png)

## Customize the Presentation

Grab the HTML from the *existing* page and customize the form to your heart's content. You won't need to update the JavaScript because its *generic*, however you will need to match the field names in your HTML form to the column headings in the Spreadsheet for the data to get inserted correctly.


## Email

An *additional* requirement was to send an **email** (***IKR***!)
when ever the HTML Form is submitted.  
Thankfully, Google has a good Method for doing this:
[MaillApp](https://developers.google.com/apps-script/reference/mail/mail-app)

### 18. Invoke the `MailApp.sendEmail` Method

In your Google Spreadsheet *Script* call:

```js
MailApp.sendEmail("recipient.address@gmail.com", // to
                  "sender.name@gmail.com",       // from
                  "Your Subject Goes Here",      // email subject
                  "What ever you want to say");  // email body
```

For this new functionality to *work* in your script you
will need to "***Save a New Version***" and ***(Re-)Deploy your App***! (*simply clicking the :floppy_disk: "Save" is* ***Not Enough***!)

### 19. Save a *New Version* of your Script

It's not immediately *obvious* but you have to *click* on "*Manage Versions...*"

![19 google-script-no-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558249/527f3c98-74c1-11e5-8290-5af7fa7f5f75.png)

Then *create* your new version:

![20 google-script-save-new-version](https://cloud.githubusercontent.com/assets/194400/10558250/53d21d5e-74c1-11e5-88c5-7bc2d8ce6228.png)

### 20. Re-Publish the *Updated* Script as a Web App

![20 a-publish](https://cloud.githubusercontent.com/assets/194400/10558288/50980aa8-74c2-11e5-8576-72084a564779.png)

Select the *latest* project version to deploy:

![21 deploy-new-version](https://cloud.githubusercontent.com/assets/194400/10558251/570a5428-74c1-11e5-8ced-5dd26d3de3c4.png)

Click "OK". No need to update the script *url* in your HTML form
(*it does not change* - *there are pros & cons to this...*)

![22 1-deploy-as-web-app](https://cloud.githubusercontent.com/assets/194400/10558255/6eec31e2-74c1-11e5-9c07-cea6209526df.png)

## Done.


# Phase 2 - Phone Number Experiment

> Hypothesis: for high value items some people will prefer to
speak to a *person* on the phone instead of emails.
Therefore having a form input for Phone Number will "*convert*"" better
than email.

I've added two new files: `_lon-phone.html` and `_par-phone.html`
to *test* this Hypothesis.



# Want *More*?

If you want *more*, please
[***ask***](https://github.com/nelsonic/web-form-to-google-sheet/issues)!

<br />
<br />

## Background Reading

+ AJAX post to google spreadsheet: http://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet which points to:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
+ MailApp Service: https://developers.google.com/apps-script/reference/mail/mail-app
+ I Posted this OverFlow Question because I *could* not get `MailApp.sendEmail`
to work:
http://stackoverflow.com/questions/33180172/why-does-mailapp-sendemail-from-google-spreadsheet-script-not-work
