import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 heading">
            <h2 className="fw-bolder">
              <span style={{ color: "#62b7d3" }}>Health</span> is everything
            </h2>
            <h1 className="title">
              Health Should Be <br /> Your Top Priority
            </h1>
            <p style={{ textAlign: "justify" }} className="text-white-50 mt-3">
              Being healthy is important because it can help a person have a
              stronger heart, better muscles, <br /> stronger bones, a sense of
              well-being and a better social life. Eating right and exercising{" "}
              the <br />
              correct amount will lead to overall better health.
            </p>
            <button className="mt-3 about-btn">About Us</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
