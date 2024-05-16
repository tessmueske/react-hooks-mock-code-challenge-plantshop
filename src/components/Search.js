import React, { useState } from "react";

function Search({ searchForPlant }) {

const [currentSearch, setCurrentSearch] = useState("");

function handleSubmit(e){
  e.preventDefault();
  console.log("hi")
  searchForPlant(currentSearch)
}

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        value={currentSearch}
        onChange={(e) => setCurrentSearch(e.target.value)}
      />
    </form>
  );
}

export default Search;
