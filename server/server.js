require("dotenv").config();
const app = require("./app");
const mongoose = require("mongoose");

const db = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(db);
  console.log("DB connection successful!");
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`App running on port ${process.env.PORT}`));
