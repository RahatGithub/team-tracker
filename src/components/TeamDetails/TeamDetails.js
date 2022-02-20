import './TeamDetails.css'
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TeamContext } from '../../App';
import maleImg from '../../images/male.png'
import femaleImg from '../../images/female.png'
import Header from '../Header/Header';
import facebook from '../../images/Facebook.png';
import twitter from '../../images/Twitter.png';
import youtube from '../../images/YouTube.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMars, faFutbol, faFlag} from "@fortawesome/free-solid-svg-icons";

const TeamDetails = () => {

    const {id} = useParams()
    const teams = useContext(TeamContext);
    const teamDetails = teams.find(team => team.idTeam === id)
    const {strCountry, strGender, strSport, strDescriptionEN, strTeam, strTeamBadge, strFacebook, strYoutube, strTwitter} = teamDetails

    let img, style;
    if(strGender === "Male"){
        img = maleImg;
        style={ backgroundColor: "rgb(39, 39, 243)" }
    }
    else{
        img = femaleImg;
        style={ backgroundColor: "rgb(233, 50, 126)" }
    }

    // console.log(strFacebook, strYoutube, strTwitter)

    return (
        <div>
            <Header image={strTeamBadge}></Header>
            <div className='info'>
                <div className="basic-info" style={style}>
                    <div>
                        <h2>{strTeam}</h2>
                        <h5><FontAwesomeIcon icon={faFlag} /> Country: {strCountry}</h5>
                        <h5><FontAwesomeIcon icon={faFutbol} /> Sport Type: {strSport}</h5>
                        <h5><FontAwesomeIcon icon={faMars} /> Gender: {strGender}</h5>
                    </div>
                    <div className="team-image">
                        <img src={img} alt="" />
                    </div>
                </div>
                <p>{strDescriptionEN}</p>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus facilis error nemo ut illum dolore non facere, nihil repellendus natus. Fuga odio sit voluptates voluptate. Alias quaerat modi numquam possimus, maiores sapiente eveniet aut? Natus facilis asperiores fugit eligendi expedita fuga nihil maxime inventore reprehenderit dolore adipisci, aut non, laudantium aliquid ipsam, accusantium aperiam dolor quibusdam libero repellendus est? Esse ab quas eius mollitia cupiditate pariatur dolorem consequuntur, facilis voluptate quam odit dignissimos odio illo rem sit aspernatur? Praesentium similique error, pariatur eligendi minus quidem dolores beatae. Facere repudiandae impedit aliquam ut nostrum. Id illum officia cumque, magni obcaecati ullam libero laboriosam officiis sed tempora animi maiores ad repellendus iusto quae quidem impedit alias. Mollitia saepe odit accusamus hic vitae. Ad molestiae rem voluptate a tempore! Nemo voluptatem quod blanditiis sint eum! Facilis repudiandae officiis, quibusdam totam, corporis similique facere atque ab porro expedita quis unde ut ullam quos minima itaque optio amet rem. Sed architecto voluptatum adipisci odit? Magni impedit vero sit aliquid quia perferendis voluptatibus, ipsam neque accusantium ex vel nostrum explicabo exercitationem, quisquam minus tenetur dolor itaque pariatur quibusdam? Assumenda vero, quibusdam animi pariatur nam, veritatis deleniti fugiat exercitationem at delectus ratione repudiandae possimus aperiam earum in.</p>
                <div className="social-media-section">
                    <a href={strFacebook}><img src={facebook} alt="" /></a>
                    <a href={strYoutube}><img src={youtube} alt="" /></a>
                    <a href={strTwitter}><img src={twitter} alt="" /></a>
                </div>
            </div>
        </div>
    );
};

export default TeamDetails;