import styled from 'styled-components'

export const Navidad = {
  Section: styled.section`
    width: 100%;
    height: 100vh;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    font-family: 'Helvetica Neue';
  `,

  Title: styled.h1`
    text-shadow: 1px 1px 5px black;
    font-weight: 1000;
    font-size: 30px;

    & > div {
        font-size: 70px;
    }

    @media screen and (min-width: 768px) {
      font-size: 45px;

      & > div {
        font-size: 100px;
      }
    }
  `,

  Mark: styled.p`
    text-shadow: 1px 1px 5px black;
    font-weight: 400;
    font-size: 15px;
    letter-spacing: 7px;
    text-transform: uppercase;
    margin-top: 20px;
  `,

  Flag: styled.div`
    width: 100px;
    height: 160px;
    position: absolute;
    top: 0;
    background-color: #1e478dcc;
    border-radius: 0 0 3px 3px;
    align-items: center;
    box-shadow: 4px 7px 15px #00000054;
    display: flex;
    justify-content: center;
    clip-path: inset(0 0 25% 0);
    filter: drop-shadow(4px 7px 15px #00000054);

    & > a {
      padding-top: 20px;
    }
`,

  HappyChristmas: styled.h3`
    text-shadow: 1px 1px 5px black;
    font-weight: 800;
    font-size: 30px;
    display: flex;

    & > div:nth-child(2n+1){
      color: ${({ theme }) => theme.colors.secondary};
    }
  `
}