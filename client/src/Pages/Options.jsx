//import React from "react";
import "./Options.css";
import {  useNavigate } from 'react-router-dom';
import React from "react";



export const Options = () => {
  const navigate = useNavigate();
  const handleInClick = () => {
    //alert("Biometrics and Access Control Clicked!");
    navigate("/inward"); // ✅ Correctly navigate after clicking
    
  };
  
  const handleOutClick = () => {
    //alert("CCTVs Clicked!");

    navigate("/outward");

  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Choose a service</h1>
      <div className="space-y-4">
        <button
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          onClick={handleInClick}
          >
          Inward
        </button>
        <button
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700"
          onClick={handleOutClick}
        >
         Outward
        </button>
      </div>
    </div>
  );
};

