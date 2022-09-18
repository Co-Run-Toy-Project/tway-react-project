import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "data/theme";
import Reservation from 'components/flight-check/Reservation';

import './App.css';
import { Event } from './components/event/Event';


function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>
      <Reservation></Reservation>
      </ThemeProvider>
    </>
  );
}

export default App;
