import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import UserRoleForm from "../Forms/UserRoleForm";

const Supers = ({ users }) => {
  const [supers, setSupers] = useState();
  useEffect(() => {
    setSupers(users);
  }, [users]);

  return (
    <div>
      {supers
        ? supers
            .filter((user) => user.role === "super")
            .map(({ _id, username, email, role }) => {
              const userLink = `/mod/users/${_id}`;
              return (
                <div key={_id}>
                  <h4>{username}</h4>
                  <p>{email}</p>
                  <NavLink to={userLink}>manage user</NavLink>
                </div>
              );
            })
        : ""}
    </div>
  );
};

export default Supers;
