module.exports = app => {
  const analytics = require("../controllers/analytics.controller.js");

  var router = require("express").Router();

  router.post("/", analytics.create);
  router.get("/getByMin/:min", analytics.getByMin);
  router.get("/getByDate", analytics.getByDate);

  app.use("/api/analytics", router);
};
