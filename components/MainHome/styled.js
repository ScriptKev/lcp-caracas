import styled from 'styled-components'

export const FirstSectionStyled = styled.section`
  height: 100vh;
  /* background-image: url('/img/Pared-Ladrillos-min.webp');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Helvetica Neue';
  font-weight: 900;

  .main__container {
    height: auto;
  }
  .main__mainText {
    text-shadow: 0px 0px 12px rgba(255, 255, 255, 0.445);
    font-size: 60px;
    text-align: center;
    padding: 0 10px;

    & h2 {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color: #fff;
    }
  }
  .main__mainText h2 .enphasis {
    color: #ffc000;
  }
  .main_mainIcon {
    margin-bottom: 20px;
  }

  @media (min-width: 320px) and (max-width: 767px) {
    .main__mainText {
      font-size: 2rem;
    }
  }
`

export const FirstSectionBg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;

  & > div {
    height: 100vh;
  }
`

export const PraySectionBg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;

  & > div {
    height: 100vh;
  }
`


export const PraySectionStyled = styled.section`
  height: 100vh;
  text-align: center;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    'title cta'
    'versicle versicle';
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  row-gap: 20px;

  & .home__pray--CTA {
    grid-area: cta;
    width: min-content;
    align-self: flex-end;
    padding-bottom: 25px;

    & button {
      color: white;
      background-color: #ffc000;
      width: 280px;
      height: 80px;
      border-radius: 50px;
      font-size: 30px;
      letter-spacing: 2px;
      text-transform: uppercase;
      font-family: 'Helvetica Neue';
      font-weight: medium;
      position: relative;
      display: inline-block;
      cursor: pointer;

      &:hover {
        background-color: #ffd145;
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

      & .tiptext {
        margin-left: -60px;
        top: -75%;
        left: 50%;
        text-shadow: 1px 1px 10px #00000042;
      }

      & .tiptext::after {
        margin-left: -5px;
        bottom: 100%;
        left: 50%;
      }

      &:focus,
      &:active {
        outline: none;
      }
    }
  }

  & .home__pray--title {
    grid-area: title;
    text-shadow: 0px 0px 8px rgba(32, 31, 31, 0.822);
    font-size: 40px;
    color: #fff;
    justify-self: flex-end;
    align-self: flex-end;
    font-family: 'Helvetica Neue';
    font-weight: 900;
  }
  & .home__pray--title p {
    font-size: 0.5em;
    letter-spacing: 6.8px;
  }

  & .home__pray--versicle {
    grid-area: versicle;
    align-self: flex-start;
    color: white;
    font-family: 'Helvetica Neue';
    font-weight: medium;

    & p {
      font-size: 1.4rem;
      font-style: italic;
    }
  }

  @media (min-width: 320px) and (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'title'
      'cta'
      'versicle';
    row-gap: 10px;
    padding-top: 0;
    padding-bottom: 60px;

    & .home__pray--title {
      margin-top: 70px;
      justify-self: center;
      align-self: center;
      font-size: 2rem;
    }

    & .home__pray--CTA {
      justify-self: center;
      align-self: center;
      padding-bottom: 0;

      & button {
        width: 175px;
        height: 50px;
        font-size: 20px;
      }
    }

    & .home__pray--versicle {
      padding: 0 10px 10px 10px;

      & p {
        font-size: 1.1rem;
      }
    }
  }
`