import React from "react";
import styled from "styled-components";

import HomeImage from "../../assets/img//locals/xcoding.jpg";
import AspesIcon from "../../assets/svg/aspes";
import Circles from "../../assets/svg/circles";
import {
  LeftSide,
  HeaderP,
  RightSide,
  ImageWrapper,
  Img,
  RelativeWrapper,
  AspesWrapper,
  CirclesWrapper,
  GreyDiv,
} from "../Elements/Projects";

function SectionHome() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60"> A essência da tecnologia </h1>
          <HeaderP className="font13 semiBold">
            Mais do que um fornecedor de tecnologia, somos um ateliê de software
            que desenvolve soluções exclusivamente adaptadas às necessidades de
            negócio dos nossos clientes.
          </HeaderP>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img
            className="radius8"
            src={HomeImage}
            alt="office"
            style={{ zIndex: "9" }}
          />
          <RelativeWrapper className="aspes flexCenter darkBg3 radius8">
            <AspesWrapper>
              <AspesIcon />
            </AspesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Transformamos ideias em negócios através da tecnologia</em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                Xcoding tecnologia
              </p>
            </div>
          </RelativeWrapper>
          <CirclesWrapper>
            <Circles />
          </CirclesWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export default SectionHome;
