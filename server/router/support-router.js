const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const Repair = require("../models/repair-model");
const supportForm = require("../controller/support-controller");
const Support = require("../models/support-model");

router.route('/support').post(supportForm);
router.get("/supportlist",async(req ,res)=>{
    try {
        console.log("Hello");
        const data = await Support.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});


router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);



module.exports = router;