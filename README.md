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



```sh
curl 'https://docs.google.com/forms/d/1qwGbbUAT1yPZ-yVqXzIg8h0PGW281srrkBtCdJwFgdA/formResponse' -H 'Host: docs.google.com' -H 'User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:41.0) Gecko/20100101 Firefox/41.0' -H 'Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8' -H 'Accept-Language: en-US,en;q=0.5' --compressed -H 'Referer: https://docs.google.com/forms/d/1qwGbbUAT1yPZ-yVqXzIg8h0PGW281srrkBtCdJwFgdA/viewform?fbzx=-4417037870062614176' -H 'Cookie: S=spreadsheet_forms=QDGgsetEGofY8ACPHHufQw; NID=71=Remk3p7UeYnI01GsXgQ3acVcBgiN8iKiBVrXK9GdwVnop4j9kaBDSWlxWl1vuvTKPdrK66DdXWRFTFo-2Onj0zUyCaJ1xfMACh8hTUb0XBIVYdVJdkr1jvvmlkhZVAkgbow9Scr_X17OI-M9tw4evTQHJ4tU6P7xM695WlCtODmubmt57QgkpTAXNwdZrQ05GqRhWfw; PREF=ID=1111111111111111:FF=0:TM=1442226709:LM=1442226709:V=1:S=es4FGMNhg_KRMNf0; OGP=-5061451:' -H 'Connection: keep-alive' --data 'entry.507774908=23&entry.241430440=tesa&entry.335159234=Female&draftResponse=%5B%2C%2C%22-4417037870062614176%22%5D%0D%0A&pageHistory=0&fvv=0&fbzx=-4417037870062614176'
```



## Background Reading

+ http://stackoverflow.com/questions/5119861/record-http-form-posts-via-a-browser
+ https://hacks.mozilla.org/2013/08/firebug-1-12-new-features/#copyAsCURL
