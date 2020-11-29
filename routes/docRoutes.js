const express = require("express");
const docController = require("../controllers/docController");

const router = express.Router();

router.post("/addDoc", docController.addDoc);
router.get("/getAllDoc", docController.getAllDoc);

module.exports = router;
