import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import { connect } from 'react-redux';
import { actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  modalToggle: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: ({}) => void) => ({
  toggleModal: (event: { modalURL: string; modalToggle: boolean }) => {
    dispatch(actions.toggleModal(event));
  },
});

const ProfileImage = (props: any) => (
  <div>
    <div
      className="display"
      onClick={e => {
        if (props.modalToggle === false) {
          const modalObj: {} = {
            modalURL: props.userLikes.webformatURL,
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
      <img src={props.image.webformatURL} alt="" className="displayImage" />
    </div>
    <div className="displayImage">
      <DeleteIcon onClick={() => props.deleteImageAsync(props.image)} />
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);
