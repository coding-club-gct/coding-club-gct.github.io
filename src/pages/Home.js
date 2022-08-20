import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import About from "../components/About";
import VisionMission from "../components/Vision_Mission";

const Home = () => {
  return (
    <>
      <NavBar id="home" />
      <div data-aos="fade-up" data-aos-duration="1000">
        <Head />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <About />
      </div>
      <div data-aos="fade-up" data-aos-duration="1000">
        <VisionMission />
      </div>
    </>
  );
};

export default Home;
