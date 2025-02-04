const {z} = require("zod"); 

//Creating object schema
const signupSchema = z.object({
    username:z
    .string({required_error:"username is required"})
    .trim()
    .min(3,{message: "username must be at least of 3 chars."})
    .max(255,{message:"username must not be more than 255 characters"}),

    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "Email must be at least of 3 chars."})
    .max(255,{message:"Email must not be more than 255 characters"}),

    phone:z
    .string({required_error:"Phone is required"})
    .trim()
    .min(10,{message: "Phone must be at least of 10 chars."})
    .max(20,{message:"Phone must not be more than 20 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .min(7,{message: "Password must be at least of 6 chars."})
    .max(1024,"Password can't be greater than 1024 characters"),

});

const loginSchema = z.object({
    email:z
    .string({required_error:"Email is required"})
    .trim()
    .email({message:"Invalid email address"})
    .min(3,{message: "Email must be at least of 3 chars."})
    .max(255,{message:"Email must not be more than 255 characters"}),

    password:z
    .string({required_error:"Password is required"})
    .min(7,{message: "Password must be at least of 6 chars."})
    .max(1024,"Password can't be greater than 1024 characters"),

});


module.exports = {signupSchema,loginSchema};