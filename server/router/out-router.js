const express = require("express");
const router = express.Router();
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const outForm = require("../controller/out-controller");
const Outward = require("../models/out-model");
const Stock = require("../models/stock-model");


//router.route('/repair').post(repairForm);
//router.route('/biometric').post(biometricForm);
router.route('/outward').post(outForm);

router.get("/outlist",async(req ,res)=>{
    try {
        const data = await Outward.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

// router.delete("/delete/:DeviceSN", async (req, res) => {
//     try {
//         const deviceSN = req.params;
//     console.log("started");
//         // Delete the repair record with the given machineID
//         const result = await Stock.deleteOne({ deviceSN: id });
//         console.log("started");

    
//         if (result.deletedCount === 0) {
//           return res.status(404).json({ message: "Item not is found" });
//         }
    
//         res.json({ message: "Deleted successfully" });
//       } catch (error) {
//         res.status(500).json({ message: "Error deleting item", error: error.message });
//       }
//   });
router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);

module.exports = router;