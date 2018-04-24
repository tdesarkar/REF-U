var ListItem = require("../models/Coverletter");

module.exports = {



  create: function (req, res) {
    var newCoverletter = new Coverletter(req.body);

    Coverletter.save().then(function (newCoverletter) {
      res.send("Cover Letter saved!")
    }).catch(function (err) {
      console.log(err);
      res.send("Error adding Cover Letter")
    });
  },

  update: function (req, res) {
    Coverletter.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function (updatedCoverletter) {
        res.send("Cover Letter updated");
      }).catch(function (err) {
        console.log(err);
        res.send("Error updating Cover Letter")
      })
  },

  destroy: function (req, res) {
    Coverletter.remove(
      { _id: req.params.id })
      .then(function (removedCoverletter) {
        res.send("Cover Letter deleted")
      }).catch(function (err) {
        console.log(err);
        res.send("Error deleting Cover Letter")
      })
  }
};