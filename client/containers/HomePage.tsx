import React, { Component } from 'react';
import NavBar from "./../components/NavBar";
import { connect } from "react-redux";
import { actions, getSearchImageAsync, getProfileAsync } from '../actions/actions';
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
//   addSearch: (event:string) => {
//     dispatch(actions.addSearch(event));
//   },
  getSearchImage: (searchWord: string) => {
    //   console.log('inside homepage', searchWord)
      dispatch(getSearchImageAsync(searchWord))
  },
  getProfile: (event:number) => {
      dispatch(getProfileAsync(event))
  }
  
//   saveImage: (event:any) => {
//     dispatch(actions.saveImage(event.target.id));
//   },
//   addToCollection: (event:any) => {
//     console.log('hodor');
//     dispatch(actions.addToCollection());
//   },
});
interface IProps {
    saveSearch: (e: any) => void;
    addSearch:(e: any) => void;
    getSearchImage: (searchWord: string) => void; 
    getProfile: (e: any) => void;
    searchWord: string;
    images: any[];
    user: number;
}



const Homepage: React.FC<IProps> = (props) => {
      return (
        <div>
            <h2>
              Home Page
            </h2>
            <Search saveSearch={props.saveSearch} getSearchImage={props.getSearchImage} searchWord={props.searchWord}/>
            <Display images={props.images} />
            <NavBar getProfile={props.getProfile} user={props.user} />
        </div>
      )
    }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);
// export default Homepage;