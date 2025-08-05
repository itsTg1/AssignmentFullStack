import React from "react";
import Navbar from "../Component/Navbar";
import Hero from "../Component/Hero";
import Stats from '../Component/Stats';

import Testimonials from "../Component/Testimonials";
import Footer from "../Component/Footer";
import OurStory from "../Component/OurStory";

export default function LandingPage() {
  return (
    <div className=" rounded-2xl overflow-hidden shadow-xl bg-[#f6fafe] border-2 border-[#eaedfa]">
      <Navbar />
      <Hero />
      <Stats />
      <OurStory />
      <Testimonials />
     <Footer/>
    </div>
  );
}
