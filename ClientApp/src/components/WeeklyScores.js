import React, { useEffect, useState } from "react";
import { Link } from "@reach/router";
import axios from "axios";

const WeeklyScores = (props) => {
    const [scores, setScores] = useState([]);
    const [matchups, setMatchups] = useState([[], [], [], [], [], []]);
    const [rosters, setRosters] = useState([]);
    const { allUsers } = props;

    useEffect(() => {
        axios.get("https://api.sleeper.app/v1/league/551962981649379328/matchups/4")
            .then((res) => {
                setScores(res.data);
                for (let i = 0; i < res.data.length; i++) {
                    setMatchups(...matchups, matchups[(res.data[i].matchup_id - 1)].push(res.data[i]));
                };
                setMatchups(matchups);
            })
            .catch((err) => console.log(err));

        axios.get("https://api.sleeper.app/v1/league/551962981649379328/rosters")
            .then((res) => {
                setRosters(res.data);
            })
            .catch((err) => console.log(err));
    }, []);

    if (scores == false || matchups == false || rosters == false || allUsers === null) {
        return (
            <div className="scoresNav">
                <h1>This week's scores are loading...</h1>
            </div>
        )
    }

    return (
        <div className="scoresNav">
            <form>
                <select name="week" id="week">
                    <option value="1">Week 1</option>
                    <option value="2">Week 2</option>
                    <option value="3">Week 3</option>
                    <option value="4">Week 4</option>
                    <option value="5">Week 5</option>
                    <option value="6">Week 6</option>
                    <option value="7">Week 7</option>
                    <option value="8">Week 8</option>
                    <option value="9">Week 9</option>
                    <option value="10">Week 10</option>
                    <option value="11">Week 11</option>
                    <option value="12">Week 12</option>
                    <option value="13">Week 13</option>
                </select>
            </form>
            {matchups.map((matchup, idx) => {
                return (
                    <div className="matchup" key={idx}>
                        {matchup.map((team, idx) => {
                            let oneTeam = rosters.filter((roster, idx) => {
                                return (roster.roster_id === team.roster_id)
                            });
                            oneTeam = oneTeam[0];
                            let owner = allUsers.filter((team, idx) => {
                                return (team.user_id === oneTeam.owner_id);
                            })[0];
                            let avatar = `https://sleepercdn.com/avatars/${owner.avatar}`
                            return (
                                <div className="matchupTeam" key={idx}>
                                    <img className="matchupPhoto" src={avatar} alt="official team photo" />
                                    {owner.metadata.team_name ?
                                        <Link to={`/team/${owner.user_id}`}>{owner.metadata.team_name}</Link> :
                                        <Link to={`/team/${owner.user_id}`}>Huge Bitch</Link>
                                    }
                                    <span className="matchupRecord">{oneTeam.settings.wins}-{oneTeam.settings.losses}-{oneTeam.settings.ties}</span>
                                    {/* <span className="matchupUsername">@{owner.display_name}</span> */}
                                    {team.points ?
                                        <span className="matchupPoints">{team.points.toFixed(2)}</span> :
                                        <span className="matchupPoints">0.00</span>
                                    }
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