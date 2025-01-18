
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

//home logic
const home = async (req ,res)=>{
    try {
        res.status(200).send("Welcome to the application");
    } catch (error) {
        console.log(error)
    }
};

//registration logic

const register = async (req,res)=>{
    try{
        console.log(req.body);
        const {username,email,phone,password} = req.body;


        const userExist = await User.findOne({email});

        if(userExist)
        {
            return res.status(400).json({msg:"email already exists"})
        }

        //hash the password
        //const saltRound = 10;
        //const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = await User.create({
            username,
            email,
            phone,
            password,
            //: hash_password,
        });

            res.status(201).json({msg:"User created successfully",
                //   token: await userCreated.generateToken(),
                //   userId: userCreated._id > toString(),
                });
        }
        catch(error)
        {
           res.status(500).json({message:"internal server error"});
        }
    };



    //User login logic

    const login = async(req , res)=>{
        try {
            const{email,password} = req.body;

            const userExist = await User.findOne({email});

            if(!userExist)
            {
                return res.status(400).json({message:"Invalid Credentials"});
            }
            //const user = await bcrypt.compare(password, userExist.password);
            //const user = await userExist.comparePassword(password);


            if(userExist)
                {
                    res.status(201).json({msg:"Login Successfully",
                        //   token: await userExist.generateToken(),
                        //   userId: userExist._id > toString(),
                        });                
                }else{
                    res.status(401).json({message:"Invalid email or password"});
                }
        } catch (error) {
           // res.status(500).json({message:"internal server error"});
           next(error);
        }
    };


module.exports = {home,register,login};