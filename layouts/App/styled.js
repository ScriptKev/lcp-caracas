import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

const AppLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  /* overflow: hidden; */
`

const GlobalStyled = createGlobalStyle`
  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-BlackCond.otf");
    font-style: blackCon;
    font-weight: 1000;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-Black.otf");
    font-style: black;
    font-weight: 900;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-LightExt.otf");
    font-style: light;
    font-weight: 200;
    font-display: swap;
  }

  @font-face {
    font-family: "Helvetica Neue";
    src: url("/fonts/Helvetica-Neue/HelveticaNeue-ThinCond.otf");
    font-style: lightThin;
    font-weight: 100;
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
`

export { AppLayoutStyled, GlobalStyled }