import React from "react";
import { Link } from "react-router-dom";
import {
  Col, Container, Form, FormGroup, Input, Row
} from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/Contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => (
  <Helmet title="Contact">
    <CommonSection title="Contact" />
    <section>
      <Container>
        <Row>
          <Col lg="7" md="7">
            <h6 className="fw-bold mb-4">Get In Touch</h6>

            <Form>
              <FormGroup className="contact-form">
                <Input placeholder="Your Name" type="text" />
              </FormGroup>
              <FormGroup className="contact-form">
                <Input placeholder="Email" type="email" />
              </FormGroup>
              <FormGroup className="contact-form">
                <textarea
                  rows="5"
                  placeholder="Message"
                  className="textarea"
                />
              </FormGroup>

              <button className=" contact-btn" type="submit">
                Send Message
              </button>
            </Form>
          </Col>

          <Col lg="5" md="5">
            <div className="contact-info">
              <h6 className="fw-bold">Contact Information</h6>
              <p className="section-description mb-0">
                123 ZindaBazar, Sylhet, Bangladesh
              </p>
              <div className=" d-flex align-items-center gap-2">
                <h6 className="fs-6 mb-0">Phone:</h6>
                <p className="section-description mb-0">+88683896366</p>
              </div>

              <div className=" d-flex align-items-center gap-2">
                <h6 className="mb-0 fs-6">Email:</h6>
                <p className="section-description mb-0">example@gmail.com</p>
              </div>

              <h6 className="fw-bold mt-4">Follow Us</h6>

              <div className=" d-flex align-items-center gap-4 mt-3">
                {socialLinks.map((item, index) => (
                  <Link
                    to={item.url}
                    key={index}
                    className="social-link-icon"
                  >
                    <i className={item.icon} />
                  </Link>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default Contact;
