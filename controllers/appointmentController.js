const Appointment = require("../models/appointmentModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addAppointment = catchAsync(async (req, res, next) => {
  if (!req.body.user) req.body.user = req.user._id;
  const app = await Appointment.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: app,
    },
  });
});

exports.myAppointments = catchAsync(async (req, res, next) => {
  const apps = await Appointment.find({ user: req.user._id });
  res.status(200).json({
    status: "success",
    data: {
      data: apps,
    },
  });
});

exports.deleteAppointments = catchAsync(async (req, res, next) => {
  await Appointment.findOneAndDelete({ _id: req.body.id });
  res.status(200).json({
    status: "success",
    message: "deleted successfully",
  });
});
