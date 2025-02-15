import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./RepView.css"; 
import React from "react";

export const Inlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/il/inlist") 
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to export data to Excel
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(users);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inward Devices");

    // Create a blob and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, "Inward_Devices.xlsx");
  };

  return (
    <div className="table-container">
      <h1>Inward Device List</h1>
      <button onClick={exportToExcel} className="export-button">
        Export to Excel
      </button>
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
