import React, { useState } from "react";
import './Navbar.css';

const navData = [{ title: "", imgSrc: process.env.PUBLIC_URL + "/trackrright-logo.png" }];


const Navbar = () => {
  return (
    <div>
      <ul id="navbar">
        {navData.map((item, index) => (
          <li key={index}>
            {item.title === "" ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <img
                  src={item.imgSrc}
                  alt="Logo"
                  style={{ height: "40px", marginRight: "8px" }}
                />
                <span>{item.title}</span>
              </div>
            ) : (
              <button
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  border: "none",
                  background: "none",
                  cursor: "pointer",
                }}
              >
                <img
                  src={item.imgSrc}
                  alt={`${item.title} icon`}
                  style={{ width: "24px", height: "24px" }}
                />
                <span>{item.title}</span>
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
