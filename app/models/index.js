const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const dbURL = "mongodb+srv://"+dbConfig.username+":"+dbConfig.password+"@"+dbConfig.url+"/"+dbConfig.name+"?retryWrites=true&w=majority";

const db = {};
db.mongoose = mongoose;
db.url = dbURL;
db.analytics = require("./analytics.model.js")(mongoose);

module.exports = db;
