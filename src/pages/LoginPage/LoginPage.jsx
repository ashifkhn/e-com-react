import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export const LoginPage = () => {
  let navigate = useNavigate();
  const { setLogin } = useAuth();
  const [passwordFlag, setPasswordFlag] = useState(true);
  const [email, setEmail] = useState("");
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

  const signUpHandler = () => {
    navigate("/signup");
  };

  const emailHandler = (e) => {
    setEmail(e.target.value);
  };

  var data = JSON.parse(localStorage.getItem("key"));

  const submitHandler = () => {
    if (!emailRegex.test(email)) {
      setInvalidMessage("Please enter valid email!");
      setTimeout(() => setInvalidMessage(""), 1500);
    } else if (email !== data.email) {
      setInvalidMessage("No user found! Please Sign up to continue");
    } else {
      setLogin(true);
      navigate("/");
    }
  };
  return (
    <div className="login_page_container">
      <form action="">
        <div className="image_container_login_page">
          <div className="bitfire_logo"></div>
          <div className="login_screen_image"></div>
        </div>

        <div className="login_container_main">
          <div className="login_page_content">
            <h1 className="page_text">Login to your account</h1>
            <div className="enter_email_message">
              Enter your email and password to login
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
                <input type={passwordType} />
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
            <div className="btn_container">
              <button
                className="btn_primary2 p1 br1 white m-1"
                onClick={submitHandler}
              >
                Log In
              </button>
            </div>

            <button
              className="btn_primary2 p1 br1 white m-1"
              onClick={signUpHandler}
            >
              {" "}
              or Sign up{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
