const db = require("../models");
const Analytics = db.analytics;

exports.create = (req, res) => {
  if (!req.body.url) {
    res.status(400).send({ message: "URL can not be empty!" });
    return;
  }

  const analytics = new Analytics({
    url: req.body.url,
    ttfb: req.body.ttfb,
    fcp: req.body.fcp,
    domLoad: req.body.domLoad,
    windowLoad: req.body.windowLoad
  });

  console.log("req.body", req.body);

  analytics
    .save(analytics)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Creating error"
      });
    });
};
