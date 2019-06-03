import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
// import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import { actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalToggle: (event: {}) => {
    dispatch(actions.modalToggle(event));
  },
});

const ProfileImage = (props: any) => (
  <div>
    <div
      className="display"
      onClick={e => {
        if (props.bool === false) {
          const changeObj: {} = {
            modalURL: props.userLikes.webformatURL,
            modalToggle: true,
          };
          props.modalToggle(changeObj);
        }
        if (props.bool === true) {
          const changeObj: {} = {
            modalURL: '',
            modalToggle: false,
          };
          props.modalToggle(changeObj);
        }
      }}
    >
      <img src={props.image.webformatURL} className="displayImage" />
    </div>
    <div className="displayImage">
      <DeleteIcon onClick={event => props.deleteImageAsync(props.image)} />
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);
