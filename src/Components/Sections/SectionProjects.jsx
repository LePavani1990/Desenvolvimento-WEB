import React from "react";
import styled from "styled-components";

import AddImage2 from "../../assets/imgAdd/ideia.jpeg";
import ProjectImg1 from "../../assets/img/projects/banco.png";
import ProjectImg2 from "../../assets/img/projects/digital-farms.png";
import ProjectImg3 from "../../assets/img/projects/marketplace.png";
import ProjectImg4 from "../../assets/img/projects/poupa.png";
import ProjectImg5 from "../../assets/img/projects/xlaw.png";
import ProjectImg6 from "../../assets/img/projects/easygarage.png";

import {
  Wrapper,
  HeaderInfo,
  AddLeft,
  AddLeftInner,
  ImgWrapper,
  AddRight,
} from "../../Components/Elements/Projects.jsx";

import ProjectBox from "../../Components/Elements/ProjectBox.jsx";

function SectionProjects() {
  return (
    <Wrapper id="projects">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Alguns de nossos projetos</h1>
            <p className="font13">
              <br />
            </p>
          </HeaderInfo>
          <div className="row textCenter">
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg1}
                title="Banco whitelabel"
                text="Banco whitelabel, com aplicativo IOS e Android, backoffice completo para gestão e acompanhamento de dados."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg2}
                action={"https://digitalfarms.com.br/?ref=xcoding"}
                title="Digital Farms"
                text="Sistema de monitoramento de colheitas em tempo real utilizando imagens de satélite e inteligência artificial. Contando com sistema web, IOS e Android"
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg3}
                title="MarketPlace"
                text="Marketplace com áreas para clientes, vendedores e administração, integração com métodos de pagamento."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg6}
                action={"https://easygarage.com.br/?ref=xcoding"}
                title="Compartilhamento de garagens"
                text="Aplicativo para iOS e Android para compartilhamento de vagas de garagem. Área de administração web para monitoramento."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg4}
                action={"https://poupaclub.com.br/"}
                title="Clube de descontos"
                text="Contendo áreas para cliente, parceiro e admin. Integração com métodos de pagamento e API de cupons de terceiros."
              />
            </div>
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
              <ProjectBox
                img={ProjectImg5}
                action={"https://xlaw.com.br/"}
                title="Sistema jurídico"
                text="Monitoramento de Diários Oficiais, acompanhamento de processos, módulo financeiro e integração com a Alexa."
              />
            </div>
          </div>
          <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }} />
          </div>
        </div>
      </div>
      <div className="lightBg">
        <div className="container">
          <Advertising className="flexSpaceCenter">
            <AddLeft>
              <AddLeftInner>
                <ImgWrapper className="flexCenter">
                  <img className="radius8" src={AddImage2} alt="imgAdd" />
                </ImgWrapper>
              </AddLeftInner>
            </AddLeft>
            <AddRight>
              <h2 className="font40 extraBold">Tire a ideia do papel</h2>
              <p className="font13">
                Você está procurando desenvolvimento de software? Realizar a
                integração entre sistemas e ferramentas? Deseja atualizar um
                sistema legado? Precisa desenvolver um aplicativo customizado?
                Nós podemos te ajudar nesta demanda, entre em contato agora
                mesmo!
              </p>
              <ButtonsRow
                className="flexNullCenter"
                style={{ margin: "30px 0" }}
              ></ButtonsRow>
            </AddRight>
          </Advertising>
        </div>
      </div>
    </Wrapper>
  );
}

const Advertising = styled.div`
  padding: 100px 0;
  margin: 100px 0;
  position: relative;
  @media (max-width: 1160px) {
    padding: 60px 0 40px 0;
  }
  @media (max-width: 860px) {
    flex-direction: column;
    padding: 0 0 30px 0;
    margin: 80px 0 0px 0;
  }
`;

const ButtonsRow = styled.div`
  @media (max-width: 860px) {
    justify-content: space-between;
  }
`;

export default SectionProjects;
