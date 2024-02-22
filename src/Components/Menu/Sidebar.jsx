import React from "react";
import { Link } from "react-scroll";
import styled from "styled-components";

//assets
import ImgLinkedin from "../../assets/imgMedia/linkedin";
import ImgFacebook from "../../assets/imgMedia/facebook";
import ImgInstagram from "../../assets/imgMedia/instagram";
import ImgWhatsapp from "../../assets/imgMedia/whatsapp";
import CloseIcon from "../../assets/svg/closeIcon";
import LogoIcon from "../../assets/svg/logo";

//components
import { SidebarHeader, CloseBtn, UlStyle } from "../Elements/Projects";

function Sidebar({ sidebarOpen, toggleSidebar }) {
  return (
    <Wrapper className="animate whiteBg" sidebarOpen={sidebarOpen}>
      <SidebarHeader className="flexSpaceCenter">
        <div className="flexNullCenter">
          <LogoIcon />
        </div>
        <CloseBtn
          onClick={() => toggleSidebar(!sidebarOpen)}
          className="animate pointer"
        >
          <CloseIcon />
        </CloseBtn>
      </SidebarHeader>

      <UlStyle className="flexNullCenter flexColumn">
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="home"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Início
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="services"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Serviços
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="projects"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Projetos
          </Link>
        </li>
        <li className="semiBold font15 pointer">
          <Link
            onClick={() => toggleSidebar(!sidebarOpen)}
            activeClass="active"
            className="whiteColor"
            style={{ padding: "10px 15px" }}
            to="technologys"
            spy={true}
            smooth={true}
            offset={-60}
          >
            Tecnologias
          </Link>
        </li>
      </UlStyle>
      <UlStyle className="flexSpaceCenter">
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://www.linkedin.com/company/xcodingdev/"
            rel="noreferrer"
            target="_blank"
            style={{ padding: "10px 20px", color: "#fff" }}
          >
            <ImgLinkedin />
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://www.facebook.com/xcodingbr"
            className="radius8"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "10px 20px", color: "#fff" }}
          >
            <ImgFacebook />
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://www.instagram.com/xcoding_/"
            className="radius8"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "10px 20px", color: "#fff" }}
          >
            <ImgInstagram />
          </a>
        </li>
        <li className="semiBold font15 pointer flexCenter">
          <a
            href="https://api.whatsapp.com/send?phone=5541999078107"
            className="radius8"
            target="_blank"
            rel="noreferrer"
            style={{ padding: "10px 20px", color: "#fff" }}
          >
            <ImgWhatsapp />
          </a>
        </li>
      </UlStyle>
    </Wrapper>
  );
}
const Wrapper = styled.nav`
  width: 400px;
  height: 100vh;
  position: fixed;
  top: 0;
  padding: 0 30px;
  right: ${(props) => (props.sidebarOpen ? "0px" : "-400px")};
  z-index: 9999;
  @media (max-width: 400px) {
    width: 100%;
  }
`;

export default Sidebar;
