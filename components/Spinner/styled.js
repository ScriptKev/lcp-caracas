import styled from 'styled-components'
import { ModalStyled } from 'components/Modal/styled'

export const SpinnerStyled = {
  Container: styled(ModalStyled.Container)``,
  Core: styled.div`
    border: 6px solid #1a5187;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border-left-color: transparent;
    animation: spin 1s linear infinite;

    @keyframes spin {
      0% {
        transfrom: rotate(0deg)
      }

      100% {
        transform: rotate(360deg)
      }
    }
  `
}