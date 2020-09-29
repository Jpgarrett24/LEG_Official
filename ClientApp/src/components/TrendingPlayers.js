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

    return (
        <section className="trending">
        </section>
    );
}

export default TrendingPlayers;