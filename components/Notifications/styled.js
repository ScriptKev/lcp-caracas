import styled from 'styled-components'

export const NotificationsStyled = {
  Container: styled.div`
    z-index: 1020;
    position: fixed;
    height: 100vh;
    width: 100vw;
    padding: 0 10px 85px 0;
    z-index: 1015;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
    animation: fadeIn ease 300ms;

    @keyframes fadeIn {
    0% {opacity:0;}
    100% {opacity:1;}
    }

  `,

  Main: styled.div`
    min-width: 250px;
    height: 60px;
    background-color: white;
    border-radius: 0 10px 10px 0;
  `,

  Flex: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,

  Icon: styled.div`
  
  `,

  Message: styled.div`
  
  `,
}