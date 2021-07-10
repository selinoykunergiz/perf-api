module.exports = app => {
  const analytics = require("../controllers/analytics.controller.js");

  var router = require("express").Router();

  router.post("/", analytics.create);

  app.use("/api/analytics", router);
};
