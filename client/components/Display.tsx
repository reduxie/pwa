import React from 'react';
import { connect } from 'react-redux';
// import Card from '@material-ui/core/Card';
// import { bool } from 'prop-types';
import Image from './DisplayImage';
import { actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  dropModal: () => {
    dispatch(actions.dropModal());
  },
});

interface IProps {
  images: any[];
  likedImage: any;
}

const Display: React.FC<IProps> = (props: any) => {
  const imageArr = [];
  for (let i = 0; i < props.images.length; i++) {
    imageArr.push(
      <Image image={props.images[i]} likedImage={props.likedImage} />
    );
  }
  let modal;
  // console.log()
  if (props.bool) {
    modal = (
      <div id="modal" onClick={e => props.dropModal()}>
        <img src={props.modalURL} />
      </div>
    );
  }
  return (
    <div>
      {modal}
      <div className="display">{imageArr}</div>
    </div>
  );
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Display);
