const express = require("express");
const {
  welcome
} = require("../controllers/auth")

const router = express.Router();

router.get("/", welcome);

module.exports = router;