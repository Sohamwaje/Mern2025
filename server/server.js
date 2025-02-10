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

const corsOptions = {
    origin:"http://localhost:3000",
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
app.use("/api/del",deleteRoute);
app.use(errorMiddleware);

const PORT = 5000;  
connectDb().then(()=>{
app.listen(PORT ,"0.0.0.0",()=>{
    console.log(`Server is running at port:${PORT}`);
});
});