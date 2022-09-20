import React, { useEffect, useState } from "react";
import service from "../../services/apiHandler";
import EateryCard from "../Eateries/EateryCard";
import { Link } from "react-router-dom";
import SearchEateries from "../Forms/SearchEateries";

const HomeFeed = () => {
  const [allEateries, setAllEateries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(``);
  useEffect(() => {
    service.get("/eateries").then((response) => {
      setAllEateries(response.data);
    });
  }, []);

  return (
    <>
      <SearchEateries
        setSearchQuery={setSearchQuery}
        searchQuery={searchQuery}
      />
      {searchQuery
        ? allEateries.map((eatery) => {
            return (
              <Link to={`/eateries/${eatery._id}`} key={eatery._id}>
                <EateryCard eatery={eatery} />
              </Link>
            );
          })
        : allEateries.map((eatery) => {
            return (
              <Link to={`/eateries/${eatery._id}`} key={eatery._id}>
                <EateryCard eatery={eatery} />
              </Link>
            );
          })}
    </>
  );
};

export default HomeFeed;
