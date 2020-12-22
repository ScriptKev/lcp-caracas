import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  min-height: 100vh;
  background-image: url('/img/HeaderBg2.webp');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  & h1 {
    font-family: "Helvetica Neue";
    font-weight: black;
    color: whitesmoke;
    font-size: 6rem;
    text-shadow: 2px 2px 10px #00000075;
  }

  & h2 {
    font-family: "Helvetica Neue";
    font-weight: 500;
    color: white;
    display: flex;
    justify-content: center;
    letter-spacing: 7.2px;
  }


  @media (max-width: 768px) {

    h1 {
      font-size: 3rem;
      text-align: center;
    }

    h2 {
      letter-spacing: 1px;
      font-size: 1.1rem;
    }
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
    padding: 60px 5px 5px 5px;
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