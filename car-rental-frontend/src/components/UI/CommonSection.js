import { Container } from "reactstrap";
import "../../styles/Common-section.css";

const CommonSection = ({ title }) => (
  <section className="common-section mb-5">
    <Container className="text-center">
      <h1 className="text-light">{title}</h1>
    </Container>
  </section>
);

export default CommonSection;
