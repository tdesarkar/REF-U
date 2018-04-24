var ListItem = require("../models/Referenceletter");

module.exports = {



  create: function (req, res) {
    var newReferenceletter = new Referenceletter(req.body);
    console.log(req.body);

    Referenceletter.save().then(function (newReferenceletter) {
      User.findOneAndUpdate(
        { _id: createdList.owner },
        { $push: { user_lists: createdList._id } }).then(function (updatedUser) {
            res.send("Reference Letter saved!")
        }).catch(function (err) {
          console.log(err);
          res.send("Error adding Reference Letter")
        })
    }).catch(function (err) {
      console.log(err);
      res.send("There was an error creating the list!")
    })
  },


  update: function (req, res) {
    Referenceletter.findOneAndUpdate(
      { _id: req.params.id },
      { $set: req.body },
      { new: true }).then(function (updatedReferenceletter) {
        res.send("Reference Letter updated");
      }).catch(function (err) {
        console.log(err);
        res.send("Error updating Reference Letter")
      })
  },

  destroy: function (req, res) {
    Referenceletter.remove(
      { _id: req.params.id })
      .then(function (removedReferenceletter) {
        res.send("Reference Letter deleted")
      }).catch(function (err) {
        console.log(err);
        res.send("Error deleting Reference Letter")
      })
  }
};