// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Resume Schema
var ResumeSchema = new Schema({

  // Type of Resume
  type: {
    type: String,
    required: true
  }

});

// Create the Resume model with Mongoose
var Resume = mongoose.model('Resume', ResumeSchema);

// Export the Model
module.exports = Resume;
