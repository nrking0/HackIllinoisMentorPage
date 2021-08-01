/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Mentors from "./Pages/Mentors/Mentors.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <Router>
                <Navbar />
                <Switch>
                    <div className="main">
                        <Route exact path="/" component={Home} />
                        <Route path="/mentors" component={Mentors} />
                    </div>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
