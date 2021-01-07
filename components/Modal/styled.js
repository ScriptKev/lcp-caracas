import styled from 'styled-components'

export const ModalStyled = {
  Container: styled.div`
    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 0 10px;
    z-index: 1015;
    background-color: #00000024;
    backdrop-filter: blur(2px);
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'Helvetica Neue';
    font-weight: normal;
  `,

  Box: styled.div`
    background-color: white;
    padding: 20px 10px;
    min-width: 280px;
    border-radius: 10px;
    box-shadow: 1px 1px 15px #00000054;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

  @media (min-width: 320px) and (max-width: 767px) {
    font-size: 0.9rem;
  }
  `
}