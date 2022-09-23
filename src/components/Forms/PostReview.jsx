import React, { useState } from "react";
import ReactStars from "react-rating-stars-component";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../context/auth/useAuth";
import service from "../../services/apiHandler";

const PostReview = ({ updateReviewsList }) => {
  const [formData, setFormData] = useState({
    content: "",
    rating: 0,
  });
  const { currentUser } = useAuth();
  const navigate = useNavigate();
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
      if (!currentUser) {
        navigate("/signin");
        return;
      }
      const res = await service.post(`/eateries/reviews/${id}`, formData);
      updateReviewsList();
      setFormData({ content: "", rating: 0 });
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="postReview">
      <h3>leave review</h3>
      <input
        type="text"
        id="content"
        name="content"
        placeholder="i think..."
        onChange={(e) =>
          setFormData({ ...formData, [e.target.name]: e.target.value })
        }
        value={formData.content}
      />
      <div>
        <ReactStars
          count={5}
          value={formData.name && 0}
          onChange={(e) => {
            console.log(e);
            setFormData({ ...formData, rating: e });
          }}
          size={24}
          activeColor="#FFFF00"
        />
      </div>
      <input id="postReviewSubmitButton" type="submit" value="post review" />
      {error && <div id="errorMessage">{error}</div>}
    </form>
  );
};

export default PostReview;
