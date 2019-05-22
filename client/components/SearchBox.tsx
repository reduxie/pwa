import React from 'react';

const Search = (props:any) => {
    return (
        <div>
            <input type="text" id="searchBox" value={props.searchWord} onChange={(event) => props.saveSearch(event.target.value)} />
            <input type="button" onClick={(event) => props.getSearchImage(props.searchWord)} />
        </div>
    )
}

export default Search;