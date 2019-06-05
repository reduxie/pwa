import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProfileDisplay from '../components/ProfileDisplay';
import { getProfileAsync, deleteImageAsync, actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  //  store.image.myImages,
  userId: store.user.userId,
  userLikes: store.user.userLikes,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: (userId: number) => {
    dispatch(getProfileAsync(userId));
  },
  deleteImageAsync: (image: any) => {
    dispatch(deleteImageAsync(image));
  },
  logoutUser: () => {
    dispatch(actions.logoutUser());
  },
});

interface IProfile {
  // myImages: any[];
  getProfile: (e: any) => void;
  userId: number;
  deleteImageAsync: (e: any) => void;
  logoutUser: () => void;
  userLikes: any[];
}

const Profile: React.FC<IProfile> = props => (
  // console.log('userLikes:\n', props.userLikes);
  <div>
    <h1 className="title">Profile Page</h1>
    <ProfileDisplay
      userLikes={props.userLikes}
      deleteImageAsync={props.deleteImageAsync}
    />
    <NavBar
      getProfile={props.getProfile}
      userId={props.userId}
      logoutUser={props.logoutUser}
    />
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
