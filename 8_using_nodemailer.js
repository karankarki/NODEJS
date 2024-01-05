

// 1.IMPORT nodemailer

const nodemailer = require("nodemailer");//SMTP (Simple Mail Transfer Protocol)




// Configure email and send it.


    // create an email transpoter
    // SMTP simple mail transfer protocol


    const transpoter = nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:"karansinghkarki00@gmail.com",
            pass:"dzyquunqxytxstpx"
        }

    })


    // send email content
    const mail_options = {
        from:"karansinghkarki00@gmail.com",
        to:"karanimcoder@gmail.com",
        subject:"Coding Ninjas",
        text:'The world has enough coders; be a coding ninja!". Here are the sample screenshots of the expected email.'
    };


    // send the mail

    try{
        // const result = await transpoter.sendMail(mail_options);
       transpoter.sendMail(mail_options);
        console.log("Succesfull")
    }
    catch(err){
        console.log(err);
    }
    





sendMail();