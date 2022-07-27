import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import FindCarForm from "../components/UI/FindCarForm";
import HeroSlider from "../components/UI/HeroSlider";
import ServicesList from "../components/UI/ServicesList";

const Home = () => (
  <Helmet title="Home">
    {/* ============= hero section =========== */}
    <section className="p-0 hero-slider-section">
      <HeroSlider />

      <div className="hero-form">
        <Container>
          <Row className="form-row">
            <Col lg="4" md="4">
              <div className="find-cars-left">
                <h2>Find your best car here</h2>
              </div>
            </Col>

            <Col lg="8" md="8" sm="12">
              <FindCarForm />
            </Col>
          </Row>
        </Container>
      </div>
    </section>
    {/* =========== about section ================ */}
    <AboutSection />

    {/* ========== services section ============ */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section__subtitle">See our</h6>
            <h2 className="section__title">Popular Services</h2>
          </Col>

          <ServicesList />
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default Home;
