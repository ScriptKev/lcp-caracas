import styled from '@emotion/styled'

export const FormSeccionStyled = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const FormBgStyled = styled.div`
    max-width: 600px;
    width: 100%;
    margin: auto;
    height: 175px;
    background-image: url(/img/form-header.webp);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-background-position: center;
    background-position: center;
    border-radius: 5px;

    @media screen and (max-width: 425px) {
      background-image: url(/img/form-header-mobile.webp);
      height: 250px;
      width: 100%;
      margin: 0 auto;
    }

    @media screen and (min-width: 375px) and (max-width: 425px) {
      height: 300px;
    }
`