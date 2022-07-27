import React, { useRef } from "react";

import { Link, NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "../../styles/Header.css";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },
  {
    path: "/cars",
    display: "Cars",
  },

  {
    path: "/blogs",
    display: "Blog",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

function Header() {
  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");

  return (
    <header>
      {/* =============== header top =========== */}
      <div className="header-top">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              <div className="header-top-left">
                <span>Need Help?</span>
                <span className="header-top-help">
                  <i className="ri-phone-fill" />
                  +0937490340
                </span>
              </div>
            </Col>

            <Col lg="6" md="6" sm="6">
              <div className="header-top-right d-flex justify-content-end aligh-items-center gap-3">
                <Link to="/login" className="d-flex aligh-items-center gap-1">
                  <i className="ri-login-circle-line" />
                  Login
                </Link>

                <Link to="/register" className="d-flex aligh-items-center gap-1">
                  <i className="ri-user-line" />
                  Register
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* =============== header middle =========== */}
      <div className="header-middle">
        <Container>
          <Row>
            <Col lg="4" md="3" sm="4">
              <div className="logo">
                <h1>
                  <Link to="/home" className=" d-flex align-items-center gap-2">
                    <i className="ri-car-line" />
                    <span>
                      Rent Car
                      {" "}
                      <br />
                      {" "}
                      Service
                    </span>
                  </Link>
                </h1>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-earth-line" />
                </span>
                <div className="header-location-content">
                  <h4>Bangladesh</h4>
                  <h6>Dhaka City, Bangladesh</h6>
                </div>
              </div>
            </Col>

            <Col lg="3" md="3" sm="4">
              <div className="header-location d-flex align-items-center gap-2">
                <span>
                  <i className="ri-time-line" />
                </span>
                <div className="header-location-content">
                  <h4>Sunday to Friday</h4>
                  <h6>10am - 7pm</h6>
                </div>
              </div>
            </Col>

            <Col
              lg="2"
              md="3"
              sm="0"
              className=" d-flex align-items-center justify-content-end "
            >
              <button className="header-btn btn ">
                <Link to="/contact">
                  <i className="ri-phone-line" />
                  {" "}
                  Request a call
                </Link>
              </button>
            </Col>
          </Row>
        </Container>
      </div>

      {/* ========== main navigation =========== */}

      <div className="main-navbar">
        <Container>
          <div className="navigation-wrapper d-flex align-items-center justify-content-between">
            <span className="mobile-menu">
              <i className="ri-menu-line" onClick={toggleMenu} />
            </span>

            <div className="navigation" ref={menuRef} onClick={toggleMenu}>
              <div className="menu">
                {navLinks.map((item, index) => (
                  <NavLink
                    to={item.path}
                    className={(navClass) => (navClass.isActive ? "nav-active nav-item" : "nav-item")}
                    key={index}
                  >
                    {item.display}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="nav-right">
              <div className="search-box">
                <input type="text" placeholder="Search" />
                <span>
                  <i className="ri-search-line" />
                </span>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </header>
  );
}

export default Header;
