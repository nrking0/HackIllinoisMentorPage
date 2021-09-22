import React from "react";
import "./MentorTile.css";
import PropTypes from "prop-types";

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
