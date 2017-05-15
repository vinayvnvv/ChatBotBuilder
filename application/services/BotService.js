var nodemailer = require('nodemailer');

var BotService = function() {

    this.send = function(service) {
    	console.log("\n\n**************Serivece called********************", service);
    	if(service.type == 'email') {
    		this.sendEmailService(service);
    	}
    }


    this.sendEmailService = function(service) {

    	 var smtpTransport = nodemailer.createTransport({
		    service: 'gmail',
		    host: 'smtp.gmail.com',
		    port: 587,
		    auth: {
		        user: "tech.vinaybv@gmail.com", 
		        pass: "gamapath" 
		    },
		    tls: {rejectUnauthorized: false}
		});

		var mailOptions = {
			   from: '"Chat Bot 👻" <tech.vinaybv@gmail.com>', 
			   to: service.emailService.to.join(),
			   subject: service.emailService.subject, 
			   text: service.emailService.body
			};

		smtpTransport.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		    }else{
		        console.log('Message sent: ' + info.response);
		    };
		});	

    }

}

module.exports = new BotService();