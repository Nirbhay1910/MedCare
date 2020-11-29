const Doctor = require("../models/docModel");
const AppError = require("../utils/appError");
const catchAsync = require("../utils/catchAsync");

exports.addDoc = catchAsync(async (req, res, next) => {
  const doc = await Doctor.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: doc,
    },
  });
});

exports.getAllDoc = catchAsync(async (req, res, next) => {
  let queryStr;
  if (req.query) {
    queryStr = JSON.stringify(req.query);
    //console.log(JSON.parse(queryStr));
  }
  const docs = await Doctor.find(JSON.parse(queryStr));
  res.status(200).json({
    status: "success",
    data: {
      data: docs,
    },
  });
});
