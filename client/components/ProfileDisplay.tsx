import React from 'react';
import ProfileImage from './ProfileImage';

interface IProps {
    profile: any[];
    deleteImage: {};
}

const ProfileDisplay: React.FC<IProps> = (props: any) => {
    const profileImageArr = []
    for(let i = 0; i < props.profile.length; i++) {
        profileImageArr.push(<ProfileImage image={props.profile[i]} imageId={props.profile[i].id} deleteImage={props.deleteImage} />);
    }
    return (
        <div id="profilePage">
            {profileImageArr}
        </div>
    ) 
}
export default ProfileDisplay;