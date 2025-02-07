const express = require("express");
const router = express.Router();
const contactForm = require("../controller/contact-controller");
const authcontroller = require("../controller/auth-controller");
const {signupSchema,loginSchema} = require("../validator/auth-validator");
const validate = require("../middlewares/validate-middleware");
const repairForm = require("../controller/repair-controller");
const Repair = require("../models/repair-model");
const biometricForm = require("../controller/repair-controller")
const getrepform = require("../controller/repair-controller"); 

router.route('/repair').post(repairForm);
router.route('/biometric').post(biometricForm);
router.get("/allrep",async(req ,res)=>{
    try {
        const data = await Repair.find();
        res.json(data);
    } catch (error) {
        res.status(500).json({message:error.message})
    }
});

router.delete("/delete/:machineId", async (req, res) => {
    try {
        const id = req.params.machineId;
    
        // Delete the repair record with the given machineID
        const result = await Repair.deleteOne({ machineId: id });
    
        if (result.deletedCount === 0) {
          return res.status(404).json({ message: "Item not found" });
        }
    
        res.json({ message: "Deleted successfully" });
      } catch (error) {
        res.status(500).json({ message: "Error deleting item", error: error.message });
      }
  });
  

router.route('/register')
.post(validate(signupSchema),authcontroller.register);
router.route('/login')
.post(validate(loginSchema),authcontroller.login);



module.exports = router;