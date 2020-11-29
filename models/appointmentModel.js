const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  doctor: {
    type: mongoose.Schema.ObjectId,
    ref: "Doctor",
    required: [true, "Appointment must be of a doctor"],
    unique: [true, "You already scheduled an appointment with this doctor"],
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: [true, "Appointment must belong to a user"],
  },
});
appointmentSchema.pre(/^find/, function (next) {
  this.populate("doctor");
  next();
});
const Appointment = mongoose.model("Appointment", appointmentSchema);
module.exports = Appointment;
