import React, { useState } from "react";

function Search({ onSearchChange, onSortChange }) {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("date");

  function handleChange(e) {
    setSearch(e.target.value);
    onSearchChange(e.target.value);
  };

  function handleSortChange(e) {
    setSort(e.target.value);
    onSortChange(e.target.value);
  };

  return (
    <div className="ui large fluid icon input">
      <input
        id="search"
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleChange}
        value={search}
      />
      <label htmlFor="select">Sort by:</label>
      <select onChange={handleSortChange} value={sort}>
        <option value="description">Description</option>
        <option value="category">Category</option>
        <option value="amount">Amount</option>
        <option value="date">Date</option>
      </select>
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
