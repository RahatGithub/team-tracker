import './Header.css'
import React from 'react';
import soccerBg from '../../images/soccer_bg2.jpg'

const Header = (props) => {

    const {image} = props

    return (
        <div className='header'>
            <img className='header-bg' src={soccerBg} alt=""/>
            <img className='team-logo' src={image} alt=""/>
        </div>
    );
};

export default Header;