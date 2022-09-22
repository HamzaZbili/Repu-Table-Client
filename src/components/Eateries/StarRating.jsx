import React from "react";

export const StarRating = (props) => {
  const rate = [];

  for (let i = 0; i < Math.round(props.children); i++) {
    rate.push("★");
  }

  while (rate.length < 5) {
    rate.push("☆");
  }
  return <div className="rating-display">{rate.flat()} </div>;
};

export default StarRating;
