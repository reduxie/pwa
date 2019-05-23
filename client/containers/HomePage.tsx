import React, { Component } from 'react';
import NavBar from "./../components/NavBar";
import { connect } from "react-redux";
import { actions, getSearchImageAsync, getProfileAsync, getLikedImageAsync } from '../actions/actions';
import Search from "./../components/SearchBox";
import Display from "./../components/Display";


const mapStateToProps = (store:any) => ({
  searchWord: store.user.searchWord,
  images: store.image.searchImages,
  user: store.image.user_id 
});


const mapDispatchToProps = (dispatch:any) => ({
  saveSearch: (event:string) => {
    dispatch(actions.saveSearch(event));
  },

  getSearchImage: (searchWord: string) => {
      dispatch(getSearchImageAsync(searchWord))
  },
  getProfile: (event:number) => {
      dispatch(getProfileAsync(event))
  },
  likedImage: (event: any) => {
      dispatch(getLikedImageAsync(event))
  }
});
interface IProps {
    saveSearch: (e: any) => void;
    addSearch:(e: any) => void;
    getSearchImage: (searchWord: string) => void; 
    getProfile: (e: any) => void;
    likedImage?: (images: any) => void; 
    searchWord: string;
    images: any[];
    user: number;
}



const Homepage: React.FC<IProps> = (props) => {
      return (
        <div id="homepage">
            <h1>
              Home Page
            </h1>
            <Search saveSearch={props.saveSearch} getSearchImage={props.getSearchImage} searchWord={props.searchWord}/>
            <Display images={props.images} likedImage={props.likedImage} />
            <NavBar getProfile={props.getProfile} user={props.user} />
        </div>
      )
    }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);
