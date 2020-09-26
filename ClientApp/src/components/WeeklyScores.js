import React, { useEffect, useState } from "react";
import { Link, navigate, redirect } from "@reach/router";
import axios from "axios";

const WeeklyScores = (props) => {
    const [scores, setScores] = useState([]);
    const [matchups, setMatchups] = useState([[], [], [], [], [], []]);
    const [teams, setTeams] = useState([]);
    const [rosters, setRosters] = useState([]);

    useEffect(() => {
        axios.get("https://api.sleeper.app/v1/league/551962981649379328/matchups/3")
            .then((res) => {
                setScores(res.data);

                for (let i = 0; i < res.data.length; i++) {
                    setMatchups(...matchups, matchups[(res.data[i].matchup_id - 1)].push(res.data[i]));
                };
                setMatchups(matchups);
            })
            .catch((err) => console.log(err));

        axios.get("https://api.sleeper.app/v1/league/551962981649379328/users")
            .then((res) => {
                setTeams(res.data);
            })
            .catch((err) => console.log(err));

        axios.get("https://api.sleeper.app/v1/league/551962981649379328/rosters")
            .then((res) => {
                setRosters(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    console.log(rosters);

    return (
        <div className="scoresNav">
            {matchups.map((matchup, idx) => {
                return (
                    <div className="matchup" key={idx}>
                        {matchup.map((team, idx) => {
                            console.log(team);
                            return (
                                <div className="matchupTeam" key={idx}>
                                    <span className="matchupPoints">{team.points}</span>
                                </div>
                            )
                        })}
                    </div>
                )
            })}
        </div>
    );
};

export default WeeklyScores;