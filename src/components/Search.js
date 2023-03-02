import React, { useState } from "react";

function Search({ onSearchChange }) {
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  }

  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
