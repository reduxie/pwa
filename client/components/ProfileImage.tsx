import React from 'react';


// interface IImage {
//     image?: any;
//     imageId?: number;
//     likedPhoto: (images: any) => void;
// }

// const ProfileImage: React.FC<IImage> = (props) => {
//     // console.log('this is the image', props.image)
//     return (
//         <div>
//             <img src={props.image} />
//             <button onClick={(event) => props.likedImage(props.image)}>LIKE</button>
//         </div>
//     )
// }
// export default ProfileImage;
const ProfileImage = (props: any) => {
    // console.log('this is the image', props.image)
    return (
        <div>
            <img src={props.image} />
            <button onClick={(event) => props.likedImage(props.image)}>DELETE</button>
        </div>
    )
}
export default ProfileImage;


// getting images from two different displays so you're having issues. need to either set a conditional or try to add another component.
