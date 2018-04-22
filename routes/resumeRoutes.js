var express = require("express");
var resumeController = require("../controllers/resumeController");
var router = new express.Router();


// router.get("/:id", resumeController.find);

// router.get("/user/:userId", resumeController.findByUser);

router.post("/resume", resumeController.create);

// router.post("/share", resumeController.share);

router.put("/resume/:id", resumeController.update);

router.delete("/resume/:id", resumeController.destroy);

module.exports = router;