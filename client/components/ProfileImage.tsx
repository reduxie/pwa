import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
// import Card from '@material-ui/core/Card';
import { connect } from 'react-redux';
import { actions } from '../actions/actions';

const mapStateToProps = (store: any) => ({
  bool: store.image.modalBool,
  modalURL: store.image.modalURL,
});

const mapDispatchToProps = (dispatch: any) => ({
  modalBool: (event: {}) => {
    dispatch(actions.modalBool(event));
  },
});

const ProfileImage = (props: any) => (
  <div>
    <div className="display"
      onClick={e => {
        if (props.bool === false) {
          const changeObj: {} = {
            modalURL: props.image.img_url,
            modalBool: true,
          };
          props.modalBool(changeObj);
        }
        if (props.bool === true) {
          const changeObj: {} = {
            modalURL: '',
            modalBool: false,
          };
          props.modalBool(changeObj);
        }
      }}
    >
      <img src={props.image.img_url} className="displayImage" />
    </div>
    <div className="displayImage">
      <DeleteIcon 
        onClick={event => props.deleteImage(props.image)}
      />
    </div>
  </div>
);
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileImage);
