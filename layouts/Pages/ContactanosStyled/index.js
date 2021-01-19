import styled from 'styled-components'

export const MainStyled = styled.main`
  width: 100%;
  height: 100%;
  display: block;
  min-height: 100vh;
  padding: 130px 0 80px 0;
  font-family: 'Helvetica Neue';
`

export const GridStyled = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: min-content min-content;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'contactTitle contactForm'
    'contactMap contactMap';
  row-gap: 20px;
  @media screen and (min-width: 320px) and (max-width: 425px) {
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      'contactTitle'
      'contactForm'
      'contactMap';
  }
`

export const ContactTitleStyled = styled.section`
  grid-area: contactTitle;
  width: 100%;
  text-align: center;
  & h3 {
    font-size: 2rem;
  }
`

export const ContactFormStyled = styled.section`
  grid-area: contactForm;
  width: 100%;
  text-align: center;
`

export const ContactMapStyled = styled.section`
  grid-area: contactMap;
  width: 100%;
  text-align: center;
  & > h4 {
    font-size: 1.5rem;
  }
  & > p {
    margin: 10px 0 20px 0;
  }
  @media screen and (min-width: 320px) and (max-width: 425px) {
    & > h4 {
      font-size: 1.5rem;
    }
    & > p {
      font-size: 13px;
    }
  }
`