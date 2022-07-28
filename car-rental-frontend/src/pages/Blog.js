import React from "react";
import { Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import BlogList from "../components/UI/BlogList";
import CommonSection from "../components/UI/CommonSection";

const Blog = () => (
  <Helmet title="Blogs">
    <CommonSection title="Blogs" />
    <section>
      <Container>
        <Row>
          <BlogList />
          <BlogList />
        </Row>
      </Container>
    </section>
  </Helmet>
);

export default Blog;
