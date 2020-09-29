import React from "react";
import WeeklyScores from "../components/WeeklyScores";

const Home = (props) => {
    const { allUsers } = props;
    return (
        <>
            <header>
                <WeeklyScores allUsers={allUsers} />
            </header>
        </>
    );
};

export default Home;