import  { useState } from 'react';
import './Repair.css';

const URL = "http://localhost:5000/api/menu/repair";
export const Repair = () => {
  // State to store the form data
  const [formData, setFormData] = useState({
    machineId: '',
    machineName: '',
    issueDescription: '',
    receiverName: '',
    receiverContact: '',
    repairDate: '',
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
        alert("Repair information submitted!");
   //     alert("Registration successful");
        setFormData({
          machineId: '',
          machineName: '',
          issueDescription: '',
          receiverName: '',
          receiverContact: '',
          repairDate: '',});
        
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
      <h2>Machine Repair Information</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="machineId">Machine ID:</label>
          <input
            type="text"
            id="machineId"
            name="machineId"
            value={formData.machineId}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="machineName">Machine Name:</label>
          <input
            type="text"
            id="machineName"
            name="machineName"
            value={formData.machineName}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="issueDescription">Issue Description:</label>
          <textarea
            id="issueDescription"
            name="issueDescription"
            value={formData.issueDescription}
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
          <label htmlFor="repairDate">Repair Date:</label>
          <input
            type="date"
            id="repairDate"
            name="repairDate"
            value={formData.repairDate}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit">Submit Repair Info</button>
      </form>
    </div>
  );
};
