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
    <div>
        {/* // value={value}
        // onChange={this.handleChange}
        // showLabels
    // className={classes.root} */}
      {/* <BottomNavigation>
      <Link to="/"><BottomNavigationAction  onClick={(event) => props.getProfile(props.user) } label="Recents" icon={<RestoreIcon />} /></Link>
      <Link to="/profile"><BottomNavigationAction label="Favorites" icon={<Avatar />} /></Link>
        <BottomNavigationAction label="Nearby" icon={<MailIcon />} />
      </BottomNavigation> */}
    <Link to="/"><button className="navbar">HOMEPAGE</button></Link> 
    <Link to="/profile"><button className="navbar" onClick={(event) => props.getProfile(props.user) } >PROFILE</button></Link>
    <button className="navbar" >Notifications</button>
    </div> 
);

export default NavBar;

 