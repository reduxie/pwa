import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
// import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import { actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  modalToggle: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (event: {}) => {
    dispatch(actions.toggleModal(event));
  },
});

const ProfileImage = (props: any) => (
  <div>
    <div
      className="display"
      onClick={e => {
        if (props.modalToggle === false) {
          const changeObj: {} = {
            modalURL: props.userLikes.webformatURL,
            modalToggle: true,
          };
          props.toggleModal(changeObj);
        }
        if (props.modalToggle === true) {
          const changeObj: {} = {
            modalURL: '',
            modalToggle: false,
          };
          props.toggleModal(changeObj);
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
