// Node Dependencies
var express = require('express');
var router = express.Router();


// Import the Resume model
var Resume = require('../models/Resume.js');
// Import the Cover Letter model
var Coverletter = require('../models/Coverletter.js');
// Import the Reference model
var Referenceletter = require('../models/Referenceletter.js');


// Main GET - This will display the ReactJS application.
router.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/public/index.html");
});

// API GET - your components will use this to query MongoDB for all saved resumes, cover letters, and reference letters.
router.get("/api/saved", function(req, res) {
  
  // Query Mongo for the Resumes
   Resume.find({}, function(err, docs){
      // log any errors
      if (err){
        console.log(err);
      } 
      // or send the doc to the browser as a json object
      else {
        res.json(docs);
      }
   });

 // Query Mongo for the Cover Letters
   Coverletter.find({}, function(err, docs){
      // log any errors
      if (err){
        console.log(err);
      } 
      // or send the doc to the browser as a json object
      else {
        res.json(docs);
      }
   });

 // Query Mongo for the Reference Letters 
   Referenceletter.find({}, function(err, docs){
      // log any errors
      if (err){
        console.log(err);
      } 
      // or send the doc to the browser as a json object
      else {
        res.json(docs);
      }
   });

});


// API POST - your components will use this to save an article to the database.
router.post("/api/saved", function(req, res) {
  
  // Using the Resume model, create a new entry (note that the "req.body" object has the exact same key-value pairs as the model)
  var entry = new Resume(req.body);

  // Save the entry to MongoDB
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } 
    // or log the doc that was saved to the DB
    else {
      console.log(doc);
      res.sendStatus(200);
    }
  });


  // Using the Cover Letter model, create a new entry (note that the "req.body" object has the exact same key-value pairs as the model)
  var entry = new Coverletter(req.body);

  // Save the entry to MongoDB
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } 
    // or log the doc that was saved to the DB
    else {
      console.log(doc);
      res.sendStatus(200);
    }
  });


 // Using the Reference letter model, create a new entry (note that the "req.body" object has the exact same key-value pairs as the model)
  var entry = new Referenceletter(req.body);

  // Save the entry to MongoDB
  entry.save(function(err, doc) {
    // log any errors
    if (err) {
      console.log(err);
      res.sendStatus(400);
    } 
    // or log the doc that was saved to the DB
    else {
      console.log(doc);
      res.sendStatus(200);
    }
  });



});


// API DELETE - your components will use this to delete a saved article in the database
router.post("/api/delete/:resumeMongoId", function(req, res) {
  console.log(req.params.resumeMongoId)
  Resume.findByIdAndRemove(req.params.resumeMongoId, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      // Send Success Header
      res.sendStatus(200);
    }
  });

});
router.post("/api/delete/:coverletterMongoId", function(req, res) {
  console.log(req.params.coverletterMongoId)
  Coverletter.findByIdAndRemove(req.params.coverletterMongoId, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      // Send Success Header
      res.sendStatus(200);
    }
  });

});

router.post("/api/delete/:referenceletterMongoId", function(req, res) {
  console.log(req.params.articleMongoId)
  Article.findByIdAndRemove(req.params.referenceletterMongoId, function (err, todo) {
    if (err) {
      // Send Failure Header
      console.log(err);      
      res.sendStatus(400);
    } 
    else {
      // Send Success Header
      res.sendStatus(200);
    }
  });

});



// CATCH ALL "*" - This redirect user to the "/" route for any unknown cases
router.get("*", function(req, res) {
  res.redirect("/");
});


// ================================
// Export Router to Server.js
