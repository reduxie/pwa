import React from 'react';

interface Image {
    image: any;
}
const Image: React.FC<Image> = (props) => {
    return (
        <div>
            <img src={props.image} />
        </div>
    )
}
export default Image;
