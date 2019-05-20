import React, { Component } from 'react';
import NavBar from "./../components/NavBar";
import { connect } from "react-redux";
import { actions } from '../actions/actions';
import Search from "./../components/SearchBox"

// const Homepage: React.FC<{}> = () => (
//     <div>
//         <h1>Homepage</h1>
//         <NavBar />
//     </div>
// );
// const {value}: {value: string;} = event.target;


const mapStateToProps = (store:any) => ({
  store: store.searchWord
});


const mapDispatchToProps = (dispatch:any) => ({
  saveSearch: (event:string) => {
    dispatch(actions.saveSearch(event));
  },
  addSearch: (event:string) => {
    dispatch(actions.addSearch(event));
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
    store: string;
}



const Homepage: React.FC<IProps> = (props) => {
      return (
        <div>
            <h2>
              Home Page
            </h2>
            <Search saveSearch={props.saveSearch} addSearch={props.addSearch} searchWord={props.store}/>
            <NavBar />
        </div>
      )
    }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);
// export default Homepage;