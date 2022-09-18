import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "data/theme";

import './App.css';
import { Event } from './components/event/Event';


function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>

      </ThemeProvider>
    </>
  );
}

export default App;