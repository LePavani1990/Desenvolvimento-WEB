import React from "react";
import styled from "styled-components";
// Assets
export default function Step({ text, icon }) {
  return (
    <Wrapper className="radius8 flexNullCenter flexColumn">
      {
        <img
          src={icon}
          alt="etapa"
          style={{
            marginBottom: 20,
            maxHeight: 160,
          }}
        />
      }
      <p className="whiteColor font13" style={{ paddingBottom: "30px" }}>
        {text}
      </p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  padding: 0px 20px 20px;
  margin-top: 30px;
  height: 100%;
  justify-content: center;
`;
