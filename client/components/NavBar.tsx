import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import MailIcon from '@material-ui/icons/Mail';
import Avatar from '@material-ui/core/Avatar';


interface INav {
    getProfile: (e: any) => void,
    user: number
}

const NavBar: React.FC<INav> = (props) => (
    <div id="navbar">
        <Link to="/"><button className="navbutton">HOMEPAGE</button></Link> 
        <Link to="/profile"><button className="navbutton" onClick={(event) => props.getProfile(props.user) } >PROFILE</button></Link>
        <button className="navbutton">Notifications</button>
    </div> 
);

export default NavBar;

 