var express = require("express");
var referenceletterController = require("../controllers/referenceletterController");
var router = new express.Router();


// router.get("/:id", referenceletterController.find);

// router.get("/user/:userId", referenceletterController.findByUser);

router.post("/referenceletter", referenceletterController.create);

router.get("/referenceletter/1", referenceletterController.test);
// router.post("/share", referenceletterController.share);

router.put("/referenceletter/:id", referenceletterController.update);

router.delete("/referenceletter/:id", referenceletterController.destroy);

module.exports = router;