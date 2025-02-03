const Biometric = require("../models/biometric-model");


const biometricForm = async(req ,res)=>{
    try {
        const response = req.body;
        console.log(response);
        await Biometric.create(response);
        console.log("response created");
        return res.status(200).json({message:"Biometric info saved"});
    }catch(error)
    {
        return res.status(500).json({message:"Biometric info not saved"});
    }
}

module.exports = biometricForm;