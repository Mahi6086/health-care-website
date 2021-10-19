import React from "react";
import contact1 from "../../images/contact/placeholder.png";
import contact2 from "../../images/contact/phone-call.png";
import contact3 from "../../images/contact/mail.png";
const Contact = () => {
  return (
    <div>
      <div>{/* map */}</div>
      <div className="container-md mt-5">
        <div>
          <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
            We are here to help
          </h4>
          <h1 style={{ color: "#212121" }} className="text-center mb-3 fw-bold">
            Reach Us Anyway
          </h1>
          <p className="text-black-50 text-center mb-4">
            For your best services you can call to mediciva or email to mediciva
            or come to our mediciva location. <br /> we ensure to give top
            qualitiful doctors. patients are traditionally those with
            developmental.
            {/* impairments although we consider this also to include any child or
          adolescent who may require an altered approach to their dental care,
          for example a child with an anxiety disorder. */}
          </p>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card h-100 p-3 shadow">
                <img
                  src={contact1}
                  className="card-img-top w-25 mx-auto"
                  alt="..."
                />
                <div className="card-body text-center">
                  <h4 className="card-title fw-bolder ">Location</h4>
                  <p className="card-text text-black-50 mb-2">
                    20,Bordeshi,Amin Bazar <br />
                    Rumpura,Dhaka
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-3 h-100 shadow">
                <img
                  src={contact2}
                  className="card-img-top w-25 mx-auto"
                  alt="..."
                />
                <div className="card-body text-center ">
                  <h4 className="card-title fw-bolder">Phone No</h4>
                  <p className="card-text text-black-50 mb-2">
                    +880 1234 567 890
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card p-3 h-100 shadow ">
                <img
                  src={contact3}
                  className="card-img-top w-25 mx-auto"
                  alt="..."
                />
                <div className="card-body text-center ">
                  <h4 className="card-title fw-bolder">Address</h4>
                  <p className="card-text text-black-50 mb-2">
                    Hello@mediciva.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 mb-5">
          {/* form */}
          <div>
            <h4 style={{ color: "#3A559A" }} className="text-center fw-bold">
              We are available
            </h4>
            <h1
              style={{ color: "#212121" }}
              className="text-center mb-3 fw-bold"
            >
              Write Us Anytime You Want
            </h1>
          </div>
          <form className="row g-3 mt-3">
            <div className="col-md-6">
              <input
                type="text"
                className="form-control p-3"
                placeholder="First name*"
                aria-label="First name"
              />
            </div>
            <div className="col-md-6 ">
              <input
                type="text"
                className="form-control p-3"
                placeholder="Last name*"
                aria-label="Last name"
              />
            </div>
            <div className="col-md-6">
              {/* <label for="inputEmail4" className="form-label ">
                Email
              </label> */}
              <input
                type="email"
                className="form-control p-3"
                placeholder=" Your email*"
                id="inputEmail4"
              />
            </div>
            <div className="col-md-6">
              {/* <label for="inputPassword4" className="form-label p-3">
                Password
              </label> */}
              <input
                type="password"
                className="form-control p-3"
                placeholder=" Your password*"
                id="inputPassword4"
              />
            </div>
            <div className="col-12">
              {/* <label for="inputAddress" className="form-label p-3">
                Address
              </label> */}
              <input
                type="text"
                className="form-control p-3"
                id="inputAddress"
                placeholder="Address"
              />
            </div>
            <div className="form-floating col-12">
              <textarea
                className="form-control p-3 text-black-50"
                placeholder="Write your comment here*"
                id="floatingTextarea2"
                style={{ height: "100px" }}
              ></textarea>
              <label for="floatingTextarea2" className="text-black-50">
                Write your comment here*
              </label>
            </div>
            <div className="col-12">
              <button
                type="submit"
                className="btn btn-info text-light rounded-pill ps-3 pe-3 pt-3 pb-3 fw-bold"
              >
                SUBMIT MESSAGE
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
