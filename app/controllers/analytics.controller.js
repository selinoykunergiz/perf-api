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

  analytics
    .save(analytics)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error :: Create."
      });
    });
};

exports.getByMin = (req, res) => {
  const min = req.params.min ? req.params.min : 30;

  var now = new Date();
  var condition = {createdAt : {$gte: now.getTime() + now.getTimezoneOffset() -(1000 * 60 * min) } } 

  Analytics.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error :: Get by min."
      });
    });

};

exports.getByDate = (req, res) => {

  if (!req.body.start || !req.body.end) {
    res.status(400).send({ message: "Please set start and end date!" });
    return;
  }

  let start = req.body.start;
  let end = req.body.end;

  var condition = {createdAt : {$gte: new Date(start), $lte: new Date(end) } } 

  Analytics.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Error :: Get by date."
      });
    });

};