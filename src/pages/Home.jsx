// Home.jsx

import React from "react";
import {
  Navbar,
  Header,
  Billing,
  CardDeal,
  Business,
  CTA,
  Footer,
  Testimonials,
  StarsCanvas,
} from "../components";
import styles from "../style";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <StarsCanvas />
      <div className="relative z-0">
        <Header />
        <StarsCanvas />
      </div>
      <div className={`bg-transparent ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          {/* <Stats /> */}
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <CTA />
          <Footer />
        </div>
      </div>
      <StarsCanvas />
    </div>
  );
};

export default Home;
