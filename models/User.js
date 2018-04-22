var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  Position: {
    type: String
  },
  updated_at: {
    type: Date
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  user_resume: [{
    type: Schema.Types.ObjectId,
    ref: 'Resume'
  }],
  user_coverletter: [{
    type: Schema.Types.ObjectId,
    ref: 'Coverletter'
  }],
  user_referenceletter: [{
    type: Schema.Types.ObjectId,
    ref: 'Referenceletter'
  }]
});

var User = mongoose.model('User', UserSchema);

module.exports = User;