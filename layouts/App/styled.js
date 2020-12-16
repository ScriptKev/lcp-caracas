import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

const AppLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
`

const GlobalStyled = () => <Global styles={css`
  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-Black.otf");
    font-style: black;
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-MediumExtObl.otf");
    font-style: italic;
    font-weight: 300;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-Extended.otf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-MediumExt.otf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
      font-size: 18px;

      @media (min-width: 768px) {
        font-size: 16px;
      }
    }

  button {
    border: none;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  li {
    list-style: none;
  }
`} />


export { AppLayoutStyled, GlobalStyled }