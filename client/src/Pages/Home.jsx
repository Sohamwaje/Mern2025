//import { Navbar } from "../components/Navbar";
import React from "react";
import "./Home.css";
import { useNavigate } from 'react-router-dom';
import { Options } from "./Options";

export const Home = ()=>{

  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };
    return (
    <>
 {/* <Navbar/> */}
 <div className="hero-section">
      <img src="/images/Logo.png" alt="screenshot" />
      <h1>Welcome to Omega Technologies</h1>
      <p>Choose the service you need to get started:</p>
      <div className="buttons">
        <button 
        className="hero-btn"
        onClick={() => handleNavigation("/options")}>New Installation</button>
        <button 
        className="hero-btn" 
        onClick={() => handleNavigation("/repair")}>Repair</button>
        <button 
        className="hero-btn">Support</button>
      </div>
    </div>
    </>
  )
};
