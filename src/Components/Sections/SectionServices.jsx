import React from "react";
import styled from "styled-components";
import AddImage1 from "../../assets/img/locals/1.png";
import AddImage2 from "../../assets/img/locals/2.png";
import AddImage3 from "../../assets/img/locals/3.png";
import AddImage4 from "../../assets/img/locals/4.png";
import {
  AddRightInner,
  HeaderInfo,
  Wrapper,
  ServiceBoxRow,
  ServiceBoxWrapper,
  Advertising,
  AddLeft,
} from "../../Components/Elements/Projects.jsx";

import ClientSlider from "../Elements/ClientSlider.jsx";
import ServiceBox from "../../Components/Elements/ServiceBox.jsx";
import FullButton from "../Buttons/FullButton.jsx";

function SectionServices() {
  return (
    <Wrapper id="services">
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <ClientSlider />
        </div>
      </div>
      <div className="whiteBg" style={{ padding: "60px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Nossos serviços</h1>
          </HeaderInfo>
          <ServiceBoxRow className="flex">
            <ServiceBoxWrapper className="effect">
              <ServiceBox
                icon="roller"
                title="Mobile"
                subtitle="Acompanhe as tendências do mercado mobile, transforme a experiência do seu cliente, proporcionando agilidade e mobilidade para o seu dia a dia."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="effect">
              <ServiceBox
                icon="browser"
                title="Desenvolvimento web"
                subtitle="Desenvolvemos o seu sistema para a Internet, utilizando as melhores práticas e tecnologias da atualidade, maximizaremos sua experiência através de uma interface pensada para o seu negócio."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="effect">
              <ServiceBox
                icon="printer"
                title="Consultoria"
                subtitle="Avaliamos o seu software, arquitetura, metodologia e infraestrutura, proporcionando melhores resultados e reduzindo custos."
              />
            </ServiceBoxWrapper>
            <ServiceBoxWrapper className="effect">
              <ServiceBox
                icon="monitor"
                title="Diferenciais"
                subtitle="Produtos altamente escaláveis.
                Design focado no cliente.
                Especialistas em todos os setores.
                Melhorias contínuas."
              />
            </ServiceBoxWrapper>
          </ServiceBoxRow>
        </div>
        <div className="lightBg">
          <div className="container">
            <Advertising className="flexSpaceCenter">
              <AddLeft>
                <h2 className="font40 extraBold"> Sobre nós </h2>
                <p className="font13">
                  Uma empresa de tecnologia voltada para o desenvolvimento de
                  softwares, tendo como princípios: o compromisso total com o
                  interesse dos clientes, a adesão aos mais altos padrões
                  técnicos e a busca por desempenho com foco no êxito. Agregando
                  excelência técnica à paixão pela programação, utilizamos as
                  principais ferramentas de tecnologia para desenvolver seu
                  produto ou serviço, colocando sua empresa em destaque no
                  mercado.
                </p>
                <ButtonsRow
                  className="flexNullCenter"
                  style={{ margin: "30px 0" }}
                >
                  <div style={{ width: "190px" }}>
                    <FullButton
                      title="Saiba mais"
                      action={"https://www.linkedin.com/company/xcodingdev/"}
                      target="_blank"
                    />
                  </div>
                  <div style={{ width: "190px", marginLeft: "15px" }}>
                    <FullButton
                      title="Contate-nos"
                      action={
                        "https://api.whatsapp.com/send?phone=5541999078107"
                      }
                      target={"_blank"}
                    />
                  </div>
                </ButtonsRow>
              </AddLeft>
              <AddRight>
                <AddRightInner>
                  <div className="flexNullCenter">
                    <AddImgWrapp1 className="flexCenter">
                      <img src={AddImage1} alt="office" />
                    </AddImgWrapp1>
                    <AddImgWrapp2>
                      <img src={AddImage2} alt="office" />
                    </AddImgWrapp2>
                  </div>
                  <div className="flexNullCenter">
                    <AddImgWrapp3>
                      <img src={AddImage3} alt="office" />
                    </AddImgWrapp3>
                    <AddImgWrapp4>
                      <img src={AddImage4} alt="office" />
                    </AddImgWrapp4>
                  </div>
                </AddRightInner>
              </AddRight>
            </Advertising>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const AddRight = styled.div`
  width: 50%;
  position: absolute;
  top: -70px;
  right: 0;
  @media (max-width: 860px) {
    width: 80%;
    position: relative;
    order: 1;
    top: -40px;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

const AddImgWrapp1 = styled.div`
  width: 48%;
  margin: 0 6% 10px 6%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp2 = styled.div`
  width: 30%;
  margin: 0 5% 10px 5%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp3 = styled.div`
  width: 20%;
  margin-left: 40%;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;
const AddImgWrapp4 = styled.div`
  width: 30%;
  margin: 0 5%auto;
  img {
    width: 100%;
    height: auto;
    border-radius: 1rem;
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
    -moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }
`;

export default SectionServices;
