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

    if (scores == false || matchups == false || teams == false || rosters == false) {
        return (
            <div className="scoresNav">
                <h1>This week's scores are loading...</h1>
            </div>
        )
    }

    return (
        <div className="scoresNav">
            {matchups.map((matchup, idx) => {
                return (
                    <div className="matchup" key={idx}>
                        {matchup.map((team, idx) => {
                            let oneTeam = rosters.filter((roster, idx) => {
                                return (roster.roster_id === team.roster_id)
                            });
                            oneTeam = oneTeam[0];
                            let owner = teams.filter((team, idx) => {
                                return (team.user_id === oneTeam.owner_id);
                            })[0];
                            console.log(owner);
                            let avatar = `https://sleepercdn.com/avatars/`
                            return (
                                <div className="matchupTeam" key={idx}>
                                    <Link to={`/team/${owner.user_id}`}>{owner.metadata.team_name}</Link>
                                    <span className="matchupUsername">{owner.display_name}</span>
                                    <span className="matchupPoints">{team.points}</span>
                                    <span className="matchupRecord">{oneTeam.settings.wins} - {oneTeam.settings.losses} - {oneTeam.settings.ties}</span>
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