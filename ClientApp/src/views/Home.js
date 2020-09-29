import React from "react";
import TrendingPlayers from "../components/TrendingPlayers";
import WeeklyScores from "../components/WeeklyScores";

const Home = (props) => {
    const { allUsers, allPlayers } = props;
    return (
        <>
            <header>
                <WeeklyScores allUsers={allUsers} />
                <TrendingPlayers allUsers={allUsers} allPlayers={allPlayers} />
            </header>
        </>
    );
};

export default Home;