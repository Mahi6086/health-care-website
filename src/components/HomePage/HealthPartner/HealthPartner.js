import React from "react";
import icon from "../../../images/icon/open-24-hours.png";
import icon1 from "../../../images/icon/5639371.png";
import icon2 from "../../../images/icon/5303389.png";
const HealthPartner = () => {
  return (
    <div className="container-md mt-5">
      <div>
        <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
          How we mediciva
        </h4>
        <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
          Your Health Partner
        </h1>
        <p className="text-black-50 text-center mb-4">
          We give patients Special care, 24/7 servies & ensure to give top
          qualitiful doctors. <br /> patients are traditionally those with
          developmental.
          {/* impairments although we consider this also to include any child or
          adolescent who may require an altered approach to their dental care,
          for example a child with an anxiety disorder. */}
        </p>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
            <div className="card h-100 p-4 shadow">
              <img src={icon} className="card-img-top w-25 mx-auto" alt="..." />
              <div className="card-body text-center">
                <h4 className="card-title fw-bolder ">24/7 Services</h4>
                <p className="card-text text-black-50">
                  Emergencies can happen anytime, at Specialist Hospital, we
                  have ensured that we are available for you during those times.
                  Our state of the art equipments, highly trained doctors
                  specialised in trauma care are able to respond to emergency in
                  a scientific and safe way.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-4 h-100 shadow">
              <img
                src={icon1}
                className="card-img-top w-25 mx-auto"
                alt="..."
              />
              <div className="card-body text-center ">
                <h4 className="card-title fw-bolder">Special Care</h4>
                <p className="card-text text-black-50">
                  About Special CareAbout Special Care Special Care serves
                  children, with and without special needs, through year-round,
                  high-quality early childhood education, specialized care and
                  on-site therapeutic services. Our mission is to nurture all
                  children needs in safe, inclusive.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card p-4 h-100 shadow ">
              <img
                src={icon2}
                className="card-img-top w-25 mx-auto"
                alt="..."
              />
              <div className="card-body text-center ">
                <h4 className="card-title fw-bolder">Quality Doctors</h4>
                <p className="card-text text-black-50">
                  A doctor needs to make sure that her patients get recommended
                  screening tests, that their questions are answered, and that
                  patients have a clear plan of action upon leaving her office,”
                  says Dr. Doggett. “She must be vigilant about following up on
                  any tests that are done and communicating those results.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthPartner;
