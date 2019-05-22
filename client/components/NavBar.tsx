import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProfileDisplay from './ProfileDisplay';

interface INav {
    getProfile: (e: any) => void,
    // likedImage: (images: any) => void; 
    user: number
}

const NavBar: React.FC<INav> = (props) => (
    <div>
        <Link to="/"><button className="navbar">HOMEPAGE</button></Link>
        <Link to="/profile"><button className="navbar" onClick={(event) => props.getProfile(props.user) } >PROFILE</button></Link>
        <button className="navbar" >Notifications</button>
    </div>
);

export default NavBar;
{/* <Link to="/about">About</Link> */}

// need to create a method that listens to an event in order for the redirect to the link. 