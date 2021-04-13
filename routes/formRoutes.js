const express = require("express");
const { getFormData, postFormData } = require("../controllers/formController");

const router = express.Router();

router.post("/postForm", postFormData);
router.get("/getForm", getFormData);

module.exports = router;
