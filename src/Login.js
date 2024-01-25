import React, { useState } from "react";
import "./Login.css";
import axios from "axios";

function Login(props) {
  const [error, setError] = useState();
  const handleError = (error) => {
    setError(
      error?.response?.data || error?.message || error || "something went wrong"
    );
  };
  const login = function (e) {
    e.preventDefault();
    const userName = e.target.userName.value;
    const password = e.target.password.value;

    const url = `https://shlomit-00e660508931.herokuapp.com/users/login`;
    axios
      .post(url, {
        userName: userName,
        password: password,
      })
      .then((res) => {
        localStorage.token = res.data.token;
        localStorage.userName = res.data.userName;
        props.setIsLoggedIn(true);
      })
      .catch((err) => {
        console.log(err);
        handleError(err);
      });
  };
  return (
    <div id="main-flex">
      <div id="inner-flex">
        <form id="login-form" onSubmit={(e) => login(e)}>
          {" "}
          <input
            name="userName"
            className="user-details"
            placeholder="user-name"
            type={"text"}
            autoFocus
          ></input>
          <input
            name="password"
            className="user-details"
            placeholder="password"
            type={"password"}
          ></input>
          <input className="submit-btn" type={"submit"}></input>
          {error ? <span id="error">{error}</span> : null}
        </form>
      </div>
    </div>
  );
}

export default Login;
