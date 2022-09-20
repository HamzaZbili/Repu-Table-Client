import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Moderators from "../components/Users/Moderators";
import Supers from "../components/Users/Supers";
import Users from "../components/Users/Users";

import service from "../services/apiHandler";

const UserAdmin = () => {
  const [allUsers, setAllUsers] = useState();

  useEffect(() => {
    try {
      service.get(`/mod/users`).then((response) => {
        setAllUsers(response.data);
      });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  return (
    <>
      <h4>supers</h4>
      <Supers users={allUsers} />
      <h4>moderators</h4>
      <Moderators users={allUsers} />
      <h4>users</h4>
      <Users users={allUsers} />
    </>
  );
};

export default UserAdmin;
