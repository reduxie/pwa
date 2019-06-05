import React, { Component } from 'react';
import { connect } from 'react-redux';
import NavBar from '../components/NavBar';
import {
  actions,
  getSearchImageAsync,
  getProfileAsync,
  getLikedImageAsync,
} from '../actions/actions';
import Search from '../components/SearchBox';
import Display from '../components/Display';

const mapStateToProps = (store: any) => ({
  searchWord: store.user.searchWord,
  images: store.image.searchImages,
  userId: store.user.userId,
});

const mapDispatchToProps = (dispatch: any) => ({
  saveSearch: (event: string) => {
    dispatch(actions.saveSearch(event));
  },

  getSearchImage: (searchWord: string) => {
    dispatch(getSearchImageAsync(searchWord));
  },
  getProfile: (event: number) => {
    dispatch(getProfileAsync(event));
  },
  likedImage: (event: any) => {
    dispatch(getLikedImageAsync(event));
  },
  logoutUser: () => {
    dispatch(actions.logoutUser());
  },
});
interface IProps {
  saveSearch: (e: any) => void;
  addSearch: (e: any) => void;
  getSearchImage: (searchWord: string) => void;
  getProfile: (e: any) => void;
  likedImage?: (images: any) => void;
  searchWord: string;
  images: any[];
  userId: number;
  logoutUser: () => void;
}

const Homepage: React.FC<IProps> = props => (
  <div id="homepage">
    <h1 className="title">Home Page</h1>
    <Search
      saveSearch={props.saveSearch}
      getSearchImage={props.getSearchImage}
      searchWord={props.searchWord}
    />
    <Display images={props.images} likedImage={props.likedImage} />
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
)(Homepage);
