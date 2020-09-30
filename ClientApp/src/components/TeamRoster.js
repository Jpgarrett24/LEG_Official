import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const [rosters, setRosters] = useState([]);
    const [users, setUsers] = useState([]);
    const { allUsers } = props;

    useEffect(() => {
        axios.get('https://api.sleeper.app/v1/league/551962981649379328/users')
            .then(res => {
                setUsers(res.data)
            })
            .catch(err => console.log(err));

        axios.get('https://api.sleeper.app/v1/league/551962981649379328/rosters')
            .then(res => {
                setRosters(res.data);
            })
            .catch(err => console.log(err));
    }, []);

    return (
        <div className="rosterPage">
            <h1 style={{color: 'white'}}>Team Roster page!</h1>

            {/* {users.map((user, idx) => {
                return (
                    <div className="team" key={idx}>
                        {user.map((team, idx) => {
                            let oneTeam = rosters.filter((roster, idx) => {
                                return (roster.roster_id === team.roster_id)
                            });
                        })}
                    </div>
                )
            })} */}
            
            
        </div>
    )
};
