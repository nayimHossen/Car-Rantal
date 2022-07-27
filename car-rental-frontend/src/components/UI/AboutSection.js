import React from "react";
import { Col, Container, Row } from "reactstrap";
import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
import "../../styles/About-section.css";

const AboutSection = ({ aboutClass }) => (
  <section
    className="about-section"
    style={
      aboutClass === "aboutPage"
        ? { marginTop: "0px" }
        : { marginTop: "280px" }
    }
  >
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="about-section-content">
            <h4 className="section-subtitle">About Us</h4>
            <h2 className="section-title">Welcome to car rent service</h2>
            <p className="section-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptatum blanditiis esse accusantium dignissimos labore
              laborum. Veniam, corporis mollitia temporibus, in quaerat vero
              deleniti amet dolorem repudiandae, pariatur nam dolore! Impedit
              neque sit ad temporibus quam similique dolor ipsam praesentium
              sunt.
            </p>

            <div className="about-section-item d-flex align-items-center">
              <p className="section-description d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line" />
                {" "}
                Lorem ipsum dolor sit
                amet.
              </p>

              <p className="section-description d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line" />
                {" "}
                Lorem ipsum dolor sit
                amet.
              </p>
            </div>

            <div className="about-section-item d-flex align-items-center">
              <p className="section-description d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line" />
                {" "}
                Lorem ipsum dolor sit
                amet.
              </p>

              <p className="section__description d-flex align-items-center gap-2">
                <i className="ri-checkbox-circle-line" />
                {" "}
                Lorem ipsum dolor sit
                amet.
              </p>
            </div>
          </div>
        </Col>

        <Col lg="6" md="6">
          <div className="about__img">
            <img src={aboutImg} alt="" className="w-100" />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutSection;
