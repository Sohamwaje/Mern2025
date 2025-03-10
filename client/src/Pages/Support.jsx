import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Repair.css';

const URL = "http://localhost:5000/api/sup/support";

export const Support = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
            Name: '',
            Contact: '',
            Issue: '',
            Date: '',
            Time: '',
            Status: '',
            Solution: '',
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
    navigate("/Supportlist");
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

        setFormData({
            Name: '',
            Contact: '',
            Issue: '',
            Date: '',
            Time: '',
            Status: '',
            Solution: '',
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
      <h2>Support details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="Name">Name: </label>
          <input
            type="text"
            id="Name"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="Contact">Contact Number:</label>
          <input
            type="text"
            id="Contact"
            name="Contact"
            value={formData.Contact}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="Issue">Issue :</label>
          <textarea
            id="Issue"
            name="Issue"
            value={formData.Issue}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <div>
          <label htmlFor="Date">Date:</label>
          <input
            type="date"
            id="Date"
            name="Date"
            value={formData.Date}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="Time">Time :</label>
          <input
            type="time"
            id="Time"
            name="Time"
            value={formData.Time}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="Status">Status:</label>
          <input
            type="text"
            id="Status"
            name="Status"
            value={formData.Status}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="Solution">Solution:</label>
          <textarea
            type="text"
            id="Solution"
            name="Solution"
            value={formData.Solution}
            onChange={handleChange}
            required
          />
        </div>

        

        <button type="submit">Submit Device Info</button>
      </form>

      <button onClick={HandleViewOut} type="submit">View Support list</button>
    </div>
  );
};
