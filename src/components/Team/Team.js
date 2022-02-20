import React from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './Team.css'

const Team = (props) => {

    const {strTeam, strSport, strTeamBadge, idTeam} = props.team 

    const history = useHistory();

    const handleExplore = (id) => {
        const url = `/team/${id}`;
        history.push(url);
    }

    return (
        <div className='team'>
            <img src={strTeamBadge} alt="" />
            <h3>{strTeam}</h3>
            <p>Sport Type: {strSport}</p>
            <button onClick={() => handleExplore(idTeam)}>Explore</button>
        </div>
    );
};

export default Team;