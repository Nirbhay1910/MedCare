const express = require("express");
const appointmentController = require("../controllers/appointmentController");
const userController = require("../controllers/userController");

const router = express.Router();

router.post(
  "/addAppointment",
  userController.protect,
  appointmentController.addAppointment
);

router.get(
  "/myAppointments",
  userController.protect,
  appointmentController.myAppointments
);

router.delete(
  "/deleteAppointment",
  userController.protect,
  appointmentController.deleteAppointments
);
module.exports = router;
