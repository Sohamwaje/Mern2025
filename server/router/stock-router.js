const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const stockForm = require("../controller/stock-controller");
const Stock = require("../models/stock-model");


router.route('/stock').post(stockForm);
router.get("/stockview",async(req ,res)=>{
    try {
        const data = await Stock.find();
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