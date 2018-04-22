var express = require("express");
var userController = require("../controllers/controller");
var router = new express.Router();


// router.get("/:id", userController.find);

// router.get("/resumes/:userId", resumeController.findResume);

// router.get("/coverletters/:userId", controller.findCoverletter);

// router.get("/referenceletters/:userId", controller.findReferenceletter);

router.post("/", function(req,res) {
	userController.create});

router.put("/:id", function(req,res) {
	userController.update});

router.delete("/:id", function(req,res) {userController.destroy});

module.exports = router;