import React, { useState, useEffect } from "react";
import { Link, navigate } from "@reach/router";
import WeeklyScores from "../components/WeeklyScores";

const Home = (props) => {
    return (
        <>
            <header>
                <WeeklyScores />
            </header>
        </>
    );
};

export default Home;