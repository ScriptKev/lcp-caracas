import styled from 'styled-components'

export const NavBar = {
  Wrapper: styled.nav`
    flex: 1;
    align-self: flex-start;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `,
  Items: styled.ul`
    display: flex;
    list-style: none;
  `,
  Item: styled.li`
    padding: 0 10px;
    cursor: pointer;
    max-width: 121px;
  `,
}

export const NavBarMobileStyled = {
  Wrapper: styled(NavBar.Wrapper)`
    position: fixed;
    width: 100vw;
    bottom: 0;
    z-index: 1010;
    box-shadow: 0px -4px 10px #00000029;
    justify-content: center;
    border-radius: 10px 10px 0 0;
    background-color: #1e478dcc;
  `,
  Items: styled(NavBar.Items)`
    display: grid;
    grid-template-columns: 121px 1fr 121px;
    grid-template-rows: 1fr;
    justify-items: center;
    align-items: center;
    width: 100%;
    padding: 10px 5px;
  `,
  Item: styled(NavBar.Item)`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 13px;
    transition: all ease-in-out 150ms;
    &:hover,
    &:active,
    &:focus {
      color: ${({ className, theme }) =>
      className === 'active' ? 'white' : theme.colors.secondary};
    }
    &.active {
      background-color: ${({ className }) => {
      if (className) return '#FFC000'
    }};
    color: ${({ className, theme }) => {
      if (className) return theme.colors.primary
    }};
      border-radius: 10px;
      padding-top: 5px;
      padding-bottom: 5px;
    }
    & a {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      font-family: 'Helvetica Neue';
      font-weight: 400;
    }
  `,
  Icon: styled.span``,
}
