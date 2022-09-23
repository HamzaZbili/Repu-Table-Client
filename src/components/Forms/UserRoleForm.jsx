import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import "./userRoleForm.css";

const UserRoleForm = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ _id: id, role: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service
        .patch(`/mod/users/${id}`, formData)
        .then(() => navigate(`/mod/users`));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="roleFormContainer">
      <h3 className="roleFormLabel">modify user role</h3>
      <form onSubmit={handleSubmit}>
        <select
          name="role"
          id="role"
          value={formData.role}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
        >
          <option value="user">user</option>
          <option value="moderator">moderator</option>
          <option value="super">super</option>
        </select>
        <input id="roleFormSubmitButton" type="submit" value="apply change" />
      </form>
    </div>
  );
};

export default UserRoleForm;
