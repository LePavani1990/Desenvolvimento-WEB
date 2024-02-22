import React from "react";
import Slider from "react-slick";
import styled from "styled-components";

// Assets
import ClientLogo01 from "../../assets/img/clients/logo01.svg";
// import ClientLogo02 from "../../assets/img/clients/logo02.svg";
import ClientLogo03 from "../../assets/img/clients/logo03.svg";
import ClientLogo04 from "../../assets/img/clients/logo04.svg";
import ClientLogo05 from "../../assets/img/clients/logo05.svg";
import ClientLogo06 from "../../assets/img/clients/pavanilollo.png";
import ClientLogo07 from "../../assets/img/clients/rsmi.png";
import ClientLogo08 from "../../assets/img/clients/hungaro-capital.png";
import ClientLogo09 from "../../assets/img/clients/digital-farms.png";
import ClientLogo10 from "../../assets/img/clients/finanblue.png";
import ClientLogo11 from "../../assets/img/clients/sosebos.png";

export default function ClientSlider() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
    autoplay: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <LogoWrapper
          target="_blank"
          href={"https://uneogreenbank.com.br/"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo05} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://inteliger.com.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo04} alt="client logo" />
        </LogoWrapper>

        <LogoWrapper
          target="_blank"
          href={"https://finanblue.com.vc/"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo10} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://rsmi.com.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo07} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper className="flexCenter">
          <ImgStyle src={ClientLogo11} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://digitalfarms.com.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo09} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://xlaw.com.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo03} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://hungarocapital.com"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo08} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://poupaclub.com.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo01} alt="client logo" />
        </LogoWrapper>
        <LogoWrapper
          target="_blank"
          href={"https://pavanielollo.adv.br"}
          className="flexCenter"
        >
          <ImgStyle src={ClientLogo06} alt="client logo" />
        </LogoWrapper>
      </Slider>
    </div>
  );
}

const LogoWrapper = styled.a`
  width: 100%;
  height: 100px;
  cursor: pointer;
  :focus-visible {
    outline: none;
    border: 0px;
  }
`;
const ImgStyle = styled.img`
  width: 100%;
  height: 100%;
  padding: 10%;
  object-fit: contain;
`;
