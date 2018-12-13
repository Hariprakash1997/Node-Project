const express = require("express");

const router = express.Router();
const publicController = require("../controllers/publicController");

router.get("/", publicController.getIndex);

module.exports = router;
