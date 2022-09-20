import React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import Button from "./Button";
import AfflImage from "./AfflImage";
import Carousel from "./Carousel";
import theme from "data/theme";

const Wrapper = styled.div`
  padding: 50px 0;
  width: 100%;
  background-color: #f3f3f3;
  `;

const TopWrapper = styled.div`
  display: flex;
  width: calc(100%-50px);
  height: 210px;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin-top: 32px;
`;

const BottomWrapper = styled.div`
  display: flex;
  width: calc(100%-32px);
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
`;

// Icon CSS
const Icon = styled.img`
  width: 72px;
  height: 72px;
`;

export default function AfflIcon() {
  return (
    <Wrapper>
      <ThemeProvider theme={theme}>
        
      <h1>제휴서비스</h1>
        <TopWrapper>
          <Button />
        </TopWrapper>

        <BottomWrapper>
          <AfflImage />
          <Carousel />
        </BottomWrapper>
      </ThemeProvider>
    </Wrapper>
  );
}
