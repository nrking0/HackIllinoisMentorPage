import React from "react";
import "./App.css";
import Mentors from "./Pages/Mentors/Mentors.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <Mentors />
      </div>
    </div>
  );
}

export default App;
