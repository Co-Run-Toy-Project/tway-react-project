import React from "react";
import styled from "styled-components";

const StyledCircle = styled.button`
  width: 110px;
  height: 110px;
  border: 2px solid lightcoral;
  border-radius: 50%;
  color: #000000;
  margin-left: 50px;
  cursor: pointer;
  :hover {
    background: red;
  }
`;

function Button(props) {
  const { title, onClick } = props;

  return <StyledCircle>{title}</StyledCircle>;
}

export default Button;
