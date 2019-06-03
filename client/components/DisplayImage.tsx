/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actions } from '../actions/actions';
import { ImageObj, ModalObj } from '../actions/types';

const mapStateToProps = (store: any) => ({
  modalToggle: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (event: ModalObj) => {
    dispatch(actions.toggleModal(event));
  },
  likedImage: (event: ImageObj) => {
    dispatch(actions.likedImage(event));
  },
});

const Image = (props: any) => (
  <div>
    <div
      className="display"
      onClick={e => {
        if (props.modalToggle === false) {
          const modalObj: {} = {
            modalURL: props.image.webformatURL,
            modalToggle: true,
          };
          props.toggleModal(modalObj);
        }
        if (props.modalToggle === true) {
          const modalObj: {} = {
            modalURL: '',
            modalToggle: false,
          };
          props.toggleModal(modalObj);
        }
      }}
    >
      <img src={props.image.webformatURL} className="displayImage" />
    </div>
    <div className="displayImage">
      <FavoriteIcon onClick={() => props.likedImage(props.image)} />
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
