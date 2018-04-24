// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Cover Letter Schema
var CoverletterSchema = new Schema({

  // Type of Cover Letter
  type: {
    type: String,
    required: true
  }

});

// Create the Cover Letter model with Mongoose
var Coverletter = mongoose.model('Coverletter', CoverletterSchema);

// Export the Model
module.exports = Coverletter;
