// @ts-nocheck
import styled from '@emotion/styled'

export const MapViewStyled = styled.div`
  & #mapView {
    height: 400px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 1px 1px 10px ${({ theme }) => theme.shadows.primary};
  }
`