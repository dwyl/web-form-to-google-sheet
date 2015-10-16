var http = require('http');
var nodemailer = require('nodemailer');
var fs         = require('fs');

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'contact.nelsonic@gmail.com',
    pass: process.env.GMAIL_PASSWORD
  }
});

// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

var email = function(person, callback){
  var mailOptions = {
      from: 'Mobile SEM Lead Notification <ofs.notify@gmail.com>', // sender address
      to: person.email, // list of receivers
      subject: 'New Email Lead in Google Spreadsheet!', // Subject line
      text: "Please check the google spreadsheet for new lead", // plaintext body
      html: "<p>Hi! Please check the google spreadsheet!</p>"
  };
  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      // console.log(error, info);
      callback(error, info)
  });

}
var recipient = {
    email : 'dwyl.smith@gmail.com',
    name  : 'FirstName'
}

var person = {
    email: 'contact.nelsonic@gmail.com'
}

email(person, function(error,info){
    console.log(error, info);
})

// http.createServer(function (req, res) {
//   email(person, function(error,info){
//     console.log(error, info);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end(req.url);
//   });
// }).listen(process.env.PORT || 3000);
