import styled from '@emotion/styled'

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
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:  'contactTitle contactForm'
                        'contactMap contactMap';
  row-gap: 20px;

  @media screen and (min-width: 320px) and (max-width: 425px) {
    grid-template-rows: repeat(2, min-content) 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:  'contactTitle'
                          'contactForm'
                          'contactMap';
  }
`

export const ContactTitleStyled = styled.section`
  grid-area: contactTitle;
  width: 100%;
  text-align: center;
`

export const ContactFormStyled = styled.section`
  grid-area: contactForm;
  width: 100%;
  text-align: center;
`

export const ContactMapStyled = styled.section`
  grid-area: contactMap;
  width: 100%;
`