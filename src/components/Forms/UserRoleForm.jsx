import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";

const UserRoleForm = () => {
  console.log(`on the right page`);
  const { id } = useParams();
  const [formData, setFormData] = useState({ _id: id, role: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.patch(`/mod/users/${id}`, formData);
      console.log(res);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>modify user role</h2>
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
        <input type="submit" value="apply role" />
        {/* {error && <h3 className="error">{error.message}</h3>} */}
      </form>
    </>
  );
};

export default UserRoleForm;
