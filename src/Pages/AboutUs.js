import React from "react";
import AboutUsInfo from "../Components/AboutUsInfo";
import Categories from "../Components/Categories";
import Features from "../Components/Features";
import HeaderBanner from "../Components/HeaderBanner";
import OurPartners from "../Components/OurPartners";
import OurTeam from "../Components/OurTeam";
import img from "../Assest/Images/aboutUs.jpg";

function AboutUs() {
  return (
    <div>
      <HeaderBanner title="About Us" img={img} />
      <AboutUsInfo />
      <Features />
      <Categories />
      <OurTeam />
      <OurPartners />
    </div>
  );
}

export default AboutUs;
