var express = require("express");
var path = require("path");
var router = new express.Router();

var userRoutes = require("./userRoutes");
var resumeRoutes = require("./resumeRoutes");
var coverletterRoutes = require("./coverletterRoutes");
var referenceletterRoutes = require("./referenceletterRoutes");

router.use("/user", userRoutes);
router.use("/resume", resumeRoutes);
router.use("/coverletter", coverletterRoutes);
router.use("/referenceletter", referenceletterRoutes);

module.exports = router;