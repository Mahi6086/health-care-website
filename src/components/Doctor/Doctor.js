import React from "react";
import "./Doctor.css";
const Doctor = (props) => {
  const { name, img, specialist } = props.doctor;
  return (
    <div>
      <div className="col">
        <div className="card h-100 p-3 shadow service">
          <img
            src={img}
            className="card-img-top rounded-3 img-fluid mx-auto"
            alt="..."
          />
          <div className="card-body text-center">
            <h3 className="card-title fw-bolder ">{name}</h3>
            <h5 className="card-text text-black-50">{specialist}</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
