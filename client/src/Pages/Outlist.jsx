import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./RepView.css";

export const Outlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/ol/outlist")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to export data to Excel
  const exportToExcel = () => {
    const formattedData = users.map(({ DeviceSN, DeviceName, SiteName, broughtBy, receiverContact, inwardDate }) => ({
      "Device Serial Number": DeviceSN,
      "Device Name": DeviceName,
      "Receiver Address": SiteName,
      "Receiver Name": broughtBy,
      "Receiver Contact": receiverContact,
      "Dispatch Date": inwardDate
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Outward Devices");

    // Create a blob and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, "Outward_Devices.xlsx");
  };

  return (
    <div className="table-container">
      <h1>Outward Device List</h1>
      <button onClick={exportToExcel} className="export-button">
        Export to Excel
      </button>
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
