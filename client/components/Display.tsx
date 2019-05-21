import React from 'react';
import Image from './Image';

interface IProps {
    images: any[];
}

const Display: React.FC<IProps> = (props) => {
    const imageArr = []
    for(let i = 0; i < props.images.length; i++) {
        // console.log('this is props', props.images[i].webformatURL)
        imageArr.push(<Image image={props.images[i].webformatURL} />);
    }
    return (
        <div>
            {imageArr}
        </div>
    ) 
}
export default Display;