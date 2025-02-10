import React, { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

import './Repair.css';

const URL = "http://localhost:5000/api/ol/outward";
export const Outward = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    DeviceSN: '',
    DeviceName: '',
    SiteName: '',
    broughtBy:'',
    receiverContact:'',
    inwardDate: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const navigate = useNavigate();
  const HandleViewOut = () =>{
    navigate("/outlist");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await fetch(URL,{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(formData),
      });

      console.log("repair info",formData);
      
      if(response.ok)
      {
        alert("New installation information submitted!");
   //     alert("Registration successful");
        setFormData({
            DeviceSN: '',
            DeviceName: '',
            SiteName: '',
            broughtBy:'',
            receiverContact:'',
            inwardDate: '',
          });
        
      }else{
        alert(`Error: ${response.status}`);

       // alert("wrong details");
      }

      

    } catch (error) {
      console.log(error);
      
    }
    // Here, you would typically send the data to a backend API
    // For example: axios.post('/api/repair', formData);
    // Reset form after submission
    
  
  };

  return (
    <div className="repair-form">
      <h2>Outward Device Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="DeviceSN">Serial Number:</label>
          <input
            type="text"
            id="DeviceSN"
            name="DeviceSN"
            value={formData.DeviceSN}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="DeviceName">Device Model Name:</label>
          <input
            type="text"
            id="DeviceName"
            name="DeviceName"
            value={formData.DeviceName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="SiteName">Receiver Address:</label>
          <textarea
            id="SiteName"
            name="SiteName"
            value={formData.SiteName}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="broughtBy">Receiver Name:</label>
          <input
            type="text"
            id="broughtBy"
            name="broughtBy"
            value={formData.broughtBy}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="receiverContact">Receiver Contact:</label>
          <input
            type="text"
            id="receiverContact"
            name="receiverContact"
            value={formData.receiverContact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="inwardDate">Dispatch Date:</label>
          <input
            type="date"
            id="inwardDate"
            name="inwardDate"
            value={formData.inwardDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Device Info</button>
      </form>
      <button onClick={HandleViewOut} type="submit">View outward list</button>

    </div>
  );
};
