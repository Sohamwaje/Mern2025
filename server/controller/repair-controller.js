import Repair from "../models//repair-model";
import contactForm from "./contact-controller";

export const repairForm = async(req ,res)=>{
    try {
        const response = req.body;
        await Repair.create(response);
        return res.status(200).json({message:"Device successfully"});
    } catch (error) {
        return res.status(500).json({message:"Device adding failed"})
    }
};

module.exports= repairForm;