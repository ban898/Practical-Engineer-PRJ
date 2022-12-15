const nodemailer = require("nodemailer");

module.exports = class SignUpEmail {
  constructor(user) {
    this.user = user;
    this.to = user.email;
    this.firstName = user.firstName;
    this.from = `Steve & David <${process.env.GMAIL_USER}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
  }

  async send(subject) {
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html: `<div>
      <h1>Hello ${this.firstName}</h1>
      <h2>how are you?</h2>      
      </div>`,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async signUpMail() {
    await this.send("Welcome to Design-X!");
  }
};
