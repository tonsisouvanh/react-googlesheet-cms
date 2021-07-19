import "./App.css";
import React, { useState, useEffect } from "react";
import StudentPage from "./pages/StudentPage";
import Navbar from "./components/Navbar";
import TaskAdd from "./components/Task/TaskAdd";
import test from "./pages/test";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={test}></Route>
          <Route exact path="/students-list-page" component={StudentPage}></Route>
          <Route exact path="/task-page" component={TaskAdd}></Route>
        </Switch>
      </Router>

      {/* <Router>
        <Switch>
          <Route exact path="/test" component={test}></Route>
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
