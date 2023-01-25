const nodemailer = require("nodemailer");

module.exports = class BuyingProductsEmail {
  constructor(order, user) {
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

  async send(subject) {
    // console.log(formatter.format(this.order.total.prototype.format(2, 3, ".")));
    // ${element.image}

    let img = [];
    this.order.cart.forEach((element) => {
      let fileDetails = {
        filename: element.image,
        path: __dirname + `/../../public/img/products/${element.image}`,
        cid: `${element._id}`,
      };
      img.push(fileDetails);
    });

    const mailOptions = {
      from: this.from,
      to: this.to,
      subject: subject,
      attachments: img,

      html: `<div style="text-align: center; direction:ltr;">
      <h1>Dear ${this.name}</h1>
      <h2>Thanks you for your Order! We hope you enjoyed shopping with us.</h2>
      <p>
        <b>Order number:</b>
      </p>
      <p>${this.order.id}</p>
      <br>
      <p>
        <b>Total Amount:</b>
      </p>
      <p>${this.order.total} $</p>
      <br>
      <p>
        <b>Shipping address: <b>
      </p>
      <p>${this.order.shippingAddress.line1}</p>
      <p>${this.order.shippingAddress.city}</p>
      <p>${this.order.shippingAddress.country}</p>
      <p>${this.order.shippingAddress.postal_code}</p>
      <br>
      <h2>Order Summary:</h2> ${this.order.cart.map((element) => {
        return ` <img style="width:20%" src="cid:${element._id}" />
      <h3>${element.name}</h3>
      <div>Description: ${element.description}</div>
      <div>Size: ${element.size}</div>
      <div>Quantity: ${element.quantity}</div>
      <div style="margin-bottom: 1em;">Subtotal: ${
        element.quantity * element.price
      } $</div>`;
      })}
    </div>`,
    };

    await this.newTransport().sendMail(mailOptions);
  }

  async buyingProductsEmail() {
    await this.send("Order Confirmation");
  }
};

// ${{
//   attachments: [
//     {
//       filename: `${element.image}`,
//       path:
//         __dirname + `/../../public/img/products/${element.image}`,
//       cid: "unique",
//     },
//   ],
// }}

// attachments: [
//   img = this.order.cart.map((element) => {
//     return) {
//     filename: this.order.cart.map((element) => {
//       return `${element.image}`;
//     }),
//     path:
//       __dirname +
//       this.order.cart.map((element) => {
//         return `/../../public/img/products/${element.image}`;
//       }),
//     cid: "unique",
//   },

// attachments: [
//   this.order.cart.map((element) => {
//     return {
//       filename: `${element.image}`,
//       path: __dirname + `/../../public/img/products/${element.image}`,
//       cid: "unique",
//     };
//   }),

// {
//   filename: "product-6372c141e5383bfb1e856314-1670412225003-1.jpeg",
//   path:
//     __dirname +
//     "/../../public/img/products/product-6372c141e5383bfb1e856314-1670412225003-1.jpeg",
//   cid: "unique2",
// },
// ],
// attachments: [
//   {
//     filename: "product-6372c141e5383bfb1e856314-1670412225003-1.jpeg",
//     path:
//       __dirname +
//       "/../../public/img/products/product-6372c141e5383bfb1e856314-1670412225003-1.jpeg",
//     cid: "unique2",
//   },
// ],
// <img src="cid:unique"/>
// <img src="cid:unique@nodemailer.com"/>

// attachments: [
//   {
//     filename: "coats-01.png",
//     path: "./coats-01.png",
//     cid: "unique@cid",
//   },
// ],
// "/../../public/img/products/product-6372c141e5383bfb1e856314-1670407748074-1.jpeg
