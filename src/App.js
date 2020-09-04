import React, { createContext, useState } from 'react';
import './App.css';
import Header from './content/header'
import styled from 'styled-components'
import Wrapper from './content/wrapper'
import Table from './content/table'
import AppContent from './content/app_content';
import BtnRules from './content/btnrules';

export const ScoreContext = createContext()

const AppStyled = styled.main`
  font-family: 'Barlow Semi Condensed', sans-serif;
  *{margin:0px;
  padding:0px;
  }

background-image: radial-gradient(circle at top, #1F3757 20%, #131537 100%);
min-height: calc(100vh - 4em);
padding: 2em;
color: white;

`


function App() {
  const [score, setScore] = useState(0)
  return (
    <ScoreContext.Provider value={{
      score,
      setScore
    }}>
      <AppStyled>
        <Wrapper>
          <AppContent>
            <Header />
            <Table />
            <BtnRules />
          </AppContent>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>


  );
}

export default App;
