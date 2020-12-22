// @ts-nocheck
import styled from '@emotion/styled'

export const MapViewStyled = styled.div`
  width: 100%;
  height: 100%;
  padding: 0 50px;
  max-width: 1000px;
  margin: 0 auto;

  & #mapView {
    height: 400px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.shadows.primary};
  }

  @media screen and (min-width: 320px) and (max-width: 425px) {
    width: 100%;
    height: 100%;
    padding: 0;
  }
`