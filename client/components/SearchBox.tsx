import React from 'react';

interface Props {
  searchWord: string;
  saveSearch: (e: string) => void;
  getSearchImageAsync: (s: string) => void;
}

const Search = (props: Props) => {
  const { searchWord, saveSearch, getSearchImageAsync } = props;
  return (
    <div id="search">
      <input
        type="text"
        className="searchBox"
        value={searchWord}
        onChange={event => saveSearch(event.target.value)}
        onKeyDown={event => {
          event.keyCode === 13 && getSearchImageAsync(searchWord);
        }}
      />
      <button
        id="searchButton"
        onClick={event => getSearchImageAsync(searchWord)}
      >
        SEARCH
      </button>
    </div>
  );
};

export default Search;
