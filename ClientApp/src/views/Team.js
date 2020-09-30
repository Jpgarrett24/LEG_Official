import React from 'react';
import TeamRoster from '../components/TeamRoster';


const Team = (props) => {
    const { allUsers, allPlayers } = props;
    return (
        <div>
            <TeamRoster />

        </div>
    );
};

export default Team;