import React from "react";
import { Input } from "antd";
import "./searchEateries.css";
import magnifyingGlass from "../../images/magnifying-glass.png";

const SearchEateries = ({ searchQuery, setSearchQuery }) => {
  return (
    <>
      <div className="searchBarContainer">
        <Input
          className="searchBar"
          value={searchQuery}
          placeholder="search by eatery name"
          type="text"
          onChange={(e) => setSearchQuery(e.target.value.toLocaleLowerCase())}
        />
        <img src={magnifyingGlass} alt="magnifiying glass" />
      </div>
    </>
  );
};

export default SearchEateries;
