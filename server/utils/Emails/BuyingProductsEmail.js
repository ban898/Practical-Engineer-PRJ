const nodemailer = require("nodemailer");

module.exports = class BuyingProductsEmail {
  constructor(order, user) {
    this.order = order;
    this.to = user.email;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
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
      <h1>Dear ${this.firstName} ${this.lastName}</h1>
      <h3>Thanks you for your Order! We hope you enjoyed shopping with us.</h3>
      <h5>Order number:</h5><br>
      <h5>${this.order._id}</h5><br><br>
      <h5>$Total Amount:</h5><br>
      <h5>${this.order.totalAmount}</h5><br><br>
      <h5>"Shipping address:"</h5><br>

      <h5>$Payment Date:</h5><br><br>
      </div>`,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async buyingProductsEmail() {
    await this.send("Order Confirmation");
  }
};
