import { useState, useEffect } from "react";

/**
 * This is a custom hook created to fetch mentors data from
 * the HackIllinois API. It gets the data from the HackIllinois
 * API link, and then sets the data into a react state variable 
 * as json.
 * 
 * @returns A JSON object containing the mentors data
 */
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
