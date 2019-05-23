import React from 'react';

const Search = (props:any) => {
    return (
        <div id="search">
            <input type="text" id="searchBox" value={props.searchWord} onChange={(event) => props.saveSearch(event.target.value)} />
            <button onClick={(event) => props.getSearchImage(props.searchWord)}>SEARCH</button> 
        </div>
    )
}

export default Search;