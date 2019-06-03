import React from 'react';
import { connect } from 'react-redux';
import FavoriteIcon from '@material-ui/icons/Favorite';
import { actions } from '../actions/actions';
import { ImageObj } from '../actions/types';

const mapStateToProps = (store: any) => ({
  modalToggle: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  toggleModal: (event: {}) => {
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
          const changeObj: {} = {
            modalURL: props.image.webformatURL,
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
      <FavoriteIcon onClick={event => props.likedImage(props.image)} />
    </div>
  </div>
);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
