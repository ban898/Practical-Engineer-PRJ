const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user, url) {
    console.log(process.env.GMAIL_USER);
    console.log(user.email);
    this.to = user.email;
    this.firstName = user.firstName;
    // this.url = url;
    this.message =
      "<h1>אני שולח לך ככה עוד מייל מהקוד הראשון\n ובכללי אני צריך לראות איך אפשר לעשות עיצוב למייל</h1>";
    this.from = process.env.GMAIL_USER;
    // this.from = `Steve Brusilovsky <${process.env.EMAIL_FROM}>`;
  }

  newTransport() {
    return nodemailer.createTransport({
      service: "gmail",
      // host: "smtp.sendgrid.net",
      // port: "25",
      tls: {
        rejectUnauthorized: false,
      },
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });
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
    await this.send("welcome", "welcome to the test send email 2");
  }
};

// const nodemailer = require("nodemailer");
// // import testMail from "../views/testMail";

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   // host: "smtp.gmail.com",
//   // port: 587,
//   tls: {
//     rejectUnauthorized: false,
//   },
//   auth: {
//     user: "sendemailtest82@gmail.com",
//     pass: process.env.GMAIL_PASSWORD,
//   },
// });
// const sendEmail = async () => {
//   const mailOptions = {
//     // from: process.env.EMAIL_FROM,
//     from: "sendemailtest82@gmail.com",
//     // to: user.email,
//     // to: "brusilovskysteve@gmail.com",
//     // to: "davidface2@gmail.com",
//     to: "steve@mailsac.com",
//     subject: "welcome to test send email",
//     text: "this is a test",
//     // html: testMail,
//     html: "<h1>hello</h1>",
//   };
//   try {
//     const res = await transporter.sendMail(mailOptions);
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = sendEmail;

// // const sendGrid = require("@sendgrid/mail");

// // sendGrid.setApiKey(process.env.SENDGRID_PASSWORD);

// // const sendEmail = async (user) => {
// //   const mailOptions = {
// //     // from: process.env.EMAIL_FROM,
// //     from: "brusilovskysteve@gmail.com",
// //     // to: user.email,
// //     to: "brusilovskysteve@gmail.com",
// //     subject: "welcome to the test send email",
// //     text: "this is a test",
// //     // html: "<h1>hello</h1>",
// //   };
// //   try {
// //     console.log(process.env.SENDGRID_PASSWORD);
// //     const res = await sendGrid.send(mailOptions);
// //     console.log(res);
// //   } catch (err) {
// //     console.log(err);
// //   }
// // };

// // module.exports = sendEmail;
