import React, { useState } from "react";
import { BiSearchAlt2 } from "react-icons/bi";

const SearchBar = ({ handleFilter }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
    handleFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="icon">
          <BiSearchAlt2 />
        </div>
        <input
          onChange={(e) => handleSearch(e)}
          vlaue={search}
          id="search"
          type="search"
          placeholder="search"
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
