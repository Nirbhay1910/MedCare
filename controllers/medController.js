const Medicine = require("../models/medModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.setMedUserIds = (req, res, next) => {
  if (!req.body.user) req.body.user = req.user.id;
  next();
};

exports.addMed = catchAsync(async (req, res, next) => {
  const med = await Medicine.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: med,
    },
  });
});

exports.updateMed = catchAsync(async (req, res, next) => {
  const userMed = await Medicine.find({ user: req.user.id });
  const val = req.params.val;
  if (req.body.name) userMed[val].name = req.body.name;
  if (req.body.time) userMed[val].time = req.body.time;
  await userMed[val].save();
  res.status(200).json({
    status: "success",
    data: {
      data: userMed,
    },
  });
});
exports.myMed = catchAsync(async (req, res, next) => {
  const userMed = await Medicine.find({ user: req.user.id });
  res.status(200).json({
    status: "success",
    data: {
      data: userMed,
    },
  });
});
exports.deleteMed = catchAsync(async (req, res, next) => {
  const userMed = await Medicine.find({ user: req.user.id });
  const val = req.params.val;
  const med = await Medicine.findOneAndDelete({ _id: userMed[val]._id });
  if (!med) {
    return next(new AppError("No doc wass found by that ID", 404));
  }
  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.deleteAllMed = catchAsync(async (req, res, next) => {
  await Medicine.deleteMany({ user: req.user.id });
  res.status(204).json({
    status: "success",
    data: null,
  });
});
