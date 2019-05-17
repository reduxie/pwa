import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';
import Button from '@material-ui/core/Button';
import { actions } from '../actions/actions';

const mapStateToProps = (store:any) => ({
  store,
});

const mapDispatchToProps = (dispatch:any) => ({
  // getData: () => {
  //   dispatch(actions.getData());
  // },
  saveSearch: (event:any) => {
    dispatch(actions.saveSearch(event.target.value));
  },
  saveImage: (event:any) => {
    dispatch(actions.saveImage(event.target.id));
  },
  // addToCollection: (event:any) => {
  //   console.log('hodor');
  //   dispatch(actions.addToCollection());
  // },
});

const Display = (props: any) => (
  <div>
    <ReactJson src={props} />
    <Button
      variant="outlined"
      onMouseDown={() => {
        // console.log(props.addToCollection());
        props.addToCollection();
        // dispatch({ type: 'ADD_TO_COLLECTION' });
      }}
    >
      Test Actions
    </Button>
    <h3>Display.js</h3>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
