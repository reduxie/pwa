import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';
import Button from '@material-ui/core/Button';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({
  getData: () => {
    dispatch(actions.getData());
  },
  saveSearch: () => {
    dispatch(actions.saveSearch(event.target.value));
  },
  saveImage: event => {
    dispatch(actions.saveImage(event.target.id));
  },
  addToCollection: event => {
    console.log('hodor');
    dispatch(actions.addToCollection());
  },
});

const Display = props => (
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
