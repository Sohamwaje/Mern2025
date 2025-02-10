const Inward = require("../models/inward-model");



const inwardForm = async(req ,res)=>{
    try {
        const response = req.body;
        console.log(response);
        await Inward.create(response);
        console.log("response created");
        return res.status(200).json({message:"Biometric info saved"});
    }catch(error)
    {
        return res.status(500).json({message:"Biometric info not saved"});
    }
}

module.exports = inwardForm;