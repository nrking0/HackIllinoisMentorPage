import React from "react";
import "./MentorTile.css";
import PropTypes from "prop-types";

/**
 * This is a component that representes how each individual
 * mentor is mapped onto a tile on the mentors page. It creates
 * a large tile with the mentor's image being the background. Then
 * the mentors name is placed on the tile. Finally, the description
 * is added, but CSS makes it so it is viewed then the user hovers
 * on each tile.
 * 
 * @param {*} props A JSON object representing data about each mentor
 * @returns the completed mentor tile component
 */
const MentorTile = (props) => {
    return (
        <div className="tile">
            <img src={props.data.profile} />
            <div className="info">
                <p>{props.data.description}</p>
                <h1>{props.data.firstName + " " + props.data.lastName}</h1>
            </div>
        </div>
    );
};

MentorTile.propTypes = {
    data: PropTypes.object
};

export default MentorTile;
