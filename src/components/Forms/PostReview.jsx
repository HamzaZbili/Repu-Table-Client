import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import Input from "./Input";

const fields = [
  {
    label: "rating",
    fieldName: "rating",
    type: "number",
    placeholder: "rating",
    min: 0,
    max: 5,
  },
  {
    label: "content",
    fieldName: "content",
    type: "text",
    placeholder: "I think...",
  },
];

const PostReview = () => {
  const [formData, setFormData] = useState({
    rating: 0,
    content: "",
  });
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.post(`/eateries/reviews/${id}`, formData);
      navigate("/eateries");
    } catch (error) {
      setError(e.message).then(console.log(error));
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((fieldInfo, key) => {
        return (
          <div key={key}>
            <Input
              {...fieldInfo}
              key={key}
              formData={formData}
              setFormData={setFormData}
            />
          </div>
        );
      })}
      <input type="submit" value="post review" />
    </form>
  );
};

export default PostReview;
