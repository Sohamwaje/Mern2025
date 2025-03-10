import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import './Repair.css';

const URL = "http://localhost:5000/api/ol/outward";
const DELETE_URL = "http://localhost:5000/api/sl/delete"; // URL to delete from stock

export const Outward = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    DeviceSN: '',
    DeviceName: '',
    SiteName: '',
    broughtBy: '',
    receiverContact: '',
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
  const HandleViewOut = () => {
    navigate("/outlist");
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("repair info", formData);

      if (response.ok) {
        alert("New installation information submitted!");

        // After submission, delete the device from the Stock list
        try {
          const deleteResponse = await axios.delete(`${DELETE_URL}/${formData.DeviceSN}`);
          
          if (deleteResponse.status === 200) {
            console.log("Device successfully deleted from stock");
          } else {
            console.error("Error deleting device from stock");
          }
        } catch (deleteError) {
          console.error("Error deleting device from stock:", deleteError);
        }

        setFormData({
          DeviceSN: '',
          DeviceName: '',
          SiteName: '',
          broughtBy: '',
          receiverContact: '',
          inwardDate: '',
        });

      } else {
        alert(`Error: ${response.status}`);
      }
    } catch (error) {
      console.log(error);
    }
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
