import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterQuickLinks from "../FooterQuickLinks/FooterQuickLinks";
import "./Footer.css";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#212529" }} className="py-5 mt-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white-50">
          <div className="col-md-3 d-flex">
            <FontAwesomeIcon
              style={{ color: "#4dc9f3" }}
              icon={faMapMarkerAlt}
              style={{ fontSize: "40px" }}
            />
            <p className="ms-2 fw-bolder">
              H#000(1st floor), Road #01, <br />
              Rumpura, Dhaka.
            </p>
          </div>
          <div className="col-md-3 mt-5">
            <h4>Quick Links</h4>
            <div>
              <FooterQuickLinks></FooterQuickLinks>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <h4>Departments</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">Cardiology</li>
              <li className="logo">Gastroenteriogy</li>
              <li className="logo">Neurology</li>
              <li className="logo">Orthopedics</li>
              <li className="logo">Medicine</li>
              <li className="logo">Dental</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Opening Hours</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li>Monday-Friday: 06:00-21:00</li>
              <li>Saturday: 09:00-18:00</li>
              <li>Sunday: 15:00-21:00</li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
            <div
              className="d-flex justify-content-between"
              style={{ fontSize: "1.5em" }}
            >
              <div>
                <FontAwesomeIcon className="icon" icon={faFacebook} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faInstagram} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faTwitter} />
              </div>
              <div>
                <FontAwesomeIcon className="icon" icon={faWhatsapp} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
