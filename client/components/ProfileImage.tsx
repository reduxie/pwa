import React from 'react';

const ProfileImage = (props: any) => {
    return (
        <div>
            <img src={props.image.img_url} />
            <button onClick={(event) => props.deleteImage(props.image)}>DELETE</button>
        </div>
    )
}
export default ProfileImage;


