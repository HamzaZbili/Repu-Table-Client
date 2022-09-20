import React, { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import Input from "./Input";

const fields = [
  {
    label: "business name",
    fieldName: "businessName",
    type: "text",
    placeholder: "business name",
  },
  {
    label: "address",
    fieldName: "address",
    type: "text",
    placeholder: "123 Reputable Street",
  },
  {
    label: "cuisine",
    fieldName: "cuisine",
    type: "text",
    placeholder: "cuisine",
  },
  {
    label: "description",
    fieldName: "description",
    type: "text",
    placeholder: "description",
  },
  {
    label: "website",
    fieldName: "website",
    type: "text",
    placeholder: "www.eatery.co.uk",
  },
  {
    label: "email",
    fieldName: "email",
    type: "text",
    placeholder: "workersunite@workplace.co.uk",
  },
  {
    label: "tel number",
    fieldName: "phoneNumber",
    type: "number",
    placeholder: "07123456789",
  },
];

const PostNewEatery = () => {
  const [formData, setFormData] = useState({
    businessName: "",
    address: "",
    cuisine: [],
    description: "",
    photo: "",
    website: "",
    email: "",
    phoneNumber: 0,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const newEatery = await service
        .post(`/eateries/my/new`, formData)
        .then((response) => console.log(response.data));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <BackButton />
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
        <input type="submit" value="post new eatery" />
      </form>
    </>
  );
};

export default PostNewEatery;
