import React from 'react';
import ProfileImage from './ProfileImage';

interface IProps {
    profile: any[];
    // likedImage: (images: any) => void; 
}

const ProfileDisplay: React.FC<IProps> = (props: any) => {
    const profileImageArr = []
    // console.log(props.profile);
    for(let i = 0; i < props.profile.length; i++) {
        // console.log('this is props', props.profile[i].img_url)
        profileImageArr.push(<ProfileImage image={props.profile[i].img_url} imageId={props.profile[i].id} />);
    }
    return (
        <div>
            {profileImageArr}
        </div>
    ) 
}
export default ProfileDisplay;