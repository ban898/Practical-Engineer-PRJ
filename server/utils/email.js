const nodemailer = require("nodemailer");

module.exports = class Email {
  constructor(user) {
    // console.log("this.user.firstName");
    // console.log(this.user.firstName);
    this.user = user;
    this.to = user.email;
    this.firstName = user.firstName;
    // this.from = process.env.GMAIL_USER;
    this.from = `Steve Brusilovsky <${process.env.GMAIL_USER}>`;
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

  //  Send the actual email
  async send(subject) {
    // Render HTML based template

    // Define email options
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      html: `<div>
      <h1>Hello ${this.user.firstName}</h1>
      <span>how are you?</span>
      <button>Click</button>
      </div>`,
    };

    //   Create a transport and send email
    await this.newTransport().sendMail(mailOptions);
  }

  async sendWelcome() {
    await this.send("welcome to the test send email");
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
