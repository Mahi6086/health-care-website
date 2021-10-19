import { faBlogger } from "@fortawesome/free-brands-svg-icons";
import {
  faCalendarCheck,
  faCommentDots,
  faFileContract,
  faHandPointer,
  faHome,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import "./FooterQuickLinks.css";
const FooterQuickLinks = () => {
  return (
    <div>
      <ul className="list-unstyled text-white">
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faHome} />
            <span className="logo">Home</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faPlus} />{" "}
            <span className="logo"> Services</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faBlogger} />{" "}
            <span className="logo"> Blog</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faFileContract} />{" "}
            <span className="logo"> Contact</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faCalendarCheck} />{" "}
            <span className="logo">Apointment</span>
          </Link>
        </li>
        <li>
          <Link
            to="/"
            style={{ textDecoration: "none" }}
            className="text-white-50"
          >
            <FontAwesomeIcon className="logo" icon={faCommentDots} />{" "}
            <span className="logo">Feedback</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default FooterQuickLinks;
