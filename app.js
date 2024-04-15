const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");

const app = express();
const PORT = 3000;

const campaign = require("./modules/campaignModule/app");
// Database
db.sync()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Middleware
app.use(bodyParser.json());

// app.get("/", (req, res) => {
//   res.send("Hello World!");
// });

app.use("/", campaign);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
