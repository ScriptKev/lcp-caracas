import styled from '@emotion/styled'

export const HeaderStyled = styled.header`
  height: 100vh;
  background-image: url('/img/alabanza.webp');
  background-repeat: no-repeat;
  background-size: cover;
  text-align: center;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

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
  width: 100%;
  height: 100%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`