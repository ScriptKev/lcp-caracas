import styled from 'styled-components'

export const HeaderStyled = styled.header`
  min-height: 100vh;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & em {
      color: #FFC000;
      font-style: normal;
    }

  & h1 {
    font-family: 'Helvetica Neue';
    font-weight: 400;
    color: whitesmoke;
    font-size: 3rem;
    text-align:center;
    text-shadow: 2px 2px 10px #00000075;
  }

  & h2 {
    font-family: 'Helvetica Neue';
    font-weight: 400;
    color: white;
    display: flex;
    justify-content: center;
    letter-spacing: 7.2px;
  }
  
  & .header__quote {
    display: flex;
    font-family: 'Helvetica Neue';
    place-content: flex-end;
    font-weight: 200;
    font-size: 1.4rem;
    color: white;

    & > div {
      color: #FFC000;
    }
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 16px;
      text-align: center;
      font-weight: 400;
      line-height: 25px;
    }

    h2 {
      letter-spacing: 1px;
      font-size: 1.1rem;
    }

    & .header__quote {
      font-size: 0.8rem;
    }
  }
`

export const HeaderBg = styled.div`
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle, rgba(30,81,141,0.9220063025210083) 0%, rgb(5 27 63) 100%);

  & > div {
    height: 100vh;
  }
`

export const ContainerStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (max-width: 425px) {
    padding: 10px 5px 5px 5px;
  }
`

export const SloganStyled = styled.div`
  width: 100%;
  background-color: #1e478d99;
  border-radius: 3px;
  padding: 5px 10px;
  margin-top: 20px;

  @media (max-width: 425px) {
    & h2 {
      font-size: 1rem;
    }
  }
`
