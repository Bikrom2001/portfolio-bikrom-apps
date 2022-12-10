import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Expernices from "./Expernices";
import Project from "./Project";

const Home = () => {
  return (
   <div>
      <Banner></Banner>
      <About></About>
      <Expernices></Expernices>
      <Project></Project>
      <Contact></Contact>
   </div>
  );
};

export default Home;
