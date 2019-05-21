import React, { Component } from 'react';
import NavBar from "./../components/NavBar";
import { connect } from "react-redux";
import { actions, getSearchImageAsync, getProfileAsync } from '../actions/actions';
import Search from "./../components/SearchBox"


const mapStateToProps = (store:any) => ({
  searchWord: store.searchWord
});


const mapDispatchToProps = (dispatch:any) => ({
  saveSearch: (event:string) => {
    dispatch(actions.saveSearch(event));
  },
//   addSearch: (event:string) => {
//     dispatch(actions.addSearch(event));
//   },
  getSearchImage: (searchWord: string) => {
      dispatch(getSearchImageAsync(searchWord))
  },
  getProfile: (userId: number) => {
      dispatch(getProfileAsync(userId))
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
    getProfile: (userId: number) => void;
    searchWord: string;
}



const Homepage: React.FC<IProps> = (props) => {
      return (
        <div>
            <h2>
              Home Page
            </h2>
            <Search saveSearch={props.saveSearch} getSearchImage={props.getSearchImage} searchWord={props.searchWord}/>
            <NavBar />
        </div>
      )
    }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);
// export default Homepage;