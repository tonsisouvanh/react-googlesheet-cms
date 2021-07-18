import "./App.css";
import React, { useState, useEffect } from "react";
import StudentPage from "./pages/StudentPage";
import Navbar from "./components/Navbar";
import TaskAdd from "./components/Task/TaskAdd";
function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <StudentPage /> */}
      <TaskAdd />
    </div>
  );
}

export default App;
