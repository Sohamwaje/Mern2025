import { useState, useEffect } from "react";
import axios from "axios";
import "./RepView.css"; // Import the CSS file
import React from "react";

export const Outlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ol/outlist") // Fetch data from backend
      .then((response) => {
        setUsers(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="table-container">
      <h1>Outward Device List</h1>
      <table>
        <thead>
          <tr>
            <th>Device Serial Number</th>
            <th>Device Name</th>
            <th>Receiver Address</th>
            <th>Receiver Name</th>
            <th>Receiver Contact</th>
            <th>Dispatch Date</th>

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
