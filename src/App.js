import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import TripTable from "./Components/TripTable/TripTable";
import Buttons from "./Components/Buttons/Buttons";


function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>Trip List </h1>
      <Buttons />
     <TripTable />
      <header className="App-header"></header>
      
    </div>
  );
}

export default App;
