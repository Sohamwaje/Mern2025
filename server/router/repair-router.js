const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const repairForm = require("../controller/repair-controller");
const Repair = require("../models/repair-model");

router.route('/repair').post(repairForm);
router.get("/allrep",async(req ,res)=>{
    try {
        const data = await Repair.find();
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