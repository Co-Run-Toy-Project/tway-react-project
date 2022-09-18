import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "data/theme";

import './App.css';
import { Event } from './components/event/Event';
import flights from 'data/flights';
import { Tour } from 'components/recommendation/Tour';

function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <Event/>
        <Tour flights={flights}/>
      </ThemeProvider>
    </>
  );
}

export default App;