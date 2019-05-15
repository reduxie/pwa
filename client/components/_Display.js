import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

const mapStateToProps = store => ({
  store,
});

const mapDispatchToProps = dispatch => ({
  //   getData: data => dispatch(),
});

class Homepage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* {props} */}
        <h1>hello!</h1>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Homepage);
