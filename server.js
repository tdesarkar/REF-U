const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const bluebird = require("bluebird");
const logger = require("morgan");
let mongoose = require("mongoose");

//const jwt = require("express-jwt");
//const jwks = require('jwks-rsa');
// var List = require("./models/List.js");
// var ListItem = require("./models/ListItem.js");
// var User = require("./models/User.js");
// var Comments = require("./models/Comments/js");

mongoose.Promise = bluebird;

const routes = require("./routes/routes");

const app = module.exports = express();
const PORT = process.env.PORT || 3000;

if (process.env.NODE_ENV !== "test") {
    app.use(logger("dev"));
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static('./public'));
app.use("/", routes);
app.get("/*", function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'));
});

//DB configuration
// -------------------------------------------------

/*if (process.env.MONGODB_URI) {
  var dbConnection = mongoose.connect("mongodb://heroku_8mcv9bb8:e3dmsa26osdpml40n59cknvm3v@ds151232.mlab.com:51232/heroku_8mcv9bb8", {useMongoClient: true});
} else {
  var dbConnection = mongoose.connect("mongodb://localhost/REFER-U", {useMongoClient: true});
}

dbConnection.then(function(db){
    app.listen(PORT, function () {
        console.log("Connected to mongoose. App listening on PORT: " + PORT);
    });
}).catch(function(err){
    console.log("Error connecting to mongoose")
})*/

mongoose.connect("mongodb://tdesarkar:Hanumanji10*@ds155160.mlab.com:55160/refer-u");

var db = mongoose.connection;

db.on("error", function (err) {
    console.log("Mongoose err: " + err);
});


//Simple Index Route
// app.get("/",function(req, res){
//     res.send(index.html);
// });

//Handle form submission, save submission to mongo
app.post("/submit", function(req,res){
    console.log(req.body);
});




//The server will listen only if the mongoose database is connected
db.once("open", function () {
    console.log("Mongo is connected!");
    app.listen(PORT, function () {
        console.log("App listening on port: " + PORT);
    });
});