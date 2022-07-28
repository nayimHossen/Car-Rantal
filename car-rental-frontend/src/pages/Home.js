import React from "react";
import { Col, Container, Row } from "reactstrap";
import carData from "../assets/data/carData";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import BecomeDriverSection from "../components/UI/BecomeDriverSection";
import BlogList from "../components/UI/BlogList";
import CarItem from "../components/UI/CarItem";
import FindCarForm from "../components/UI/FindCarForm";
import HeroSlider from "../components/UI/HeroSlider";
import ServicesList from "../components/UI/ServicesList";
import Testimonial from "../components/UI/Testimonial";

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

    {/* =========== car offer section ============= */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="text-center mb-5">
            <h6 className="section__subtitle">Come with</h6>
            <h2 className="section__title">Hot Offers</h2>
          </Col>

          {carData.slice(0, 6).map((item) => (
            <CarItem item={item} key={item.id} />
          ))}
        </Row>
      </Container>
    </section>
    {/* =========== become a driver section ============ */}
    <BecomeDriverSection />

    {/* =========== testimonial section =========== */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-4 text-center">
            <h6 className="section__subtitle">Our clients says</h6>
            <h2 className="section__title">Testimonials</h2>
          </Col>

          <Testimonial />
        </Row>
      </Container>
    </section>

    {/* =============== blog section =========== */}
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5 text-center">
            <h6 className="section__subtitle">Explore our blogs</h6>
            <h2 className="section__title">Latest Blogs</h2>
          </Col>

          <BlogList />
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default Home;
