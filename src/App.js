import React, { Component } from 'react';
import styled from 'styled-components';
import Logo from './components/logo';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #b0bde7;
`;

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Logo text="hahnster"/>
      </Wrapper>
    );
  }
}

export default App;
