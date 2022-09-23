import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import BackButton from "../Navbar/BackButton";
import Input from "./Input";
import "./postNewEatery.css";

const fields = [
  {
    label: "business name",
    fieldName: "businessName",
    type: "text",
    placeholder: "my eatery",
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
    placeholder: "Italian",
  },
  {
    label: "description",
    fieldName: "description",
    type: "text",
    placeholder: "enter description..",
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
    label: "tel",
    fieldName: "phoneNumber",
    type: "text",
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
    phoneNumber: "",
  });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key]);
      }
      data.append("image", file);
      const newEatery = await service
        .post(`/eateries/my/new`, formData)
        .then((response) => console.log(response.data))
        .then(navigate("/eateries/my"));
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <BackButton />
      <form onSubmit={handleSubmit} id="postNewEateryForm">
        {fields.map((fieldInfo, key) => {
          return (
            <div key={key}>
              <Input
                className={fieldInfo.fieldName}
                {...fieldInfo}
                key={key}
                formData={formData}
                setFormData={setFormData}
              />
            </div>
          );
        })}
        <p>attach image</p>
        <input
          onChange={(e) => {
            setFormData({ ...formData, [e.target.name]: e.target.value });
            setFile(e.target.files[0]);
          }}
          value={formData.proofOfLivingWage}
          type="file"
          id="photo"
          name="photo"
          accept="png jpeg"
          required
        />
        <input
          type="submit"
          value="post new eatery"
          id="postNewEateryFormSubmitButton"
        />
      </form>
    </>
  );
};

export default PostNewEatery;
