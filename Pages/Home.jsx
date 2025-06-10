import React from "react";
import Advertisement from "../src/Container/Home/Advertisement";
import Services from "../src/Container/Home/Services";
import SpecialistsCarousel from "../src/Container/Home/Specialists";

function Home() {
  return (
    <>
      <Advertisement />
      <Services />
      <SpecialistsCarousel />
    </>
  );
}

export default Home;
