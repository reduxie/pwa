import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import NavBar from '../components/NavBar';
import ProfileDisplay from '../components/ProfileDisplay';
import { getProfileAsync, deleteImageAsync, actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  profile: store.image.myImages,
  userId: store.user.userId,
});

const mapDispatchToProps = (dispatch: any) => ({
  getProfile: (userId: number) => {
    dispatch(getProfileAsync(userId));
  },
  deleteImage: (image: any) => {
    dispatch(deleteImageAsync(image));
  },
  logoutUser: () => {
    dispatch(actions.logoutUser());
  },
});

interface IProfile {
  profile: any[];
  getProfile: (e: any) => void;
  userId: number;
  deleteImage: (e: any) => void;
  logoutUser: () => void;
}

const Profile: React.FC<IProfile> = props => (
  <div>
    <h1>Profile Page</h1>
    <ProfileDisplay profile={props.profile} deleteImage={props.deleteImage} />
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
