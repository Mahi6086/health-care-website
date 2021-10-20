import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="banner-container ">
      <div className="">
        <div className="row d-flex banner align-items-center justify-content-center">
          <div className="col-md-6 heading text-sm-center  text-lg-start">
            <h2
              /* style={{ color: "#3A559A" }} */ className="fw-bolder text-black fs-1 mt-3"
            >
              Health is everything
            </h2>
            <h1 className="title">
              <span className="text-info">Health</span> Should Be <br /> Your{" "}
              <span className="text-info">Top Priority</span>
            </h1>
            <p className="text-black fw-bolder mt-3 fs-5">
              Being healthy is important because it can help a person have a
              stronger heart,
              <br /> better muscles, stronger bones, a sense of well-being and a
              better social life. <br /> Eating right and exercising the correct
              amount will lead to overall better health.
            </p>
            <button className="mt-3 mb-5 about-btn rounded-pill">
              Start Now
            </button>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
