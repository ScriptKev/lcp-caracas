// @ts-nocheck
import styled from '@emotion/styled'

export const NavStyled = styled.nav`
  background-color: black;
  height: 3rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.primary};
`

export const ContainerStyled = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 10px;
  justify-content: space-between;
  width: 100%;
`