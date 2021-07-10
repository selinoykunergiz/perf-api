require('dotenv').config();
const express = require("express");
const app = express();

app.use(express.json()); 
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models");

db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("DB Connection: SUCCESS");
  })
  .catch(err => {
    console.log("DB Connection: FAIL", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Perf-API" });
});

require("./app/routes/analytics.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
