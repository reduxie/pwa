/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
// import { string } from 'prop-types';
// import { actions } from '../actions/actions';
import { ImageObj, ImageState } from '../actions/types';

const mapStateToProps = (store: ImageState) => ({
  modalToggle: store.modalToggle,
  modalURL: store.modalURL,
});

// const mapDispatchToProps = (dispatch: (ModalObj: {}) => void) => ({
//   toggleModal: (event: any) => {
//     dispatch(actions.toggleModal(event));
//   },
// });

interface PProps {
  modalToggle: boolean;
  modalURL: string;
  toggleModal: (ModalObj: {}) => void;
  image: { webformatURL: string };
  deleteImageAsync: (image: {}) => void;
  userLikes: ImageObj[];
}

const ProfileImage = (props: PProps) => {
  const { image, deleteImageAsync } = props;
  return (
    <div>
      {/* <div
        className="display"
        onClick={e => {
          if (modalToggle === false) {
            const modalObj: {} = {
              modalURL: userLikes.webformatURL,
              modalToggle: true,
            };
            toggleModal(modalObj);
          }
          if (modalToggle === true) {
            const modalObj: {} = {
              modalURL: '',
              modalToggle: false,
            };
            toggleModal(modalObj);
          }
        }}
      > */}
      <img src={image.webformatURL} alt="" className="displayImage" />
      <div className="displayImage">
        <DeleteIcon onClick={() => deleteImageAsync(image)} />
      </div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  null
)(ProfileImage);
