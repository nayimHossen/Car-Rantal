import React from "react";
import { Col, Container, Row } from "reactstrap";
import "../../styles/Become-driver.css";

import driverImg from "../../assets/all-images/toyota-offer-2.png";

const BecomeDriverSection = () => (
  <section className="become-driver">
    <Container>
      <Row>
        <Col lg="6" md="6" sm="12" className="become-driver-img">
          <img src={driverImg} alt="" className="w-100" />
        </Col>

        <Col lg="6" md="6" sm="12">
          <h2 className="section-title become-driver-title">
            Do You Want to Earn With Us? So Do not Be Late
          </h2>

          <button className="btn become-driver-btn mt-4">
            Become a Driver
          </button>
        </Col>
      </Row>
    </Container>
  </section>
);

export default BecomeDriverSection;
