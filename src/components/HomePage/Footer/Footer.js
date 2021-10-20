import {
  faFacebook,
  faInstagram,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import {
  faMapMarkerAlt,
  faPhoneSquareAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import FooterQuickLinks from "../FooterQuickLinks/FooterQuickLinks";
import "./Footer.css";
const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#212529" }} className="py-5 mt-5">
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center text-white-50">
          <div className="col-md-3 mt-5">
            <h4 className="text-info">Connect With Us</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="d-flex">
                <i className="fas fa-phone-alt  mt-2"></i>
                <p className="ms-2 fw-bolder">+880 1234 567 890</p>
              </li>
              <li className="d-flex">
                <i className="fas fa-map-marker-alt  mt-2"></i>
                <p className="ms-2 fw-bolder">
                  H#000(1st floor), Road #01, <br />
                  Rumpura, Dhaka.
                </p>
              </li>
              <li className="d-flex">
                <i className="fas fa-envelope mt-2"></i>
                <p className="ms-2 fw-bolder">mediciva@gmail.com</p>
              </li>
            </ul>
          </div>
          <div className="col-md-3 mt-5">
            <h4 className="text-info">Quick Links</h4>
            <div>
              <FooterQuickLinks></FooterQuickLinks>
            </div>
          </div>
          <div className="col-md-3 mt-5">
            <h4 className="text-info">Departments</h4>
            <ul style={{ listStyle: "none", marginLeft: "-30px" }}>
              <li className="logo">Cardiology</li>
              <li className="logo">Gastroenteriogy</li>
              <li className="logo">Neurology</li>
              <li className="logo">Orthopedics</li>
              <li className="logo">Medicine</li>
              <li className="logo">Dental</li>
            </ul>
          </div>
          <div className="col-md-3 mt-3">
            <h4 className="text-info">Opening Hours</h4>
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
          <div>
            <hr className="" />
            <p className="text-center">
              All rights reserved Copyright © 2021 Mediciva by{" "}
              <span className="text-info">Mahi Hasan</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
