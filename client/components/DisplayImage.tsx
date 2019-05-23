import React from 'react';
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Image = (props: any) => {
    return (
        <div className="display">
                <img src={props.image.webformatURL} className="displayImage"/>
                <FavoriteIcon className="displayImage" onClick={(event) => props.likedImage(props.image)} />
        </div>
    )
}
export default Image;


