import React from "react";
import about from "../../images/about/doctor-standing-with-folder-stethoscope_1291-16.jpg";
const About = () => {
  return (
    <div className="container mt-5">
      <div>
        <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
          Why Choose Us
        </h4>
        <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
          We Care About Our Patients <br />
          With Top Priority
        </h1>
        <p className="text-black-50 text-center mb-4">
          We give services for patients Expericened Doctor, Latest Technology &{" "}
          <br /> ensure to give Special Care patients are traditionally those
          with developmental.
        </p>
      </div>
      <div className="row">
        <div className="col col-sm-12 col-md-6">
          <div className="accordion" id="accordionExample">
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingOne">
                <button
                  className="accordion-button text-info fw-bolder"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  How can i get the best service from Mediciva?
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                aria-labelledby="headingOne"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body text-black-50">
                  <strong>
                    Service Excellence at Mediciva Hospitals is must do
                    imperative.
                  </strong>{" "}
                  Mediciva Hospitals benchmarks with the best among the world’s
                  service organizations to create a culture of Patient
                  Engagement with a service vision of “Offering Care beyond
                  Compare”. Our biggest asset is our engaged workforce that
                  takes pride in their work and ensures that every transaction
                  is converted into memorable experience for our Patients.
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingTwo">
                <button
                  className="accordion-button collapsed text-info fw-bolder"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  What you do in a day in Mediciva?
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                aria-labelledby="headingTwo"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Mediciva Hospitals benchmarks with the best among the world’s
                  service organizations to create a culture of Patient
                  Engagement with a service vision of “Offering Care beyond
                  Compare”. Our biggest asset is our engaged workforce that
                  takes pride in their work and ensures that every transaction
                  is converted into memorable experience for our Patients.
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-info fw-bolder"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can i contact a doctor during Coronavirus?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Mediciva Hospitals benchmarks with the best among the world’s
                  service organizations to create a culture of Patient
                  Engagement with a service vision of “Offering Care beyond
                  Compare”. Our biggest asset is our engaged workforce that
                  takes pride in their work and ensures that every transaction
                  is converted into memorable experience for our Patients.
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-info fw-bolder"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can i consult a doctor online for free?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Mediciva Hospitals benchmarks with the best among the world’s
                  service organizations to create a culture of Patient
                  Engagement with a service vision of “Offering Care beyond
                  Compare”. Our biggest asset is our engaged workforce that
                  takes pride in their work and ensures that every transaction
                  is converted into memorable experience for our Patients.
                  overflow.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header" id="headingThree">
                <button
                  className="accordion-button collapsed text-info fw-bolder"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  How can i get discount any services?
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse text-info fw-bolder"
                aria-labelledby="headingThree"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Mediciva Hospitals benchmarks with the best among the world’s
                  service organizations to create a culture of Patient
                  Engagement with a service vision of “Offering Care beyond
                  Compare”. Our biggest asset is our engaged workforce that
                  takes pride in their work and ensures that every transaction
                  is converted into memorable experience for our Patients.
                  overflow.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col col-sm-12 col-md-6">
          <img className="h-100 ms-lg-3 rounded-3 w-auto" src={about} alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
