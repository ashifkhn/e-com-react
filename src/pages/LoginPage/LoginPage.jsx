import React from "react";
import "./loginpage.css";

export const LoginPage = () => {
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
          />
        </div>
        <div>
          <label htmlFor="login">Password</label>
          <input
            className="input br1 p05"
            name="login"
            type="text"
            placeholder="password"
          />
        </div>
        <button className="btn_primary2">Login</button>
      </div>
    </div>
  );
};
