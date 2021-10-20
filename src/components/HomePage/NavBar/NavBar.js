import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hook/useAuth";
// import useFirebase from "../../../Hook/useFirebase";
import logo from "../../../images/logo/logo.png";
import "./NavBar.css";

const NavBar = () => {
  const { handleLogout, user } = useAuth();

  return (
    <div style={{ backgroundColor: "#3A559A" }} className="sticky-md-top p-2">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <div className="container-fluid row">
            <div className="col-md-3 d-flex">
              <img
                src={logo}
                style={{ height: "60px", width: "130px" }}
                className="mt-1"
                alt=""
              />
              <h1
                style={{
                  fontSize: "2rem",
                  color: "#47BEE5",
                  marginLeft: "-20px",
                }}
                className="navbar-brand fw-bolder mt-1"
              >
                Mediciva
              </h1>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="col-md-9 fs-5 navbar-nav ms-auto">
                <Link
                  to="/home"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  <li>Home</li>
                </Link>
                <Link
                  to="/about"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  About
                </Link>
                <Link
                  to="/departments"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  Departments
                </Link>

                <Link
                  to="/doctors"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  Doctors
                </Link>

                <Link
                  to="blog"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  Blog
                </Link>

                <Link
                  to="/contact"
                  className="nav-link fw-bolder mt-2"
                  style={{ color: "rgb(108, 218, 218)" }}
                >
                  Contact
                </Link>

                {user.email ? (
                  <button
                    onClick={handleLogout}
                    type="button"
                    className="btn btn-info fw-bold mt-1 ms-1"
                  >
                    Log Out<i class="fas fa-sign-out-alt ms-2 fw-bold"></i>
                  </button>
                ) : (
                  <Link to="/login">
                    <button
                      type="button"
                      className="btn btn-info fw-bold mt-3 ms-1"
                    >
                      Log In<i className="fas fa-sign-in-alt ms-2 fw-bold"></i>
                    </button>
                  </Link>
                )}
                <p style={{ marginTop: "17px" }} className="ms-2 fw-bold">
                  Signed in as:
                  <a href="#login" className="text-info ms-1">
                    {user.displayName}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
