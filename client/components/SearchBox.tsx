import React from 'react';

const Search = (props: any) => (
  <div id="search">
    <input
      type="text"
      className="searchBox"
      value={props.searchWord}
      onChange={event => props.saveSearch(event.target.value)}
      onKeyDown={event => {
        event.keyCode === 13 && props.getSearchImageAsync(props.searchWord);
      }}
    />
    <button
      id="searchButton"
      onClick={event => props.getSearchImageAsync(props.searchWord)}
    >
      SEARCH
    </button>
  </div>
);

export default Search;
