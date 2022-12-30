import  nodemailer from 'nodemailer'
import * as dotenv from 'dotenv'
dotenv.config()

let transporter = nodemailer.createTransport({
    host: "mail.shieldspremisespersonnel.co.uk",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: process.env.EMAILUSER,// generated ethereal user
        pass: process.env.PASSWORD, // generated ethereal password
    },
});



export const sendEmail = async ({name, email, phone, message}) => {
    let info = await transporter.sendMail({
        from: `"${name}" <${email}>`, // sender address
        to: "enquiry@shieldspremisespersonnel.co.uk", // list of receivers
        subject: `enquiry ${new Date().toISOString()}`,
        text: `${message} ${phone}`, // plain text body
    });
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}