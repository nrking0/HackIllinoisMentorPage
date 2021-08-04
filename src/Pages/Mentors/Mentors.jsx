import React from "react";
import "./Mentors.css";
import useMentors from "../../utils/useMentors";
import MentorTile from "../../Components/MentorTile/MentorTile.jsx";
import ReactLoading from "react-loading";

const Mentors = () => {
    const mentors = useMentors();

    return (
        <div className="mentors-main">
            <h1>Meet our Mentors</h1>
            {mentors.length === 0 ? (
                <div className="loading">
                    <ReactLoading
                        type={"bubbles"}
                        color={"#c07326"}
                        height={"40%"}
                        width={"40%"}
                        className="loading-animation"
                    />
                    <h1>Loading Data...</h1>
                </div>
            ) : (
                <div className="tiles">
                    {mentors.map((mentor) => (
                        <div key={mentor.firstname} className="mentor-tile">
                            <MentorTile data={mentor} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Mentors;
