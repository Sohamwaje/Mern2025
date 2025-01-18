const mongoose = require("mongoose");

const URI ="mongodb+srv://sohammwaje:Soham%40123@cluster0.nb0ek.mongodb.net/Mern2024";

//process.env.MONGODB_URI;
//mongoose.connect(URI);

const connectDb = async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful")
    } catch (error) {
        console.error("database conn failure");
        process.exit(0);
    }
};

module.exports = connectDb;
