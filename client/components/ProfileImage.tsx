import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';


const ProfileImage = (props: any) => {
    return (
        <div>
            {/* <Card> */}
                <img src={props.image.img_url} />
                <DeleteIcon onClick={(event) => props.deleteImage(props.image)} />
            {/* </Card> */}
            {/* <button onClick={(event) => props.deleteImage(props.image)}>DELETE</button> */}
        </div>
    )
}
export default ProfileImage;


