import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  height: 100vh;
  background-image: url('/img/alabanza.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas:  "."
                        "header__content"
                        ".";

  & h1 {
    color: whitesmoke;
    font-size: 100px;
    text-shadow: 0 0 5px #FFF, 0 0 10px #484848, 0 0 20px #275287;
  }


  @media (min-width: 768px) and (max-width: 1024px) {
    h1 {
      font-size: 3.5rem;
    }
  }
`

export const ContainerStyled = styled.div`
  grid-area: header__content;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 1920px;
  align-items: center;
  justify-items: center;

  @media (min-width: 768px) and (max-width: 1024px) {
    .header__container {
      grid-template-rows: min-content min-content min-content;
    }
  }
`

export const headerDirectionStyled = styled.div`
    color: whitesmoke;
    font-weight: 600;
    text-align: center;
    font-size: 20px;

  @media (min-width: 768px) and (max-width: 1024px) {
    align-self: flex-start;
    font-size: 20px;
}
`