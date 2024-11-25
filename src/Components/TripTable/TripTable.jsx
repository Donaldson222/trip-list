import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  
  Button,
  Paper,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import "./TripTable.css";
import { CgTrack } from "react-icons/cg"; 

const data = [
  {
    consigncode: "123",
    status: "Complete",
    vehicledriver: "Otieno Alouoch",
    trip: "Safari",
    consignor: "Test consignor",
    consignee: "Test Consignee",
    carbonfootprint: "4.1",
  },
  {
    consigncode: "124",
    status: "Rejected",
    vehicledriver: "Jane Doe",
    trip: "Normal",
    consignor: "Another consignor",
    consignee: "Another Consignee",
    carbonfootprint: "2.9",
  },
  {
    consigncode: "125",
    status: "Complete",
    vehicledriver: "John Smith",
    trip: "Safari",
    consignor: "Third consignor",
    consignee: "Third Consignee",
    carbonfootprint: "3.2",
  },
];
const TripTable = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div>
      <TableContainer component={Paper}>
        <Table id="trip-table">
          <TableHead className="table-header">
            <TableRow>
              <TableCell>Consign Code</TableCell>
              <TableCell>Vehicle/Driver</TableCell>
              <TableCell>Status</TableCell>

              <TableCell>Consignor</TableCell>
              <TableCell>Consignee</TableCell>

              <TableCell>Carbon Footprint</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((val, index, row) => (
              <TableRow
                key={index}
                className="table-row-hover"
                hover
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{ position: "relative" }}
              >
                <TableCell>
                  {val.consigncode}{" "}
                  <div
                    style={{
                      fontSize: "0.8em",
                      color: val.trip === "Safari" ? "yellow" : "gray",
                    }}
                  >
                    • {val.trip}
                  </div>
                </TableCell>
                <TableCell>{val.vehicledriver}</TableCell>
                <TableCell>{val.status}
                <div style={{ display: "flex", justifyContent: "center", marginTop: "5px" }}>
                
    <CgTrack style={{ cursor: "pointer", color:"green", }} />
    <span style={{ cursor: "pointer", fontSize: "1.0em", color: "green", }}>Track</span>
  </div>
                </TableCell>
                <TableCell>{val.consignor}</TableCell>
                <TableCell>{val.consignee}</TableCell>

                <TableCell style={{ position: "relative" }}>
                <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      position: "relative",
    }}
  >
    
    <span
      style={{
        display: hoveredIndex === index ? "none" : "block",
      }}
    >
      {val.carbonfootprint}
    </span>

    
    {hoveredIndex === index && (
      <Button
        id="edit-button"
        style={{
          minWidth: "auto",
          marginLeft: "10px",
          padding: "5px",
        }}
      >
        <FaEdit />
      </Button>
    )}
  </div>
                  
                </TableCell>
               
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TripTable;
