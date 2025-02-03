import React, { useState } from 'react';
import './Repair.css';

const URL = "http://localhost:5000/api/cc/cctv";
export const Biometric = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    DeviceSN: '',
    DeviceName: '',
    SiteName: '',
    receiverName:'',
    receiverContact:'',
    dispatchDate: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
            receiverName:'',
            receiverContact:'',
            dispatchDate: '',
          });
        
      }else{
        
       alert("wrong details");
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
      <h2>New Device Installation Information</h2>
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
          <label htmlFor="SiteName">Site Address:</label>
          <textarea
            id="SiteName"
            name="SiteName"
            value={formData.SiteName}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="receiverName">Receiver Name:</label>
          <input
            type="text"
            id="receiverName"
            name="receiverName"
            value={formData.receiverName}
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
          <label htmlFor="dispatchDate">Dispatch Date:</label>
          <input
            type="date"
            id="dispatchDate"
            name="dispatchDate"
            value={formData.dispatchDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Device Info</button>
      </form>
    </div>
  );
};
