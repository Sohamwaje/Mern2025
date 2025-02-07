const Cctv = require("../models/cctv-model");

const cctvForm = async(req ,res)=>{
    try {
        const response = req.body;
        console.log(response);
        await Cctv.create(response);
        console.log("response created");
        return res.status(200).json({message:"CCTV added successfully"})
        
    } catch (error) {
        return res.status(500).json({message:"CCTV adding failed"})
    }
};

module.exports = cctvForm;