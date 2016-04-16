// Mail ENVIRONMENT VARIABLES
Meteor.startup(function(){
process.env['MAILGUN_API_KEY'] = "key-8fec042e61d277c4e1fdd4334ed852ac";
process.env['MAILGUN_DOMAIN'] = "qlick.com.ng";
process.env['MAILGUN_API_URL'] = "https://api.mailgun.net/v3/qlick.com.ng";
process.env.MAIL_URL = 'smtp://postmaster%40sandboxd1c3167637bd4c9085615322b2233b96.mailgun.org:13d8668925751082f640ac674b6cb01c@smtp.mailgun.org:587';
})

// MAIL METHOD

Meteor.methods({
        'contactMessage': function(email, name, message){
                this.unblock();
                Email.send({
                        to: 'hello@bitsbox.xyz',
                        from: email,
                        subject: "New message from " + name + " " + "(" + email + ")" + " on Bitsbox.xyz",
                        text: message



                })


        }



})
