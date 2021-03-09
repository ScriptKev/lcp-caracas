import styled from 'styled-components'

export const FormSeccionStyled = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`

export const FormBgStyled = styled.div`
  max-width: 470px;
  width: 100%;
  margin: 60px auto auto auto;
  height: 320px;
  background-image: url('/img/formHeader-14-03-2021.webp');
  background-repeat: no-repeat;
  -webkit-background-size: cover;
  background-size: cover;
  -webkit-background-position: center;
  background-position: center;
  border-radius: 5px;
  box-shadow: 1px 1px 10px ${({ theme }) => theme.shadows.primary};

  @media screen and (max-width: 425px) {
    background-image: url('/img/formHeader-14-03-2021.webp');
    height: 250px;
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 375px) and (max-width: 425px) {
    height: 250px;
  }
`

export const FormDescription = styled.div`
  max-width: 600px;
  width: 100%;
  margin: 20px auto 0 auto;
  height: min-content;
  text-align: center;

  & span {
    font-size: 2rem;
    font-weight: 400;
  }

  @media screen and (min-width: 375px) and (max-width: 425px) {
  }
`

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFC000;
  color: white;
  width: 90%;
  max-width: 425px;
  margin: 20px auto;
  border-radius: 5px;
  text-align: center;
  font-size: 0.9rem;
  padding: 10px;

  & .spaceEnter {
    @media screen and (min-width: 400px) {
      display: none;
    }
  }

  @media screen and (max-width: 425px) {
    font-size: 0.8rem;
  }
`