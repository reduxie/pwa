import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactJson from 'react-json-view';

// function mapStateToProps(store) {
//   return { avatar: store.user.avatar };
// }
const mapStateToProps = store => ({
  store,
});
// const mapDispatchToProps = dispatch => ({});

const Display = props => {
  console.log(props);
  // let props = JSON.stringify(props);
  return (
    <div>
      <ReactJson src={props} />

      {console.log(props)}
      <h1>Display this shhiz!</h1>
    </div>
  );
};

// class Display extends Component {
//   render() {
//     return <h1>Display this shhiz!</h1>;
//   }
// }

export default connect(
  mapStateToProps,
  null
  //   // mapDispatchToProps
)(Display);

// export default Display;
