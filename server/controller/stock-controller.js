const Stock = require("../models/stock-model");

const stockForm = async(res ,req)=>{

    try {
        const response = req.body;
        console.log(response);
        await Stock.create(response);
        console.log("response created");
        return res.status(200).json({message:"Device saved in stock"});
    } catch (error) {
        return res.status(500).json({message:"Device not saved in stock"});
    }
}

module.exports = stockForm;


