import React from 'react';
// import Heart from './Heart'

// interface IImage {
//     image: any;
//     // imageId?: number;
//     // likedPhoto: any;
// }

// const Image: React.FC<IImage> = (props: any) => {
//     // console.log('this is the image', props.image)
//     return (
//         <div>
//             <img src={props.image.webformatURL} />
//             <button onClick={(event) => props.likedImage(props.image)}>LIKE</button>
//         </div>
//     )
// }
// export default Image;
const Image = (props: any) => {
    // console.log('this is the image', props.image)
    return (
        <div>
            <img src={props.image.webformatURL} />
            <button onClick={(event) => props.likedImage(props.image)}>LIKE</button>
        </div>
    )
}
export default Image;


// getting images from two different displays so you're having issues. need to either set a conditional or try to add another component.
