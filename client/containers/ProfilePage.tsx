import React, { Component } from 'react';
import NavBar from "./../components/NavBar";
import ProfileDisplay from "./../components/ProfileDisplay";
import { connect } from "react-redux";
import { getProfileAsync, deleteImageAsync } from '../actions/actions';

const mapStateToProps = (store:any) => ({
  profile: store.image.myImages
});

const mapDispatchToProps = (dispatch:any) => ({
  getProfile: (userId: number) => {
    dispatch(getProfileAsync(userId))
  },
  deleteImage: (image: any) => {
    dispatch(deleteImageAsync(image))
  }
})

interface IProfile {
  profile: any[];
  getProfile: (e: any) => void;
  user: number;
  deleteImage: (e: any) => void;
}

const Profile: React.FC<IProfile> = (props) => {
      return (
        <div>
            <h2>
              Profile Page
            </h2>
            <ProfileDisplay profile={props.profile} deleteImage={props.deleteImage} />
            <NavBar getProfile={props.getProfile} user={props.user} />
        </div>
      )
  }
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Profile);