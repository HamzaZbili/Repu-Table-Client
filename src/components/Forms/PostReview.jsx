import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";

const PostReview = ({ updateReviewsList }) => {
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });

  const [error, setError] = useState(null);
  const { id } = useParams();

  // const resetForm = () => {
  //   setRating(0);
  //   setContent("");
  //   setIsContentFieldOpen(false);
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.post(`/eateries/reviews/${id}`, formData);
      updateReviewsList();
      setFormData("");
    } catch (error) {
      setError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>leave review</h2>
      <input
        type="text"
        id="content"
        name="content"
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        value={formData.content}
      />
      <ReactStars
        count={5}
        value={formData.name}
        onChange={(e) => {
          console.log(e);
          setFormData({ ...formData, rating: e });
        }}
        size={24}
        activeColor="#00d7ff"
      />
      <input type="submit" value="post review" />
    </form>
  );
};

export default PostReview;
