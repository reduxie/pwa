import React from 'react';
import { connect } from 'react-redux';
import ProfileImage from './ProfileImage';
import { actions } from '../actions/actions';

interface IProps {
  profile: any[];
  deleteImage: {};
}

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  dropModal: () => {
    dispatch(actions.dropModal());
  },
});

const ProfileDisplay: React.FC<IProps> = (props: any) => {
  let modal;
  if (props.bool) {
    // console.log('inside modal');
    modal = (
      <div id="modal" onClick={e => props.dropModal()}>
        <img src={props.modalURL}  />
      </div>
    );
  }
  const profileImageArr = [];
  for (let i = 0; i < props.profile.length; i++) {
    profileImageArr.push(
      <ProfileImage
        image={props.profile[i]}
        imageId={props.profile[i].id}
        deleteImage={props.deleteImage}
      />
    );
  }
  return (
    <div>
      {modal}
      <div id="profilePage">{profileImageArr}</div>);
    </div>
  );
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileDisplay);
