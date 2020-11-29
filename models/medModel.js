const mongoose = require("mongoose");

const medSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Pls enter the name of the medicine"],
    },
    time: {
      type: String,
    },
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Medicine must belong to a user"],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const Medicine = mongoose.model("Medicine", medSchema);

module.exports = Medicine;
