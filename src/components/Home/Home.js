import React, { useContext} from 'react';
import { TeamContext } from '../../App';
import Header from '../Header/Header';
import Team from '../Team/Team';
import logo from '../../images/football (1) 1.png'
import './Home.css'

const Home = () => {

    const teams = useContext(TeamContext)

    return (
        <div>
            <Header image={logo}></Header>
            <div className="home">
                <div className='teams-section'>
                {
                    teams.map(team => <Team key={team.idTeam} team={team}></Team>)
                }
                </div>
            </div>
        </div>
    );
};

export default Home;