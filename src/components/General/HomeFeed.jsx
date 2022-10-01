import React, { useEffect, useState, useTransition } from "react";
import service from "../../services/apiHandler";
import EateryCard from "../Eateries/EateryCard";
import { Link } from "react-router-dom";
import { animated, useSpring } from "react-spring";
import SearchEateries from "../Forms/SearchEateries";
import "./homeFeed.css";

const HomeFeed = () => {
  const [allEateries, setAllEateries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(``);

  const styles = useSpring({
    from: {
      y: 800,
    },
    to: {
      opacity: 1,
      y: 0,
    },
    config: { duration: 300 },
  });

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
      <div id="homeFeed">
        {allEateries
          .filter((eatery) =>
            eatery.businessName.toLowerCase().includes(searchQuery)
          )
          .map((eatery) => {
            return (
              <animated.div style={styles} key={eatery._id}>
                <Link to={`/eateries/${eatery._id}`}>
                  <EateryCard eatery={eatery} />
                </Link>
              </animated.div>
            );
          })}
      </div>
    </>
  );
};

export default HomeFeed;
