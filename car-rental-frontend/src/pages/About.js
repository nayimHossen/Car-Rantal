import React from "react";

import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import CommonSection from "../components/UI/CommonSection";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/About.css";

const About = () => (
  <Helmet title="About">
    <CommonSection title="About Us" />
    <AboutSection aboutClass="aboutPage" />

    <section className="about-page-section">
      <Container>
        <Row>
          <Col lg="6" md="6" sm="12">
            <div className="about-page-img">
              <img src={driveImg} alt="" className="w-100 rounded-3" />
            </div>
          </Col>

          <Col lg="6" md="6" sm="12">
            <div className="about-page-content">
              <h2 className="section-title">
                We Are Committed To Provide Safe Ride Solutions
              </h2>

              <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <p className="section-description">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Eveniet veniam assumenda aperiam accusantium ex autem
                perferendis repellendus nostrum delectus. Nemo et dolore est
                tempore rem minima adipisci magni dolorum ipsam.
              </p>

              <div className=" d-flex align-items-center gap-3 mt-4">
                <span className="fs-4">
                  <i className="ri-phone-line" />
                </span>

                <div>
                  <h6 className="section-subtitle">Need Any Help?</h6>
                  <h4>+00123456789</h4>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>

    <BecomeDriverSection />

    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section-subtitle">Experts</h6>
            <h2 className="section-title">Our Members</h2>
          </Col>
          <OurMembers />
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default About;
