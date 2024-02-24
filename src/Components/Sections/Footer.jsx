import React from "react";
import { Link } from "react-scroll";
import LogoImg from "../../assets/svg/logo";
import { InnerWrapper, StyleP } from "../Elements/Projects";
import styled from "styled-components";

function Footer() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <Wrapper>
      <div className="footerBg">
        <div className="container">
          <InnerWrapper
            className="flexSpaceCenter"
            style={{ padding: "30px 0" }}
          >
            <Link
              className="flexCenter animate pointer"
              to="home"
              smooth={true}
              offset={-80}
            >
              <LogoImg black />
            </Link>
            <StyleP
              className="LinkA whiteColor font13 text-center"
              href="https://www.google.com/maps/place/Xcoding+Tecnologia/@-25.4201651,-49.2685498,15z/data=!4m5!3m4!1s0x0:0x2d2875f6409e9738!8m2!3d-25.4201651!4d-49.2685498"
              target="_blank"
            >
              {getCurrentYear()} -
              <span className="darkColor font13">
                {"  "}
                Xcoding Tecnologia Ltda{"  "}
              </span>
              39.306.153/0001-05
              <br />
              R. Heitor Stockler de França, 396 - sala 1202 - Centro Cívico,
              Curitiba - PR, 80030-000
            </StyleP>
            <Link
              className="LinkA whiteColor pointer font13"
              to="home"
              smooth={false}
              offset={-80}
            >
              Voltar ao início
            </Link>
          </InnerWrapper>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

export default Footer;
