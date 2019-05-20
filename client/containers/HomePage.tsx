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
  store,
});


const mapDispatchToProps = (dispatch:any) => ({
  saveSearch: (event:any) => {
      const action = actions.saveSearch(event.target.value);
      console.log('this is the event', action);
    dispatch(action);
  },
  
//   saveImage: (event:any) => {
//     dispatch(actions.saveImage(event.target.id));
//   },
//   addToCollection: (event:any) => {
//     console.log('hodor');
//     dispatch(actions.addToCollection());
//   },
});
interface JaysSmallPEnis {
    saveSearch: (e: any) => void;
    
}



const Homepage: React.FC<JaysSmallPEnis> = (props) => {
      return (
        <div>
            <h2>
              Home Page
            </h2>
            <Search search={props.saveSearch}/>
            <NavBar />
        </div>
      )
    }
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Homepage);
// export default Homepage;