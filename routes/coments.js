const express = require("express");
const postComent = require("../controllers/coments");
const router = express.Router();

router.post("/contact", postComent);

module.exports = router;
