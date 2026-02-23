import { useState } from 'react'
import styled, { createGlobalStyle } from "styled-components"
import Peluqueria from './templates/inicio'
import { BrowserRouter } from "react-router-dom";
import MyRoutes from './routers/routes';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Container>
        <MyRoutes/>
      </Container>
    </BrowserRouter>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0d0d0d;
  }
`

const Container = styled.main`
  min-height: 100vh;
`

export default App