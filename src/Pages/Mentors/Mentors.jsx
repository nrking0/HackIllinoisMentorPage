import React from "react";
import "./Mentors.css";
import useMentors from "../../utils/useMentors";
import MentorTile from "../../Components/MentorTile/MentorTile.jsx";

const Mentors = () => {
    const mentors = useMentors();

    return (
        <div className="mentors-main">
            <h1>Meet our Mentors</h1>
            <div className="tiles">
                {mentors.map((mentor) => (
                    <div key={mentor.firstname}  className="mentor-tile">
                        <MentorTile data={mentor} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Mentors;
