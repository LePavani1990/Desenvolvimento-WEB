import React from "react";

import SectionHome from "../Components/Sections/SectionHome.jsx";
import SectionServices from "../Components/Sections/SectionServices.jsx";
import SectionProjects from "../Components/Sections/SectionProjects.jsx";
import SectionTechnologys from "../Components/Sections/SectionTechnologys.jsx";
import Footer from "../Components/Sections/Footer.jsx";
import ApiWhats from "../Components/Elements/ApiWhats.jsx";
import NavbarMenu from "../Components/Menu/NavbarMenu.jsx";

function Inicio() {
  return (
    <>
      <NavbarMenu />

      <SectionHome />

      <SectionServices />

      <SectionProjects />

      <SectionTechnologys />

      <ApiWhats />

      <Footer />
    </>
  );
}

export default Inicio;
