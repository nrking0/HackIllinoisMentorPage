/* eslint-disable no-undef */
import React from "react";
import "./App.css";
import Mentors from "./Pages/Mentors/Mentors.jsx";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Home from "./Pages/Home/Home.jsx";
import { Route, Switch, useLocation } from "react-router-dom";

/**
 * This is the application container for all of the different
 * page components. The switch for the react router is shown
 * below with both the home page and the mentors page having 
 * seperate links.
 * 
 * @returns The application with all of its subcomponents 
 */
function App() {
    let location = useLocation();

    return (
        <div className="App">
            <Navbar
                path={location.pathname.substring(
                    location.pathname.lastIndexOf("/") + 1,
                    location.pathname.length
                )}
            />
            <Switch>
                <div className="main">
                    <Route exact path="/" component={Home} />
                    <Route path="/mentors" component={Mentors} />
                </div>
            </Switch>
        </div>
    );
}

export default App;
