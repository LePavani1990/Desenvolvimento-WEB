import React from "react";
import styled from "styled-components";

export default function TecBox({ img, title, action }) {
  const handleClick = () => {
    window.open(action, "_blank");
  };

  return (
    <Wrapper onClick={handleClick}>
      <span>
        <img className="radius8 pointer" src={img} alt={title}></img>
      </span>
      <h3 className="font20 extraBold">{title}</h3>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    max-width: 100px;
    height: auto;
    margin: 20px 0;
  }
  h3 {
    padding-top: 10px;
  }
`;
