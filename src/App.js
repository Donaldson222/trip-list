import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TripTable from "./Components/TripTable/TripTable";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Trip List </h1>
     <TripTable />
      <header className="App-header"></header>
      
    </div>
  );
}

export default App;
