import React from "react";
import "./NavButton.css";
import { PropTypes } from "prop-types";

const NavButton = (props) => {

    const isCurrentWindow = (url) => {
        if (
            window.location.href.substring(
                window.location.href.lastIndexOf("/") + 1
            ) === url
        ) {
            return true;
        } else {
            return false;
        }
    };


    return (
        <div className="navbutton">
        <a href={"/" + props.url} className={isCurrentWindow(props.url) && "active"}>
            { props.children }
        </a>
        </div>
    );
};

NavButton.propTypes = {
    children: PropTypes.string,
    url: PropTypes.string
};

export default NavButton;
