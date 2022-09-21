import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Moderators from "../components/Users/Moderators";
import Supers from "../components/Users/Supers";
import Users from "../components/Users/Users";

import service from "../services/apiHandler";

const UserAdmin = () => {
  const [allUsers, setAllUsers] = useState([]);

  useEffect(() => {
    try {
      service.get(`/mod/users`).then((response) => {
        setAllUsers(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  if (!allUsers.length) return <div>Loading !</div>;

  const supers = allUsers.filter((user) => user.role === "super");
  const moderators = allUsers.filter((user) => user.role === "moderator");
  const users = allUsers.filter((user) => user.role === "user");

  return (
    <>
      <h4 className="userTitles">supers</h4>
      <Supers supers={supers} />
      <h4 className="userTitles">moderators</h4>
      <Moderators moderators={moderators} />
      <h4 className="userTitles">users</h4>
      <Users users={users} />
    </>
  );
};

export default UserAdmin;
