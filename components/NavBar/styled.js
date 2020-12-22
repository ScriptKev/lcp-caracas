// @ts-nocheck
import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  background: transparent;
  height: 120px;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
  position: absolute;
  font-family: "Helvetica Neue";
  font-weight: 500;

  & .route__contact {
    color: ${({ light }) => light ? '#1a5187' : 'white'};
    position: relative;
    display: inline-block;
    -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
    -khtml-user-select: none; /* Konqueror HTML */
    -moz-user-select: none; /* Old versions of Firefox */
    -ms-user-select: none; /* Internet Explorer/Edge */
    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */

    &:hover {
      color: #FFC000;
    }

    & .tiptext {
      visibility: hidden;
      width: 120px;
      color: ${({ theme }) => theme.colors.secondary};
      text-align: center;
      border-radius: 3px;
      padding: 6px 0;
      position: absolute;
      z-index: 1;
      font-size: 12px;
    }

    & .tiptext::after {
      position: absolute;
      border-width: 5px;
      border-style: solid;
    }
    &:hover .tiptext {
        visibility: visible;
    }

    & .tiptext{
      margin-left: -60px;
      top: 150%;
      left: 50%;
    }

    & .tiptext::after{
      margin-left: -5px;
      bottom: 100%;
      left: 50%;
    }

    @media screen and (min-width: 320px) and (max-width: 460px) {
      display: none
    }
  }

  & .route__reservations:hover {
    color: #FFC000;
  }

  & .route__reservations {
    color: ${({ light }) => light ? '#1a5187' : 'white'};

    @media screen and (max-width: 425px) {
      font-size: 0.9rem;
    }
  }
`

export const ContainerStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 30px;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin: 0 auto;

  @media screen and (min-width: 320px) and (max-width: 467px) {
    padding: 0 15px;
  }
`

export const FlagStyled = styled.div`
  width: 90px;
  height: 100%;
  background-color: #1e478dcc;
  border-radius: 0 0 3px 3px;
  align-items: center;
  box-shadow: 4px 7px 15px #00000054;
  display: flex;
  justify-content: center;
  clip-path: inset(0 0 25% 0);
  filter: drop-shadow(4px 7px 15px #00000054);
`