import React from "react";
import styled from "styled-components";
import data from "data/afl_list.json";

const IconWrapper = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;


  grid-template-columns: repeat(6, 1fr);
  color: #313131;
  text-decoration: none;
  cursor: pointer;
`;

const StyledCircle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 110px;
  height: 110px;
  border: none;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};

  cursor: pointer;
  :hover {
    background: ${(props) => props.theme.red};
  }
`;

// Icon CSS
const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

function Button() {
  return (
    <>
      {data.afl.map((item) => (
        <IconWrapper>
          <StyledCircle>
            <Icon src={item.content} />
          </StyledCircle>
          <p>{item.name}</p>
        </IconWrapper>
      ))}
    </>
  );
}

export default Button;
