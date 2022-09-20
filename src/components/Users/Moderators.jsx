import React from "react";
import { Link } from "react-router-dom";

const Moderators = ({ moderators }) => {
  return (
    <div>
      {moderators.map(({ _id, username, email, role }) => {
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

export default Moderators;
