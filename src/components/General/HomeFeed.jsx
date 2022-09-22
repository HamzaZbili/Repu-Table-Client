import React, { useCallback, useEffect, useState } from "react";
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
      {allEateries
        .filter((eatery) =>
          eatery.businessName.toLowerCase().includes(searchQuery)
        )
        .map((eatery) => {
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
