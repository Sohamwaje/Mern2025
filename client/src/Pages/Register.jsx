import { use } from "react";
import { useState } from "react"
import React from "react";
import { useNavigate } from "react-router-dom";

const URL = "http://localhost:5000/api/auth/register";

export const Register = ()=>{
    const[user,setUser] = useState({
        username:"",
        email:"",
        phone:"",
        password:"",
    });

    const navigate = useNavigate();

    //handling the input values
    const handleInput = (e)=>{
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]:value,

        });
    };

    //handling the form submission
    const handleSubmit = async (e) =>
    {
        e.preventDefault();
        console.log(user);

        try {
        const response = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        });

        if(response.ok)
        {
            setUser({
                username:"",
                email:"",
                phone:"",
                password:""}); 
                navigate("/login"); 
        }
         console.log(response);
        } catch (error) {
         console.log("register",error)   ;
        }
    };

    return ( 
    <>
    <section>
        <main>
            <div className="section-registration" >
                <div className="container grid grid-two-cols">
                    <div className="registration-image">
                        <img src="/images/Omega.png" alt="register" width="350" height="350" />
                    </div>
                    
                
                 {/* registration form */}
                 <div className="registration-form">
                    <h1 className="main-heading mb-3">Registration Form</h1>
                    <br />
                    <form onSubmit = {handleSubmit} >
                        <div>
                            <label htmlFor="username">username</label>
                            <input 
                            type="text" 
                            name="username" 
                            placeholder="username" 
                            id="username" 
                            required 
                            autoComplete="off" 
                            value={user.username} 
                            onChange={handleInput}
                            />
                            </div>
                            <div>   
                            <label htmlFor="email">email</label>  
                            <input 
                            type="email" 
                            name="email" 
                            placeholder="enter your email" 
                            id="email" 
                            required 
                            autoComplete="off" 
                            value={user.email}
                            onChange={handleInput}
                            />
                            </div>
                            <div>  
                            <label htmlFor="phone">phone</label>  
                            <input 
                            type="number" 
                            name="phone" 
                            placeholder="phone" 
                            id="phone" 
                            required 
                            autoComplete="off"
                            value={user.phone}
                            onChange={handleInput}
                            />
                            </div>
                            <div>    
                            <label htmlFor="password">password</label>
                            <input 
                            type="password" 
                            name="password" 
                            placeholder="password" 
                            id="password" 
                            required 
                            autoComplete="off"
                            value={user.password}
                            onChange={handleInput}
                            />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-submit">
                            Register Now
                            </button>   
                    </form>
                 </div>
                </div>
            </div>
        </main>
    </section>
    </>
    )
}
