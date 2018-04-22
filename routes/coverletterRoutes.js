var express = require("express");
var coverletterController = require("../controllers/coverletterController");
var router = new express.Router();


// router.get("/:id", coverletterController.find);

// router.get("/user/:userId", coverletterController.findByUser);

router.post("/coverletter", coverletterController.create);

// router.post("/share", coverletterController.share);

router.put("/coverletter/:id", coverletterController.update);

router.delete("/coverletter/:id", coverletterController.destroy);

module.exports = router;