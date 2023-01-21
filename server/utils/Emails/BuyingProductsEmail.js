const nodemailer = require("nodemailer");
const fs = require("fs");

module.exports = class BuyingProductsEmail {
  constructor(order, user) {
    // console.log("order", order);
    // console.log("user", user);
    this.order = order;
    this.to = user.email;
    this.name = user.name;
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

  // return `<h5>${element._id}</h5><br><br>
  //     <h5>$Total Amount:</h5><br>
  //     <h5>${element.totalAmount}</h5><br><br>
  //     <h5>"Shipping address:"</h5><br>

  //     <h5>$Payment Date:</h5><br><br>`;

  async send(subject) {
    // console.log(this.order.cart);

    // console.log(formatter.format(this.order.total.prototype.format(2, 3, ".")));
    // ${element.image}
    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      attachments: [
        {
          filename: "coats - 01.png",
          path: __dirname + "/coats - 01.png",
          cid: "unique@cid",
        },
      ],
      html: `<div>
      <h1 style="text-align:center;">Dear ${this.name}</h1>
      <h2 style="text-align:center;">Thanks you for your Order! We hope you enjoyed shopping with us.</h2> 
      <p><b>Order number:</b></p>
          <p>${this.order.id}</p><br>
          <p><b>Total Amount:</b></p>
          <p>${this.order.total}</p><br>
          <p><b>Shipping address:<b></p>
          <p>${this.order.shippingAddress.line1}</p>  
          <p>${this.order.shippingAddress.city}</p>  
          <p>${this.order.shippingAddress.country}</p>  
          <p>${this.order.shippingAddress.postal_code}</p><br>
          ${this.order.cart.map((element) => {
            return `<div>            
             
              <img src="cid:unique@cid" /> 
            </div>`;
          })}
      </div>`,
      attachments: [
        {
          filename: "",
        },
      ],
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async buyingProductsEmail() {
    await this.send("Order Confirmation");
  }
};
