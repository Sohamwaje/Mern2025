import  { useState, useEffect } from 'react';
import './Repair.css';

export const RepairTable = () => {
  // State to store the repairs data
  const [repairs, setRepairs] = useState([]);

  // Fetch repairs data from the backend
  useEffect(() => {
    const fetchRepairs = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/repairs');
        const data = await response.json();
        setRepairs(data); // Store the data in state
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchRepairs(); // Call the function to fetch data when component mounts
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return (
    <div className="repair-table">
      <h2>Submitted Repair Information</h2>
      {repairs.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Machine ID</th>
              <th>Machine Name</th>
              <th>Issue Description</th>
              <th>Receiver Name</th>
              <th>Receiver Contact</th>
              <th>Repair Date</th>
            </tr>
          </thead>
          <tbody>
            {repairs.map((repair) => (
              <tr key={repair._id}>
                <td>{repair.machineId}</td>
                <td>{repair.machineName}</td>
                <td>{repair.issueDescription}</td>
                <td>{repair.receiverName}</td>
                <td>{repair.receiverContact}</td>
                <td>{new Date(repair.repairDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No repair data available.</p>
      )}
    </div>
  );
};
