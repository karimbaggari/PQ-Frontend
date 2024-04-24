import React from 'react'
import {
    Navbar,
    Header,
    Billing,
    CardDeal,
    Business,
    Clients,
    CTA,
    Stats,
    Footer,
    Testimonials,
    StarsCanvas,
  } from "../components";
import Security from '../components/Services/Security';
function Services() {
  return (
    <div className="relative z-0 bg-primary">
    <Navbar />
    <StarsCanvas />
    <div className="relative z-0">
      <Header />
      <StarsCanvas />
    </div>
    <StarsCanvas />
    <Security />
  </div>
  )
}

export default Services
