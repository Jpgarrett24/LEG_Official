import React from "react";
import TrendingPlayers from "../components/TrendingPlayers";
import WeeklyScores from "../components/WeeklyScores";

const Home = (props) => {
    const { allUsers, allPlayers } = props;
    return (
        <>
            <header>
                <WeeklyScores allUsers={allUsers} />
            </header>
            <main>
                <TrendingPlayers allUsers={allUsers} allPlayers={allPlayers} />
            </main>
        </>
    );
};

export default Home;