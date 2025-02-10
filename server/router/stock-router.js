const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contact-controller");
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const repairForm = require("../controller/repair-controller");
const Repair = require("../models/repair-model");
const biometricForm = require("../controller/inward-controller");
const outForm = require("../controller/out-controller");
const Outward = require("../models/out-model");
const stockForm = require("../controller/stock-controller");


router.route('/stock').post(stockForm);

router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);

module.exports = router;