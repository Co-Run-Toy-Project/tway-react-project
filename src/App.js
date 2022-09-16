import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from "data/theme";

import './App.css';
import { Event } from './components/event/Event';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


function App() {
  return (
    <>
      <ThemeProvider theme = {theme}>
        <Event/>
      </ThemeProvider>
    </>
  );
}

export default App;
