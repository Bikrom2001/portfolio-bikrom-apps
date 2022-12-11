import React from "react";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Email from "./Email";
import Expernices from "./Expernices";
import MoreProject from "./MoreProject";
import Project from "./Project";
import SocailLogin from "./SocailLogin";

const Home = () => {
  return (
   <div>
      <Banner></Banner>
      <About></About>
      <Expernices></Expernices>
      <Project></Project>
      <MoreProject></MoreProject>
      <Contact></Contact>
      <SocailLogin></SocailLogin>
      <Email></Email>
      
   </div>
  );
};

export default Home;
