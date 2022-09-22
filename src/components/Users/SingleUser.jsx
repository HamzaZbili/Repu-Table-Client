import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import UserRoleForm from "../Forms/UserRoleForm";

const SingleUser = () => {
  const [user, setUser] = useState();
  const { id } = useParams();

  useEffect(() => {
    try {
      const res = service.get(`/mod/users/${id}`).then((response) => {
        setUser(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);
  return (
    <div>
      {user ? (
        <div>
          <h3>
            {user.role} {user.username}
          </h3>
          <p>{user.email}</p>
          <p>{user.phoneNumber}</p>
          <UserRoleForm />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default SingleUser;
