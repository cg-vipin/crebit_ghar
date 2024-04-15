const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");
const leadRoutes = require("./modules/segementModule/routes/leadRoutes");
const segmentRoutes = require("./modules/segementModule/routes/segmentRoutes");
const app = express();
const PORT = 3000;

// Database
db.authenticate()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Routes
app.use("/leads", leadRoutes);
app.use("/segments", segmentRoutes);

// Define the query to run
const query = `SELECT * FROM public."leadTables" WHERE "customerName" = 'Raj Mehra';`;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
