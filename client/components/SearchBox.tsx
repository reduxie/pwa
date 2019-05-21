import React from 'react';
// import { checkPropTypes } from 'prop-types';
// interface Props {
//     saveSearch(event:React.MouseEvent<HTMLElement>): void,
//     addSearch(event: React.ChangeEvent) : void
// }
// const Search: React.FC<Props> = (props) => {
//     return (
//         <div>
//             <input type="text" id="searchBox" onChange={(event) => props.saveSearch(event)} />
//             {/* <input type="text" id="searchBox" /> */}
//             <input type="button" onClick={(event) => props.addSearch(event)} />
//             {/* <input type="button"  /> */}
//         </div>
//     )
// }
const Search = (props:any) => {
    return (
        <div>
            <input type="text" id="searchBox" onChange={(event) => props.saveSearch(event.target.value)} />
            {/* <input type="text" id="searchBox" /> */}
            <input type="button" onClick={(event) => props.getSearchImage(props.searchWord)} />
            {/* <input type="button"  /> */}
        </div>
    )
}

export default Search;