import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import Colum from "./components/Colum";

const App = () => {
  const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
  `;
  const Global = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    user-select: none;
  }
`;
  return (
    <>
      <Global />
      <AppWrapper>
        {Array.from(Array(Math.floor(window.innerWidth / 100) - 1).keys()).map(() => (
          <Colum />
        ))}
      </AppWrapper>
    </>
  );
};

export default App;
