import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "data/theme";

import './App.css';

function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>

      </ThemeProvider>
    </>

  );
}