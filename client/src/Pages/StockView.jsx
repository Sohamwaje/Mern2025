import { useState, useEffect } from "react";
import axios from "axios";
import "./RepView.css"; // Import the CSS file

export const StockView = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sl/stockview") // Fetch data from backend
      .then((response) => {
        setUsers(response.data); // Store data in state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  return (
    <div className="table-container">
      <h1>Inventory Device List</h1>
      <table>
        <thead>
          <tr>
            <th>Device ID</th>
            <th>Device Name</th>
            <th>Site Name</th>
            <th>Receiver Name</th>
            <th>Receiver Contact</th>
            <th>Date</th>

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
