import { useState, useEffect } from "react";
import axios from "axios";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import "./RepView.css";

export const Supportlist = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/sup/supportlist")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // Function to export data to Excel
  const exportToExcel = () => {
    const formattedData = users.map((user, index) => ({
      "Name": user.Name,
      "Contact": user.Contact,
      "Issue": user.Issue,
      "Date": user.Date,
      "Time": user.Time,
      "Status": user.Status,
      "Solution": user.Solution,
    }));

    const worksheet = XLSX.utils.json_to_sheet(formattedData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Support List");

    // Create a blob and trigger download
    const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
    saveAs(data, "Support_List.xlsx");
  };

  return (
    <div className="table-container">
      <h1>Support List</h1>
      <button onClick={exportToExcel} className="export-button">
        Export to Excel
      </button>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Contact</th>
            <th>Issue</th>
            <th>Date</th>
            <th>Time</th>
            <th>Status</th>
            <th>Solution</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={Name}>

              <td>{user.Name}</td>
              <td>{user.Contact}</td>
              <td>{user.Issue}</td>
              <td>{user.Date}</td>
              <td>{user.Time}</td>
              <td>{user.Status}</td>
              <td>{user.Solution}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
