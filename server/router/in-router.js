const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contact-controller");
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const repairForm = require("../controller/repair-controller");
const Repair = require("../models/repair-model");
const inwardForm = require("../controller/inward-controller");
const Inward = require("../models/inward-model");

//router.route('/repair').post(repairForm);
router.route('/inward').post(inwardForm);
router.get("/inlist",async(req ,res)=>{
    try {
        const data = await Inward.find();
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