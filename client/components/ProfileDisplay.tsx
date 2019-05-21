import React from 'react';
import Image from './Image';

interface IProps {
    profile: any[];
}

const ProfileDisplay: React.FC<IProps> = (props) => {
    const imageArr = []
    console.log(props.profile);
    for(let i = 0; i < props.profile.length; i++) {
        // console.log('this is props', props.images[i].webformatURL)
        imageArr.push(<Image image={props.profile[i].webformatURL} />);
    }
    return (
        <div>
            {imageArr}
        </div>
    ) 
}
export default ProfileDisplay;