import React from "react";
import "./Navbar.css";
import NavButton from "../NavButton/NavButton.jsx";

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul>
                <li className="title">
                    <span>
                        <a href="/">Hack-Illinois</a>
                    </span>
                </li>
                <li>
                    <NavButton url="contact">Contact</NavButton>
                </li>
                <li>
                    <NavButton url="mentors">Mentors</NavButton>
                </li>
                <li>
                    <NavButton url="about">About</NavButton>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
