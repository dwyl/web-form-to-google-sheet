
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

## Background Reading

+ Record HTTP Form `POST`: https://stackoverflow.com/questions/5119861/record-http-form-posts-via-a-browser
+ Firefox copy cURL Command: https://hacks.mozilla.org/2013/08/firebug-1-12-new-features/#copyAsCURL
+ Add headers to JQuery Ajax request:
https://stackoverflow.com/questions/10093053/add-header-in-ajax-request-with-jquery
+ CORS info: https://stackoverflow.com/questions/24371734/firefox-cors-request-giving-cross-origin-request-blocked-despite-headers
+ CORS is is *meant* to block this... https://stackoverflow.com/questions/23607901/cross-origin-request-blocked-on
