import React from 'react';
import './App.css';
import Header from './content/header'
import styled from 'styled-components'
import Wrapper from './content/wrapper'

const AppStyled = styled.main`
body{
  font-family: 'Barlow Semi Condensed', sans-serif;
}
background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
min-height: 100vh;
padding: 2em;
`


function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppStyled>

  );
}

export default App;
