import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import styled from "styled-components";
//assets
import LogoIcon from "../../assets/svg/logo";
import TestIcon from "../../assets/svg/TestIcon";
import ImgLinkedin from "../../assets/imgMedia/linkedin";
import ImgFacebook from "../../assets/imgMedia/facebook";
import ImgInstagram from "../../assets/imgMedia/instagram";
import ImgWhatsapp from "../../assets/imgMedia/whatsapp";
//Components
import Backdrop from "../Elements/Backdrop";
import Sidebar from "../Menu/Sidebar";
import {
  NavInner,
  BurderWrapper,
  UlWrapper,
  UlWrapperRight,
} from "../Elements/Projects";

function NavbarMenu() {
  const [y, setY] = useState(window.scrollY);
  const [sidebarOpen, toggleSidebar] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setY(window.scrollY));
    return () => {
      window.removeEventListener("scroll", () => setY(window.scrollY));
    };
  }, [y]);

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
      {sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
      <Wrapper
        className="flexCenter animate whiteBgNav"
        style={y > 100 ? { height: "60px" } : { height: "80px" }}
      >
        <NavInner className="container flexSpaceCenter">
          <Link className="pointer flexNullCenter" to="home" smooth={true}>
            <LogoIcon />
          </Link>
          <BurderWrapper
            className="pointer"
            onClick={() => toggleSidebar(!sidebarOpen)}
          >
            <TestIcon />
          </BurderWrapper>
          <UlWrapper className="flexNullCenter">
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="home"
                spy={true}
                smooth={false}
                offset={-80}
              >
                Início
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="services"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Serviços
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="projects"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Projetos
              </Link>
            </li>
            <li className="semiBold font15 pointer">
              <Link
                activeClass="active"
                style={{ padding: "10px 15px" }}
                to="technologys"
                spy={true}
                smooth={true}
                offset={-80}
              >
                Tecnologias
              </Link>
            </li>
          </UlWrapper>
          <UlWrapperRight className="flexNullCenter">
            <li className="semiBold font15 pointer flexCenter">
              <a
                href="https://www.linkedin.com/company/xcodingdev/"
                rel="noreferrer"
                target="_blank"
                style={{ padding: "10px 20px" }}
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
                style={{ padding: "10px 15px" }}
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
                style={{ padding: "10px 15px" }}
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
                style={{ padding: "10px 15px" }}
              >
                <ImgWhatsapp />
              </a>
            </li>
          </UlWrapperRight>
        </NavInner>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
`;

export default NavbarMenu;
