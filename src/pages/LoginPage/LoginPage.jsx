import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate, useLocation } from "react-router-dom";
import "./loginpage.css";

export const LoginPage = () => {
  const { login, setLogin } = useAuth();
  const { dispatch } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const userNameHandler = (e) => {
    setUsername(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const clickHandler = () => {
    setLogin(true);
    navigate("/");
  };
  return (
    <div className="container">
      <div className="login_container p1 border_gray_thick">
        <div>
          <label htmlFor="login">Username</label>
          <input
            className="input br1 p05"
            name="login"
            type="text"
            placeholder="Username or email"
            value={username}
            onChange={userNameHandler}
          />
        </div>
        <div>
          <label htmlFor="login">Password</label>
          <input
            className="input br1 p05"
            name="login"
            type="text"
            placeholder="password"
            value={password}
            onChange={passwordHandler}
          />
        </div>
        <button className="btn_primary2" onClick={clickHandler}>
          Login
        </button>
      </div>
    </div>
  );
};
