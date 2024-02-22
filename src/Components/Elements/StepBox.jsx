import React from "react";
import Idea from "../../assets/svg/brainstorm.svg";
import Build from "../../assets/svg/build.svg";
import Grow from "../../assets/svg/grow.svg";
import Launch from "../../assets/svg/launch.svg";
// Components
import Step from "../Elements/Step";

function StepBox() {
  return (
    <div className="row textCenter">
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 effect">
        <Step
          icon={Idea}
          text="O processo de Product Discovery é uma fase pré-projeto. Nele, são realizados Brainstorming para compreender as reais necessidades do produto e iniciar a etapa de modelagem da solução e estudo de UX."
        />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 effect">
        <Step
          icon={Build}
          text="Trabalhamos com metodologias orientadas e planejamentos otimizados que dinamizam o fluxo de produção. Através de feedback e interações constantes, garantimos a agilidade e eficiência no processo de desenvolvimento de nossos softwares."
        />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 effect">
        <Step
          icon={Launch}
          text="Minimizar os erros e maximizar os resultados. Antes de finalizar, antecipamos todas possibilidades de funcionamento, nossa equipe de Quality Assurance estressa todo o ambiente garantindo a eficiência do produto final."
        />
      </div>
      <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 effect">
        <Step
          icon={Grow}
          text="O dia tão ansiosamente aguardado chegou: Go Live! Aquele dia em que todos trabalharam muito para acontecer, Implantamos e efetuamos todo o acompanhamento junto ao cliente."
        />
      </div>
    </div>
  );
}

export default StepBox;
