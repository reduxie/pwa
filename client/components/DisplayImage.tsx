import React from 'react';
import Card from '@material-ui/core/Card';
import FavoriteIcon from '@material-ui/icons/Favorite';


const Image = (props: any) => {
    return (
        <div>
            <Card>
                <img src={props.image.webformatURL} />
                <FavoriteIcon onClick={(event) => props.likedImage(props.image)} />
            </Card>
        </div>
    )
}
export default Image;


