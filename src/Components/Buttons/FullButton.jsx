import React from "react";
import styled from "styled-components";

function FullButton({ title, action, hasBorder, target }) {
  return (
    <Wrapper
      className="LinkA pointer radius8 font13"
      href={action}
      hasBorder={hasBorder}
      target={target}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.a`
  border: 1px solid ${(props) => (props.hasBorder ? "#707070" : "#7620ff")};
  background-color: ${(props) => (props.hasBorder ? "transparent" : "#7620ff")};
  width: 100%;
  padding: 15px 25px;
  font-size: 0.85rem;
  outline: none;
  color: ${(props) => (props.hasBorder ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) =>
      props.hasBorder ? "transparent" : "#580cd2"};
    border: 1px solid #7620ff;
    color: ${(props) => (props.hasBorder ? "#7620ff" : "#fff")};
  }
`;

export default FullButton;
