import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';



const ProfileImage = (props: any) => {
    return (
        <div className="display">
            {/* <Card> */}
                <img src={props.image.img_url} className="displayImage" />
                <DeleteIcon className="displayImage" onClick={(event) => props.deleteImage(props.image)} />
            {/* </Card> */}
            {/* <button onClick={(event) => props.deleteImage(props.image)}>DELETE</button> */}
        </div>
    )
}
export default ProfileImage;


