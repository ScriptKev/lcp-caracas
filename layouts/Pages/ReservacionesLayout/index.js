//@ts-nocheck
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
    height: 400px;
    background-image: url(/img/formHeader-27-12-2020.webp);
    background-repeat: no-repeat;
    -webkit-background-size: cover;
    background-size: cover;
    -webkit-background-position: center;
    background-position: center;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.shadows.primary};

    @media screen and (max-width: 425px) {
      background-image: url(/img/formHeader-27-12-2020.webp);
      height: 250px;
      width: 100%;
      margin: 0 auto;
    }

    @media screen and (min-width: 375px) and (max-width: 425px) {
      height: 300px;
    }
`