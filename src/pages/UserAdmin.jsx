import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import BackButton from "../components/Navbar/BackButton";
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

  const userCollections = [
    { label: "supers", status: "super" },
    { label: "moderators", status: "moderator" },
    { label: "eatery accounts", status: "eateryAccount" },
    { label: "users", status: "user" },
  ];

  return (
    <div>
      <BackButton />
      {userCollections.map(({ label, status }) => {
        return (
          <Users
            users={allUsers.filter((user) => user.role === status)}
            label={label}
            key={label}
          />
        );
      })}
    </div>
  );
};

export default UserAdmin;
