// @ts-nocheck
import styled from '@emotion/styled'

export const ButtonStyled = styled.button`
  min-width: 3rem;
  min-height: 2rem;
  padding: 10px;
  border-radius: 3px;
  background-color: ${({ primary, secondary }) => {
    if (primary) return '#FFC107'
    if (secondary) return '#1565C0'
    if (!secondary && !secondary) return 'blueviolet'
  }
  };

  &:hover {
    opacity: 1.1;
  }

  &:focus {
    box-shadow: 1px 1px 5px black;
  }
`