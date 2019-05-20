import React, { Component } from 'react';
import NavBar from "./../components/NavBar";



// const Profile: React.FC<{}> = () => (
//     <div>
//         <h1>Profile Page</h1>
//         <NavBar />
//     </div>
// );

class Profile extends React.Component<{}> {
    render() {
      return (
        <div>
            <h2>
              Profile Page
            </h2>
            <NavBar />
        </div>
      )
    }
  }
export default Profile;