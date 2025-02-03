//import React from "react";
import "./Options.css";
import {  useNavigate } from 'react-router-dom';



export const Options = () => {
  const navigate = useNavigate();
  const handleBiometricsClick = () => {
    //alert("Biometrics and Access Control Clicked!");
    navigate("/biometric"); // ✅ Correctly navigate after clicking
    
  };
  
  const handleCctvClick = () => {
    //alert("CCTVs Clicked!");

    navigate("/cctvs");

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Choose a service</h1>
      <div className="space-y-4">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleBiometricsClick}
          >
          Biometrics and Access Control
        </button>
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
          onClick={handleCctvClick}
        >
          CCTVs
        </button>
      </div>
    </div>
  );
};

