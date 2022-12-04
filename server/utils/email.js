const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    console.log(process.env.EMAIL_FROM);
    console.log(user.email);
    this.to = user.email;
    this.firstName = user.firstName;
    this.url = url;
    this.message = "<h1>hello</h1>";
    this.from = process.env.EMAIL_FROM;
    // this.from = `Steve Brusilovsky <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    // SendGrid
    return nodemailer.createTransport({
      // service: "SendGrid",
      host: "smtp.sendgrid.net",
      port: "587",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.SENDGRID_USERNAME,
        pass: process.env.SENDGRID_PASSWORD,
      },
    });

    //  send MailTrap
    // return nodemailer.createTransport({
    //   host: process.env.EMAIL_HOST,
    //   port: process.env.EMAIL_PORT,
    //   auth: {
    //     user: process.env.EMAIL_USERNAME,
    //     pass: process.env.EMAIL_PASSWORD,
    //   },
    // });
  }

  //  Send the actual email
  async send(template, subject) {
    // Render HTML based template

    // Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      text: "abcdefghi",
      html: this.message,
    };

    //   Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome", "welcome to the test send email");
  }
};
