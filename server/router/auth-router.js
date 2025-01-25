const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");

router.route('/').get(authcontroller.home);
router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);




module.exports = router;