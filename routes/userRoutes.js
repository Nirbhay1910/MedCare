const express = require("express");
const userController = require("../controllers/userController");

const router = express.Router();

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/logout", userController.logout);

router.post("/forgotPassword", userController.forgotPassword);
router.patch("/resetPassword/:token", userController.resetPassword);

router.use(userController.protect);

router.patch("/updateMyPassword", userController.updatePassword);
router.patch(
  "/updateMe",
  userController.uploadUserPhoto,
  userController.resizeUserPhoto,
  userController.updateMe
);
router.delete("/deleteMe", userController.deleteMe);
router.get("/me", userController.getUser);

module.exports = router;
