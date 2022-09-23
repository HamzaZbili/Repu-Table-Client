import React, { useState } from "react";
import service from "../../services/apiHandler";
import useAuth from "../../context/auth/useAuth";
import { Link, useNavigate } from "react-router-dom";

const FormSignIn = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { storeToken, authenticateUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signin(user);
      // console.log(res)
      storeToken(res.token);
      await authenticateUser();
      navigate("/eateries");
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="authForm">
        <h2 className="authTitle">sign in</h2>
        <label htmlFor="username" className="authLabel">
          username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.username}
        />
        <label htmlFor="password" className="authLabel">
          password
        </label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(e) =>
            setUser({ ...user, [e.target.name]: e.target.value })
          }
          value={user.password}
        />
        {error && <h5 className="error">{error}</h5>}
        <button className="authButton">sign in</button>
      </form>
      <div className="linkToAltAuth">
        <p>don't have an account?</p>
        <p>
          click <Link to="/signup">HERE</Link> to sign up
        </p>
      </div>
    </>
  );
};

export default FormSignIn;
