// @ts-nocheck
import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  transition: filter ease-in-out 300ms;
  transition: transform ease-in-out 100ms;
  min-width: 120px;
  min-height: 2rem;
  padding: 10px;
  cursor: pointer;
  border-radius: 3px;
  color: ${({ primary, secondary }) => {
    if (primary) return '#1565C0'
    if (secondary) return '#ffc107'
    if (!secondary && !secondary) return 'white'
  }};
  font-weight: bold;
  background-color: ${({ primary, secondary }) => {
    if (primary) return '#ffc107'
    if (secondary) return '#1565C0'
    if (!secondary && !secondary) return 'blueviolet'
  }};

  &:disabled, [disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
  cursor: not-allowed;
  }


  &:hover {
    filter: opacity(95%);
  }

  &:focus {
    box-shadow: 1px 1px 5px #00000063;
    outline: none;
  }

  &:active {
    transform: scale(0.9)
  }
`