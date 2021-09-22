import React from "react";
import "./Home.css";

/**
 * This is a simple home page created for the application.
 * This page just has a simple title. Additionally, it contains
 * a link to the mentors page of the website.
 * 
 * @returns the completed Home page
 */
const Home = () => (
    <div className="home-main">
        <h1>Welcome to Hack Illinois!</h1>
        <a href="#mentors">Meet our Mentors</a>
    </div>
);

export default Home;
