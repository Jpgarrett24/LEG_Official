import React, { useEffect, useState } from "react";
import axios from "axios";

const TrendingPlayers = (props) => {
    const [trendingUp, setTrendingUp] = useState(null);
    const [trendingDown, setTrendingDown] = useState(null);
    const [toggle, setToggle] = useState(0);
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

        const checkStatus = (status) => {
            if (status === null) {
                return (
                    <td id="healthy">Healthy</td>
                )
            }
            else if (status === "Questionable") {
                return (
                    <td id="Questionable">{status}</td>
                )
            }
            else if (status === "Doubtful") {
                return (
                    <td id="Doubtful">{status}</td>
                )
            }
            else if (status === "COV") {
                return (
                    <td id="COV">{status}</td>
                )
            }
            else if (status === "IR") {
                return (
                    <td id="IR">{status}</td>
                )
            }
            else {
                return (
                    <td>{status}</td>
                )
            };
        }

        const clicky = () => {
            if (toggle === 0) {
                return (
                    <table className="trendingTable">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Age</th>
                                <th>Height</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {up.map((player, idx) => {
                                return (
                                    <tr key={player.player_id}>
                                        <td>{idx + 1}</td>
                                        <td>{player.details.fantasy_positions}</td>
                                        <td>{player.details.team}</td>
                                        <td>{player.details.full_name}</td>
                                        {checkStatus((player.details.injury_status))}
                                        <td>{player.details.age}</td>
                                        <td>{player.details.height}</td>
                                        <td>{player.details.weight}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                );
            }
            else {
                return (
                    <table className="trendingTable">
                        <thead>
                            <tr>
                                <th>No.</th>
                                <th>Position</th>
                                <th>Team</th>
                                <th>Name</th>
                                <th>Status</th>
                                <th>Age</th>
                                <th>Height</th>
                                <th>Weight</th>
                            </tr>
                        </thead>
                        <tbody>
                            {down.map((player, idx) => {
                                return (
                                    <tr key={player.player_id}>
                                        <td>{idx + 1}</td>
                                        <td>{player.details.fantasy_positions}</td>
                                        <td>{player.details.team}</td>
                                        <td>{player.details.full_name}</td>
                                        {checkStatus((player.details.injury_status))}
                                        <td>{player.details.age}</td>
                                        <td>{player.details.height}</td>
                                        <td>{player.details.weight}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                )
            }
        };
        return (
            <section className="trending">
                <button className="trendingButtonUp" onClick={(event) => setToggle(0)}>Trending Up</button>
                <button className="trendingButtonDown" onClick={(event) => setToggle(1)}>Trending Down</button>
                {clicky()}
            </section>
        );
    }
}

export default TrendingPlayers;