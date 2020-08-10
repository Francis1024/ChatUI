import { css } from 'styled-components'

export const circle = (color, size = '8px') => css`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  background-color: ${color};
  border-radius: 50%;
`
