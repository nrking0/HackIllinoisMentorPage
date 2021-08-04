import React from "react";
import "./Navbar.css";
import NavButton from "../NavButton/NavButton.jsx";
import PropTypes from "prop-types";

const Navbar = (props) => {

    return (
        <>
        <nav className="navbar">
            <ul>
                <li className="title">
                    <span>
                        <a href="#">Hack-Illinois</a>
                    </span>
                </li>
                <li>
                    <NavButton url="contact" page={props.path}>Contact</NavButton>
                </li>
                <li>
                    <NavButton url="mentors" page={props.path}>Mentors</NavButton>
                </li>
                <li>
                    <NavButton url="about" page={props.path}>About</NavButton>
                </li>
            </ul>
        </nav>
        <nav className="mobile">
            <ul>
                <li className="title">
                    <span>
                        <a href="#">Hack-Illinois</a>
                    </span>
                </li>
                <li>
                    <NavButton url="mentors" page={props.path}>Mentors</NavButton>
                </li>
            </ul>
        </nav>
        </>
    );
};

Navbar.propTypes = {
    path: PropTypes.string
};

export default Navbar;
