const express = require("express");
const userController = require("../controllers/userController");
const medController = require("../controllers/medController");

const router = express.Router();

router.use(userController.protect);

router.route("/").get(medController.myMed); //Done
router.route("/addMed").post(medController.setMedUserIds, medController.addMed); // Done
router.route("/updateMed/:val").patch(medController.updateMed); // Done
router.route("/deleteMed/:val").delete(medController.deleteMed); // Done
router.route("/deleteAllMed").delete(medController.deleteAllMed);
module.exports = router;
