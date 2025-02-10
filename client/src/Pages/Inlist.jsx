import { useState, useEffect } from "react";
import axios from "axios";
import "./RepView.css"; // Import the CSS file
import React from "react";

export const Inlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/il/inlist") // Fetch data from backend
      .then((response) => {
        setUsers(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="table-container">
      <h1>Inward Device List</h1>
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
          {users.map((user) => (
            <tr key={user.DeviceSN}>
              <td>{user.DeviceSN}</td>
              <td>{user.DeviceName}</td>
              <td>{user.SiteName}</td>
              <td>{user.broughtBy}</td>
              <td>{user.receiverContact}</td>
              <td>{user.inwardDate}</td>
            
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
