import { useState, useEffect } from "react";
import axios from "axios";
import "./RepView.css"; // Import the CSS file

export const RepView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/fet/allrep") // Fetch data from backend
      .then((response) => {
        setUsers(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to delete a row
  const handleDelete = (machineId) => {
    axios
      .delete(`http://localhost:5000/api/fet/delete/${machineId}`)
      .then(() => {
        // Filter out the deleted row from state
        setUsers(users.filter((user) => user.machineId !== machineId));
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
      });
  };

  return (
    <div className="table-container">
      <h1>Repair Device List</h1>
      <table>
        <thead>
          <tr>
            <th>Machine ID</th>
            <th>Machine Name</th>
            <th>Issue Description</th>
            <th>Receiver Name</th>
            <th>Receiver Contact</th>
            <th>Repair Date</th>
            <th>Actions</th> 

          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.machineId}>
              <td>{user.machineId}</td>
              <td>{user.machineName}</td>
              <td>{user.issueDescription}</td>
              <td>{user.receiverName}</td>
              <td>{user.receiverContact}</td>
              <td>{user.repairDate}</td>
              <td>
                <button className="delete-btn" onClick={() => handleDelete(user.machineId)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
