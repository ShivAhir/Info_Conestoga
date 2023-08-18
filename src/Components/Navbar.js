import React from "react";
import { Link } from "react-scroll";

const Navbar = ({ setActiveSection }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link
                to="about"
                spy="true"
                smooth="true"
                offset={-70}
                duration={500}
                className="nav-link btn btn-link cursor-pointer"
              >
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="news"
                spy="true"
                smooth="true"
                offset={-70}
                duration={500}
                className="nav-link btn btn-link cursor-pointer"
              >
                News
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy="true"
                smooth="true"
                offset={-70}
                duration={500}
                className="nav-link btn btn-link cursor-pointer"
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="VisitUs"
                spy="true"
                smooth="true"
                offset={-70}
                duration={500}
                className="nav-link btn btn-link cursor-pointer"
              >
                Visit Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
