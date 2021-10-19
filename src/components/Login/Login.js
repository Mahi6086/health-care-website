import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
// import useFirebase from "../../Hook/useFirebase";
import logo from "../../images/logo/logo.png";

const Login = () => {
  const { handleGoogleLogin, user, handleUserRegister, handleUserLogin } =
    useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [erro, setErro] = useState("");

  const hanldeEmail = (e) => {
    setEmail(e.target.value);
  };
  const hanldePassword = (e) => {
    setPassword(e.target.value);
  };

  // console.log(email, password);

  const handleRegister = (e) => {
    e.preventDefault();
    handleUserRegister(email, password);

    if (password.length < 6) {
      setErro("Password must be at least 6 characters long");
      return;
    }
  };

  const handleLogin = () => {
    handleUserLogin(email, password);
  };

  return (
    <div className="container mt-5">
      <div className="text-center mt-5">
        <div className="row gy-3">
          <div className="col-12 d-flex justify-content-center align-items-center w-25 mx-auto">
            <img className="w-25" src={logo} alt="" />
            <h1
              style={{
                fontSize: "3rem",
                color: "#47BEE5",
              }}
              className="navbar-brand fw-bolder mt-1 "
            >
              Mediciva
            </h1>
          </div>
          <br />
          <div className="border border-2 border-info shadow rounded-3">
            <h1 className="mt-3 fw-bolder">Signin or Create an Account</h1>
            <br />
            <div className="row ">
              <div className="col col-12 col-md-6 ">
                <input
                  onClick={hanldeEmail}
                  type="text"
                  className="form-control p-2 border border-2 border-info"
                  placeholder="Your Email"
                  aria-label="Email"
                />
              </div>
              <br />
              <div className="col col-12 col-md-6 ">
                <input
                  onClick={hanldePassword}
                  type="password"
                  className="form-control p-2 border border-2 border-info"
                  placeholder="Your Password"
                  aria-label="Password"
                />
              </div>
            </div>
            <br />
            <div className="col-12 ">
              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-info fw-bold ps-3 pe-3"
              >
                Log In<i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
              </button>

              <button
                onClick={handleRegister}
                type="button"
                className="btn btn-info fw-bold ms-2"
              >
                Register<i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
              </button>
            </div>
            <div className="text-info mt-2">--------------or--------------</div>
            <div className="col-12 mt-3">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-info fw-bold ps-3 pe-3"
              >
                Google LogIn
                <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
              </button>
            </div>
            <div>
              <br />
              <Link
                style={{
                  color: "#FF246D",
                  textDecoration: "none",
                }}
                to="/signup"
                className="text-center"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
