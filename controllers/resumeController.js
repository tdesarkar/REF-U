var Resume = require("../models/Resume");

module.exports = {



  create: function (req, res) {
    var newResume = new Resume(req.body);

    Resume.save().then(function (newResume) {
      res.send("Resume saved!")
    }).catch(function (err) {
      console.log(err);
      res.send("Error adding Resume")
    });
  },

  update: function (req, res) {
    Resume.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function (updatedResume) {
        res.send("Resume updated");
      }).catch(function (err) {
        console.log(err);
        res.send("Error updating Resume")
      })
  },

  destroy: function (req, res) {
    Resume.remove(
      { _id: req.params.id })
      .then(function (removedResume) {
        res.send("Resume deleted")
      }).catch(function (err) {
        console.log(err);
        res.send("Error deleting Resume")
      })
  }
};