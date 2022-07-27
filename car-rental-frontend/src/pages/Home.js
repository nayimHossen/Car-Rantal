import React from "react";
import Helmet from "../components/Helmet/Helmet";
import HeroSlider from "../components/UI/HeroSlider";

const Home = () => (
  <Helmet title="Home">
    <section className="p-0 hero-slider-section">
      <HeroSlider />
    </section>
  </Helmet>
);

export default Home;
