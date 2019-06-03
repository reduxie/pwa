import React from 'react';
import { connect } from 'react-redux';
import ProfileImage from './ProfileImage';
import { actions } from '../actions/actions';

interface IProps {
  // myImages: any[];
  deleteImageAsync: {};
  userLikes: any[];
}

const mapStateToProps = (store: any) => ({
  modalToggle: store.image.modalToggle,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  dropModal: () => {
    dispatch(actions.dropModal());
  },
});

const ProfileDisplay: React.FC<IProps> = (props: any) => {
  let modal;
  if (props.modalToggle) {
    modal = (
      <div id="modal" onClick={e => props.dropModal()}>
        <img src={props.modalURL} />
      </div>
    );
  }
  const profileImageArr = [];

  for (let i = 0; i < props.userLikes.length; i++) {
    profileImageArr.push(
      <ProfileImage
        image={props.userLikes[i]}
        imageId={props.userLikes[i].id}
        deleteImageAsync={props.deleteImageAsync}
      />
    );
  }
  return (
    <div>
      {modal}
      <div id="profilePage">{profileImageArr}</div>
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay);
