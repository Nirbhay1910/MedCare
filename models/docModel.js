const mongoose = require("mongoose");

const docSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  specialisation: {
    type: String,
    required: true,
  },
  photo: String,
  hospital: String,
  experience: Number,
});

const Doctor = mongoose.model("Doctor", docSchema);
module.exports = Doctor;
