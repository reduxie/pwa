import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';



const Search = (props:any) => {
    return (
        <div>
            {/* <AppBar>
                <SearchIcon />
                    <InputBase
                    placeholder="Search…"
                    value={props.searchWord} onChange={(event) => props.saveSearch(event.target.value)}
                    /> */}
                <input type="text" id="searchBox" value={props.searchWord} onChange={(event) => props.saveSearch(event.target.value)} />
                <input type="button" onClick={(event) => props.getSearchImage(props.searchWord)} />
            {/* </AppBar> */}
        </div>
    )
}

export default Search;