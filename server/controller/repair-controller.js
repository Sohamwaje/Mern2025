
const Repair = require("../models/repair-model");

const repairForm = async(req ,res)=>{
    try {
        const response = req.body;
        console.log(response);
        await Repair.create(response);
        console.log("response created");
        return res.status(200).json({message:"Device successfully"});
    } catch (error) {
        return res.status(500).json({message:"Device adding failed"})
    }
};

const getrepform = async(req ,res)=>{
    try {
        const data = await Repair.find();
        res.json(data);
        console.log("response",data);
        
    } catch (error) {
        res.status(500).json({message:error.message});
    }
}




module.exports = repairForm,getrepform;