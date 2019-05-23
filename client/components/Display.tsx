import React from 'react';
import Image from './DisplayImage';

interface IProps {
    images: any[];
    likedImage: any; 
}

const Display: React.FC<IProps> = (props) => {
    const imageArr = []
    for(let i = 0; i < props.images.length; i++) {
        imageArr.push(<Image image={props.images[i]} likedImage={props.likedImage} />);
    }
    return (
        <div className="display">
            {imageArr}
        </div>
    ) 
}
export default Display;