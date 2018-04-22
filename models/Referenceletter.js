// Require Mongoose
var mongoose = require('mongoose');

// Create a Schema Class
var Schema = mongoose.Schema;

// Create Reference Letter Schema
var ReferenceletterSchema = new Schema({

  // Type of Reference Letter
  type: {
    type: String,
    required: true
  }

});

// Create the Reference Letter model with Mongoose
var Referenceletter = mongoose.model('Referenceletter', ReferenceletterSchema);

// Export the Model
module.exports = Referenceletter;
