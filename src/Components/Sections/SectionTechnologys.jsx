import React from "react";
import styled from "styled-components";

import Tec1 from "../../assets/imgTecno/node.png";
import Tec2 from "../../assets/imgTecno/react.png";
import Tec3 from "../../assets/imgTecno/nextjs.png";
import Tec4 from "../../assets/imgTecno/react-native.png";
import Tec5 from "../../assets/imgTecno/mongo.png";
import Tec6 from "../../assets/imgTecno/postgres.png";
import Tec7 from "../../assets/imgTecno/mysql.png";
import Tec8 from "../../assets/imgTecno/redis.png";
import Tec9 from "../../assets/imgTecno/rabbit.png";
import Tec10 from "../../assets/imgTecno/aws.png";
import Tec11 from "../../assets/imgTecno/gcp.png";
import Tec12 from "../../assets/imgTecno/digitalocean.png";

import StepBox from "../Elements/StepBox";
import TecBox from "../Elements/TecBox";

function SectionTechnologys() {
  return (
    <Wrapper id="technologys">
      <div className="whiteBg">
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">
              Principais tecnologias utilizadas
            </h1>
          </HeaderInfo>
          <div className="row textCenter flexCenter mb-30">
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec1} title="Node.js" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec2} title="React" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec3} title="Next.js" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec4} title="React Native" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec8} title="Redis" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec9} title="RabbitMQ" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec6} title="PostgreSQL" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec5} title="MongoDB" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec7} title="MySQL" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec10} title="AWS" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec11} title="GCP" />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox img={Tec12} title="DigitalOcean" />
            </div>
          </div>
        </div>
      </div>
      <div className="lightBg" style={{ padding: "50px 0" }}>
        <div className="container">
          <HeaderInfo>
            <h1 className="font40 extraBold">Etapas do desenvolvimento</h1>

            <StepBox />
          </HeaderInfo>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  padding-top: 80px;
`;

const HeaderInfo = styled.div`
  margin-bottom: 30px;
  padding-bottom: 50px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;

export default SectionTechnologys;
