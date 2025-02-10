const Outward = require("../models/out-model");

const outForm = async(req ,res)=>{
    try {
        const response = req.body;
        console.log(response);
        await Outward.create(response);
        console.log("response created");
        return res.status(200).json({message:"CCTV added successfully"})
        
    } catch (error) {
        return res.status(500).json({message:"CCTV adding failed"})
    }
};

module.exports = outForm;