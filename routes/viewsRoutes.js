const express = require("express");
const viewsController = require("../controllers/viewsController");
const userController = require("../controllers/userController");

const router = express.Router();

router.get("/", userController.isLogggedin, viewsController.getOverview);
router.get(
  "/aboutcovid",
  userController.isLogggedin,
  viewsController.aboutcovid
);
router.get("/contact", userController.isLogggedin, viewsController.contact);
router.get("/login", userController.isLogggedin, viewsController.loginform);
router.get("/medtracker", userController.protect, viewsController.medtracker);
router.get("/signup", userController.isLogggedin, viewsController.signup);
router.get("/me", userController.protect, viewsController.me);
router.get("/doctors", userController.isLogggedin, viewsController.doctors);
router.get("/appointment", userController.protect, viewsController.appointment);
module.exports = router;
