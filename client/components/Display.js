import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

const mapStateToProps = store => ({
  store,
});

const Display = props => (
  <div>
    <ReactJson src={props} />
    <h1>Display this shhiz!</h1>
  </div>
);

export default connect(
  mapStateToProps,
  null
)(Display);
