import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  background-color: red;
  height: 3rem;
  width: 100%;
  color: ${props => props.theme.colors.primary};
`

export const ContainerStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 10px;
  justify-content: space-between;
  width: 100%;
`