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
              <TecBox
              img={Tec1}
              title="Node.js"
              action={"https://nodejs.org/en/learn/getting-started/introduction-to-nodejs"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec2} 
              title="React" 
              action={"https://react.dev/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox
              img={Tec3}
              title="Next.js"
              action={"https://nextjs.org/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox
              img={Tec4} 
              title="React Native"
              action={"https://reactnative.dev/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec8} 
              title="Redis" 
              action={"https://redis.io/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox
              img={Tec9} 
              title="RabbitMQ"
              action={"https://www.rabbitmq.com/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec6} 
              title="PostgreSQL" 
              action={"https://www.postgresql.org/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec5} 
              title="MongoDB"
              action={"https://www.mongodb.com/pt-br"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox
              img={Tec7} 
              title="MySQL" 
              action={"https://www.mysql.com/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec10}
              title="AWS" 
              action={"https://aws.amazon.com/pt/"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox 
              img={Tec11} 
              title="GCP"
              action={"https://cloud.google.com/?hl=pt-BR"}
              />
            </div>
            <div className="col-lg-2 col-md-3 col-sm-3 col-xs-4">
              <TecBox
              img={Tec12} 
              title="DigitalOcean"
              action={"https://www.digitalocean.com/"}
              />
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
