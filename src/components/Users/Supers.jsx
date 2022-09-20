import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import UserRoleForm from "../Forms/UserRoleForm";

const Supers = ({ supers }) => {
  //   const [supers, setSupers] = useState();
  //   useEffect(() => {
  //     setSupers(users);
  //   }, [users]);

  return (
    <div>
      {supers.map(({ _id, username, email, role }) => {
        return (
          <div key={_id}>
            <h4>{username}</h4>
            <p>{email}</p>
            <Link to={`/mod/users/${_id}`}>manage user</Link>
          </div>
        );
      })}
    </div>
  );
};

export default Supers;
