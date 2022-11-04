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

app.listen(process.env.PORT, () =>
  console.log(`App running on port ${process.env.PORT}`)
);
