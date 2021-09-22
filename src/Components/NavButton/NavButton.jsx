import React from "react";
import "./NavButton.css";
import { PropTypes } from "prop-types";

/**
 * This is a component for the smaller links to pages on the site.
 * The button has an animation when the user hovers over each button.
 * 
 * @param {*} props The title and url path of the page
 * @returns the navbutton component
 */
const NavButton = (props) => {
    // const isCurrentWindow = (url) => {
    //     if (
    //         window.location.href.substring(
    //             window.location.href.lastIndexOf("/") + 1
    //         ) === url
    //     ) {
    //         return true;
    //     } else {
    //         return false;
    //     }
    // };

    return (
        <div
            className={
                props.page === props.url ? "navbutton active" : "navbutton"
            }>
            <a href={"#" + props.url}>{props.children}</a>
        </div>
    );
};

NavButton.propTypes = {
    children: PropTypes.string,
    url: PropTypes.string,
    page: PropTypes.string
};

export default NavButton;
