import { useState, useEffect } from "react";

const useMentors = () => {
    const [mentors, setMentors] = useState([]);

    const getMentors = async () => {
        const response = await fetch(
            "https://api.hackillinois.org/upload/blobstore/mentors/"
        );
        const json = await response.json();

        setMentors(json.data);
    };

    useEffect(() => {
        getMentors();
    }, [getMentors]);

    return mentors;
};

export default useMentors;
