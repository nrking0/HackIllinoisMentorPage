import React from "react";
import "./Mentors.css";
import useMentors from "../../utils/useMentors";

const Mentors = () => {
    
    const mentors = useMentors();
    
    return(
        <div className="mentors-main">
            <p>{JSON.stringify(mentors)}</p>
        </div>
    );
};

export default Mentors;
