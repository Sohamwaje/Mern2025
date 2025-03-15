import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css';
import { useAuth } from "../store/auth";
import React, { useContext } from 'react';




const URL = "http://localhost:5000/api/auth/login";
 export const Login = ()=>{
    const [user,setUser] = useState({
        email:"",
        password:"",
    });

    const navigate = useNavigate();
    const {storeTokenInLS} = useAuth();

    const handleInput = (e)=>{
        let {name,value} = e.target;
        //let value = e.target.value;

        setUser({
            ...user,
            [name]:value,
        });
    };

    const handleSubmit = async(e) =>{
      e.preventDefault();
      try {
        const response = await fetch(URL,{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(user),
        });

        console.log("login form",response);

        if(response.ok)
        {
            alert("Login Successful");
            const res_data = await response.json();

            storeTokenInLS(res_data.token);
            
            setUser({email:"",password:""});
            navigate("/home")
        }else{
            alert("User not registered! Please Sign Up.")
            console.log('invalid credentials')
        }
        
      } catch (error) {
        
          console.log(error);
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
                    <h1 className="main-heading mb-3">Login Form</h1>
                    <br />
                    <form onSubmit = {handleSubmit} >
                        
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
                        <button type="submit" className="btn btn-submit">Login</button>   
                    </form>
                    
                    <p className="text-sm text-center mt-4 text-gray-600">
              Don't have an account? <a href="/register" className="text-blue-600 hover:underline">Sign up</a>
            </p>
                 </div>
                </div>
            </div>
        </main>
    </section>
    </>
    )
}


