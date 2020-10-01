import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPlayers = (props) => {
    const [trendingUp, setTrendingUp] = useState(null);
    const [trendingDown, setTrendingDown] = useState(null);
    const { allPlayers, allUsers } = props;

    useEffect(() => {
        axios.get("https://api.sleeper.app/v1/players/nfl/trending/add")
            .then((res) => setTrendingUp(res.data))
            .catch((err) => console.log(err));

        axios.get("https://api.sleeper.app/v1/players/nfl/trending/drop")
            .then((res) => setTrendingDown(res.data))
            .catch((err) => console.log(err));
    }, []);

    if (trendingUp === null || trendingDown === null || allPlayers === null) {
        return (
            <h1>loading</h1>
        )
    }

    else {
        const up = trendingUp.map((player) => {
            return (
                { ...player, details: allPlayers[`${player.player_id}`] }
            );
        });

        const down = trendingDown.map((player) => {
            return (
                { ...player, details: allPlayers[`${player.player_id}`] }
            );
        });

        console.log(up);
        console.log(down);

        return (
            <section className="trending">
                <button className="trendingButton">Trending Up</button>
                <button className="trendingButton">Trending Down</button>
            </section>
        );
    }
}

export default TrendingPlayers;