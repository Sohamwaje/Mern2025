require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const repairRoute = require("./router/repair-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const inRoute = require("./router/in-router");
const outRoute = require("./router/out-router");
const getRoute = require("./router/repair-router");
const deleteRoute = require("./router/repair-router");
const inlistRoute = require("./router/in-router");
const outListRoute = require("./router/out-router");
const stockRoute = require("./router/stock-router");
const stocklistRoute = require("./router/stock-router");
const stockSchema = require("./models/stock-model");  // Adjust this path based on your file structure
const supportRoute = require("./controller/support-controller");

const corsOptions = {
    origin:"http://localhost:5173",
    methods:"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials:true,
};

app.use(cors(corsOptions)); 
app.use(express.json());
app.use("/api/auth",authRoute);
app.use("/api/form",contactRoute);
app.use("/api/menu",repairRoute);
app.use("/api/in",inRoute);
app.use("/api/out",outRoute);
app.use("/api/fet",getRoute);
app.use("/api/il/",inlistRoute);
app.use("/api/ol",outListRoute);
app.use("/api/st",stockRoute);
app.use("/api/sl",stocklistRoute);
app.use("/api/sup",supportRoute);


//app.use("/api/del",deleteRoute);

// Backend route for deleting a device from stock
// Example for deleting a device in a MongoDB database
app.delete('/api/sl/delete/:deviceSN', (req, res) => {
    const { deviceSN } = req.params;
  
    // Try to delete the device from the database
    stockSchema.findOneAndDelete({ DeviceSN: deviceSN })  // Assuming DeviceSN is the field in your DB
      .then((result) => {
        if (!result) {
          return res.status(404).json({ message: 'Device not found' }); // Device doesn't exist
        }
        res.status(200).json({ message: 'Device deleted from stock' });
      })
      .catch((error) => {
        console.error("Error deleting device:", error);
        res.status(500).json({ message: 'Failed to delete device' }); // Server error
      });
  });
  
app.use(errorMiddleware);

const PORT = 5000;  
connectDb().then(()=>{
app.listen(PORT ,"0.0.0.0",()=>{
    console.log(`Server is running at port:${PORT}`);
});
});