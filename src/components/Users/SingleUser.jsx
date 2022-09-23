import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../../services/apiHandler";
import UserRoleForm from "../Forms/UserRoleForm";
import BackButton from "../Navbar/BackButton";
import "./singleUser.css";

const SingleUser = () => {
  const [user, setUser] = useState();
  const [userEateries, setUserEateries] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const userFound = service.get(`/mod/users/${id}`).then((response) => {
        setUser(response.data);
      });
      const eateriesFound = service
        .get(`/mod/users/eateries/${id}`)
        .then((response) => {
          setUserEateries(response.data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const res = await service
        .delete(`/mod/users/${id}`)
        .then(() => navigate(`/mod/users`));
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(userEateries);
  return (
    <div>
      <BackButton />
      {user && (
        <div>
          <h3 className="usenameAndRole">{user.username}</h3>
          <div className="userProfile">
            <p>current role: {user.role}</p>
            <p>email: {user.email}</p>
            <p>tel: {user.phoneNumber}</p>
          </div>
          {userEateries?.length ? (
            <div className="userEateries">
              <h3>user eateries</h3>
              {userEateries.map((eatery) => {
                return (
                  <Link key={eatery._id} to={`/mod/eateries/${eatery._id}`}>
                    {eatery.businessName}
                  </Link>
                );
              })}
            </div>
          ) : (
            ""
          )}
          <UserRoleForm />
          <button
            className="deleteUserButton"
            onClick={(e) => {
              if (window.confirm("Are you sure you want delete this user?"))
                handleDelete(e);
            }}
          >
            delete
          </button>
        </div>
      )}
    </div>
  );
};

export default SingleUser;
