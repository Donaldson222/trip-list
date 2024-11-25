
import { CiExport } from "react-icons/ci";

import { CiFilter } from "react-icons/ci";
import {
  Button,
  
  Typography,
  Tooltip,
  TextField,
} from "@mui/material";
import "./Buttons.css";
import React, { useState, useRef} from "react";


const data = [
  {
    consigncode: "123",
    priority: "High",
    vehicledriver: "Otieno Alouoch",
    evnt: "Finished",
    consignor: "Test consignor",
    consignee: "Test Consignee",
    location: "Rongai",
    transporter: "Test Transporter",
  },
  {
    consigncode: "124",
    priority: "Normal",
    vehicledriver: "Jane Doe",
    evnt: "In Transit",
    consignor: "Another consignor",
    consignee: "Another Consignee",
    location: "Nairobi",
    transporter: "Another Transporter",
  },
  {
    consigncode: "125",
    priority: "High",
    vehicledriver: "John Smith",
    evnt: "Pending",
    consignor: "Third consignor",
    consignee: "Third Consignee",
    location: "Mombasa",
    transporter: "Third Transporter",
  },
];
let totalData = data.length;

function Buttons() {
  const [filterCriteria, setFilterCriteria] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = (e) => {
    const criteria = e.target.value;
    setFilterCriteria(criteria);

    const filtered = data.filter(
      (item) =>
        item.consigncode.toLowerCase().includes(criteria.toLowerCase()) ||
        item.priority.toLowerCase().includes(criteria.toLowerCase()) ||
        item.vehicledriver.toLowerCase().includes(criteria.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleExport = () => {
    const csvData = data
      .map((item) =>
        `${item.consigncode},${item.priority},${item.vehicledriver}`
      )
      .join("\n");
    const blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", "exported_data.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "4px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
      
        <Typography
          component="h2"
          style={{
            fontSize: "24px",
            fontWeight: "none",
            margin: "0",
          }}
        >
          {totalData} Trips
        </Typography>

      
        <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
          <Tooltip title="Export">
            <Button id="export" onClick={handleExport}>
              <CiExport />
            </Button>
          </Tooltip>
          {showFilter && (
            <TextField
              label="Filter Consignment Items"
              variant="outlined"
              value={filterCriteria}
              onChange={handleFilter}
              style={{ width: "200px" }}
            />
          )}
          <Tooltip title="Filter">
            <Button
              id="filter"
              onClick={() => setShowFilter(!showFilter)}
              variant="contained"
            >
              <CiFilter />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
export default Buttons;
