import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import service from "../../services/apiHandler";
import "./auth.css";

const FormSignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await service.signup(formData);
      navigate("/signin");
    } catch (error) {
      setError(error.response.data.message);
    }
  };
  return (
    <>
      {error && <h3 className="error">{error.message}</h3>}
      <form onSubmit={handleSubmit} className="authForm">
        <h2 className="authTitle">creat an account</h2>
        <label htmlFor="username" className="authLabel">
          usename
        </label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.name}
          type="text"
          id="username"
          name="username"
        />
        <label htmlFor="email" className="authLabel">
          email
        </label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.email}
          type="email"
          id="email"
          name="email"
        />
        <label htmlFor="password" className="authLabel">
          password
        </label>
        <input
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          value={formData.password}
          type="password"
          id="password"
          name="password"
        />
        <div className="eateryAccountQ">
          <label htmlFor="role">eatery owner?</label>
          <select
            name="role"
            id="role"
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required
          >
            <option value="user">no</option>
            <option value="eateryAccount">yes</option>
          </select>
        </div>
        {error && <h5 className="error">{error}</h5>}
        <button className="authButton">sign up</button>
      </form>
      <div className="linkToAltAuth">
        <p>already have an account?</p>
        <p>
          click <Link to="/signin">HERE</Link> to login
        </p>
      </div>
    </>
  );
};

export default FormSignUp;
