import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HealthPartner from "../HealthPartner/HealthPartner";
import Info from "../Info/Info";
import NavBar from "../NavBar/NavBar";
import Services from "../Services/Services";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <HealthPartner></HealthPartner>
      <Info></Info>
      <Services></Services>
      <Footer></Footer>
    </div>
  );
};

export default Home;
