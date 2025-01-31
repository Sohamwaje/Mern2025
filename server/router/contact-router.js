const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contact-controller");
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route('/contact').post(contactForm);
router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);


module.exports = router;