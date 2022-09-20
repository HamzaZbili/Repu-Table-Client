import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import service from "../../services/apiHandler";

const SingleUser = ({ id }) => {
  const [user, setUser] = useState();

  useEffect(() => {
    try {
      const res = service.get(`/mod/users/${id}`).then(setUser(res.data));
    } catch (error) {
      console.log(error.message);
    }
  });
  return <div>SingleUser</div>;
};

export default SingleUser;
