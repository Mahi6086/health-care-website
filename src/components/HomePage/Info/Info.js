import React from "react";
import "./Info.css";
const Info = () => {
  return (
    <div className="info">
      <div className="">
        <div style={{ color: "#3A559A" }} className="row">
          <div className="cart bg-light col col-sm-12 col-lg-3 text-center border border-5 mx-4 mb-3">
            <h1 className="fw-bolder">20</h1>
            <h2>Departments</h2>
          </div>
          <div className="cart bg-light col col-sm-12 col-lg-3 text-center border border-5 mx-4 mb-3">
            <h1 className="fw-bolder">150</h1>
            <h2>Cabins</h2>
          </div>
          <div className="cart bg-light col col-sm-12 col-lg-3 text-center border border-5 mx-4 mb-3">
            <h1 className="fw-bolder">300</h1>
            <h2>Doctors</h2>
          </div>
          <div className="cart bg-light col col-sm-12 col-lg-3 text-center border border-5 mx-4 mb-3">
            <h1 className="fw-bolder">
              50K<span className="fw-bolder">+</span>
            </h1>
            <h2>Patients</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
