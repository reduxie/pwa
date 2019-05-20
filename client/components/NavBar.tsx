import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const NavBar: React.FC<{}> = () => (
    <div>
        <Link to="/"><button className="navbar">HOMEPAGE</button></Link>
        <Link to="/profile"><button className="navbar">PROFILE</button></Link>
        <button className="navbar" >Notifications</button>
    </div>
);

export default NavBar;
{/* <Link to="/about">About</Link> */}

// need to create a method that listens to an event in order for the redirect to the link. 