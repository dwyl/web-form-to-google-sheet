# Web Form to Google Sheet (*No Backend*)

A simple example of sending data from an ordinary web form
straight to a Google Spreadsheet *without a server*.

I created this code for a client, but it is **_not up-to-date_**.
I recommend checking out the walkthrough repo below instead:
https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

<hr />
<br />

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

This repo is just a quick example I made. If you want a full step-by-step tutorial, see:
https://github.com/dwyl/learn-to-send-email-via-google-script-html-no-server

## Email

An *additional* requirement was to send an **email** (***IKR***!)
when ever the HTML Form is submitted.  
Thankfully, Google has a good Method for doing this:
[MaillApp](https://developers.google.com/apps-script/reference/mail/mail-app)

# Phase 2 - Phone Number Experiment

> Hypothesis: for high value items some people will prefer to
speak to a *person* on the phone instead of emails.
Therefore having a form input for Phone Number will "*convert*"" better
than email.

I've added two new files: `_lon-phone.html` and `_par-phone.html`
to *test* this Hypothesis.



# Want *More*?

If you want *more*, please
[***ask***](https://github.com/dwyl/web-form-to-google-sheet/pulls)!

<br />
<br />

## Background Reading

+ AJAX post to google spreadsheet: https://stackoverflow.com/questions/10000020/ajax-post-to-google-spreadsheet which points to:
  + https://mashe.hawksey.info/2011/10/google-spreadsheets-as-a-database-insert-with-apps-script-form-postget-submit-method/
+ MailApp Service: https://developers.google.com/apps-script/reference/mail/mail-app
+ I Posted this OverFlow Question because I *could* not get `MailApp.sendEmail`
to work:
https://stackoverflow.com/questions/33180172/why-does-mailapp-sendemail-from-google-spreadsheet-script-not-work
