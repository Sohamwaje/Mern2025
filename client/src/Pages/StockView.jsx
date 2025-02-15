import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./RepView.css";

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

  // Function to export data to Excel
  const exportToExcel = () => {
    const formattedData = users.map(({ DeviceSN, DeviceName, SiteName, broughtBy, receiverContact, inwardDate }) => ({
      "Device ID": DeviceSN,
      "Device Name": DeviceName,
      "Site Name": SiteName,
      "Receiver Name": broughtBy,
      "Receiver Contact": receiverContact,
      "Date": inwardDate
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Inventory Devices");

    // Create a blob and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, "Inventory_Devices.xlsx");
  };

  return (
    <div className="table-container">
      <h1>Inventory Device List</h1>
      <button onClick={exportToExcel} className="export-button">
        Export to Excel
      </button>
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
