import React from "react";
import { Link } from "react-router-dom";
import "./users.css";

const Users = ({ users, label }) => {
  return (
    <div>
      <h4 className="userTitles">{label}</h4>
      {users.map(({ _id, username, email, role }) => {
        return (
          <div key={_id} className="userContainer">
            <div className="nameAndEmail">
              <h4>{username}</h4>
              <p>{email}</p>
            </div>
            {role !== "super" && (
              <Link className="manageUserButton" to={`/mod/users/${_id}`}>
                manage user
              </Link>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Users;
