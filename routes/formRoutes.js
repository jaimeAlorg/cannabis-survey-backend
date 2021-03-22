const express = require("express");
//const { getFormData, postFormData } = require("../controllers/formController");
const { postTest, postFormData } = require("../controllers/formController");
const router = express.Router();

//router.get("/getForm", getFormData);
router.post("/postForm", postFormData);
router.post("/testPost", postTest);

router.get("/test", function (req, res) {
    res.send("TEST");
});

module.exports = router;
