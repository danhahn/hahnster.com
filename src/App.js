import React from 'react';
import logo from './images/logo.png';
import './App.css';
import { Heading, Pane } from 'evergreen-ui';

function App() {
  return (
    <Pane className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Heading is="h1" size="20" marginTop={20}>
          Hahnster
        </Heading>
      </header>
    </Pane>
  );
}

export default App;
