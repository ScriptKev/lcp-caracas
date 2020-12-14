import React from 'react'
import styled from '@emotion/styled'
import { Global, css } from '@emotion/react'

const AppLayoutStyled = styled.div`
  width: 100%;
  height: 100%;
`

const GlobalStyled = () => <Global styles={css`
  html,
  body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: Helvetica, Arial, sans-serif;
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