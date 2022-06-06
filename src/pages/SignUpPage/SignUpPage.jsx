import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";

export const SignUpPage = () => {
  let navigate = useNavigate();
  const { login, setLogin } = useAuth();
  const [passwordFlag, setPasswordFlag] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [invalidMessage, setInvalidMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;
  const showPAsswordHandler = () => {
    if (passwordFlag) {
      setPasswordType("text");
      setPasswordFlag(!passwordFlag);
    } else {
      setPasswordType("password");
      setPasswordFlag(!passwordFlag);
    }
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const passWordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const credentials = {
    email: email,
    password: password,
  };

  const signUpHandler = () => {
    if (!emailRegex.test(email)) {
      setInvalidMessage("Please enter valid email!");
      setTimeout(() => setInvalidMessage(""), 1500);
    } else {
      localStorage.setItem("key", JSON.stringify(credentials));
      setLogin(true);
      navigate("/login");
    }
  };
  return (
    <div>
      <div className="login_page_container">
        <div className="image_container_login_page">
          <div className="bitfire_logo"></div>
          <div className="login_screen_image"></div>
        </div>
        <div className="login_container_main">
          <div className="login_page_content">
            <h1 className="page_text">Create a new account</h1>
            <div className="enter_email_message">
              Enter your email and password to sign up
            </div>
            <div className="input_container">
              <label>Email</label>
              <div className="input_and_icons">
                <input
                  type="text"
                  value={email}
                  placeholder="karan@neog.com"
                  onChange={emailHandler}
                  className="input"
                />
              </div>
            </div>
            <p className="invalid_email font-red">{invalidMessage}</p>
            <div className="input_container">
              <label>Password</label>
              <div className="input_and_icons">
                <input
                  type={passwordType}
                  value={password}
                  onChange={passWordHandler}
                />
                {passwordFlag ? (
                  <div className="show_password" onClick={showPAsswordHandler}>
                    {" "}
                    Show Password
                  </div>
                ) : (
                  <div className="show_password" onClick={showPAsswordHandler}>
                    Hide Password{" "}
                  </div>
                )}
              </div>
            </div>

            <button
              className="btn_primary2 p1 br1 white m-1"
              onClick={signUpHandler}
            >
              {" "}
              Sign up{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
