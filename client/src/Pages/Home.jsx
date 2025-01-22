//import { Navbar } from "../components/Navbar";
import React from "react";
import "./Home.css";



export const Home = ()=>{
    return (
    <>
 {/* <Navbar/> */}
 <div className="hero-section">
      <img src="/images/Logo.png" alt="screenshot" />
      <h1>Welcome to Omega Technologies</h1>
      <p>Choose the service you need to get started:</p>
      <div className="buttons">
        <button className="hero-btn">New Installation</button>
        <button className="hero-btn">Repair</button>
        <button className="hero-btn">Support</button>
      </div>
    </div>
    </>
    )
};
