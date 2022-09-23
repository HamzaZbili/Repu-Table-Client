import React from "react";
import { Input } from "antd";
import "./searchEateries.css";

const SearchEateries = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <Input
        className="searchBar"
        value={searchQuery}
        placeholder="search by eatery name"
        type="text"
        onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
      />
    </>
  );
};

export default SearchEateries;
