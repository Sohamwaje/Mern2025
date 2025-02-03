require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const repairRoute = require("./router/repair-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const bioRoute = require("./router/bio-router");
const cctvRoute = require("./router/cctv-router");

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
app.use("/api/bio",bioRoute);
app.use("/api/cc",cctvRoute);
app.use(errorMiddleware);

const PORT = 5000;  
connectDb().then(()=>{
app.listen(PORT ,()=>{
    console.log(`Server is running at port:${PORT}`);
});
});
