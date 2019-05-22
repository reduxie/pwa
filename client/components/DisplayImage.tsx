import React from 'react';

const Image = (props: any) => {
    return (
        <div>
            <img src={props.image.webformatURL} />
            <button onClick={(event) => props.likedImage(props.image)}>LIKE</button>
        </div>
    )
}
export default Image;


