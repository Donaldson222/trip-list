import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Button,
  Paper,
} from "@mui/material";
import { FaEdit } from "react-icons/fa";
import "./TripTable.css";
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
        <Table>
          <TableHead>
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
                <TableCell>{val.status}</TableCell>
                <TableCell>{val.consignor}</TableCell>
                <TableCell>{val.consignee}</TableCell>

                <TableCell style={{ position: "relative" }}>
                  <div
                    style={{
                      display: hoveredIndex === index ? "none" : "block",
                      whiteSpace: "nowrap",
                      position: "relative",
                    }}
                  >
                  {val.carbonfootprint}
                  </div>
                </TableCell>
                <TableCell style={{ position: "relative" }}>
                  <div
                    style={{
                      position: "absolute",
                      right: 0,
                      display: hoveredIndex === index ? "flex" : "none",
                      gap: "5px",
                      justifyContent: "flex-end",
                      alignItems: "center",
                      height: "20%",
                    }}
                  >
                    <Button id="edit-button" style={{ minWidth: "auto" }}>
                      <FaEdit />
                    </Button>
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
