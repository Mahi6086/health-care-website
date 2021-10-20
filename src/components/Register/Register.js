import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hook/useAuth";
import logo from "../../images/logo/logo3.png";
const Register = () => {
  const { handleGoogleLogin, user, handleUserRegister } = useAuth();

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
  return (
    <div className="container mt-5">
      <div className="text-center">
        <div className="row ">
          <div className="col-12 justify-content-center align-items-center ">
            <img className="login-img" src={logo} alt="" />
            <h1
              style={{
                fontSize: "3rem",
                color: "#47BEE5",
              }}
              className="navbar-brand fw-bolder mt-0"
            >
              Mediciva
            </h1>
          </div>
          <br />
          <div className="border border-2 border-info shadow rounded-3">
            <h1 className="mt-3 fw-bolder">Create an Account</h1>
            <br />
            <div className="row ">
              <div className="col col-12 col-md-12 mb-4">
                <input
                  onChange={hanldeEmail}
                  type="text"
                  className="form-control p-2 border border-2 border-info"
                  placeholder="Your E-mail"
                  aria-label="Email"
                  required
                />
              </div>
              <br />
              <div className="col col-12 col-md-12 ">
                <input
                  onChange={hanldePassword}
                  type="password"
                  className="form-control p-2 border border-2 border-info"
                  placeholder="Your Password"
                  aria-label="Password"
                  required
                />
              </div>
              <div className="text-danger text-start mt-1 fw-bolder">
                {erro}
              </div>
            </div>
            <br />
            <div className="col-12 ">
              {/* <button
                  onClick={handleLogin}
                  type="button"
                  className="btn btn-info fw-bold ps-3 pe-3"
                >
                  Log In
                  <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
                </button> */}

              <button
                onClick={handleRegister}
                type="button"
                className="btn btn-info fw-bold ms-2"
              >
                Register<i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
              </button>
            </div>
            {/* <div className="text-info mt-2">--------------or--------------</div>
            <div className="col-12 mt-3">
              <button
                onClick={handleGoogleLogin}
                type="button"
                className="btn btn-info fw-bold ps-3 pe-3"
              >
                Google LogIn
                <i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
              </button>
            </div> */}
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

export default Register;
