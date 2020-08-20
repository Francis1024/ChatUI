import { css } from 'styled-components'

export const circle = (color, size = '8px') => css`
  width: ${size};
  height: ${size};
  background-color: ${color};
  border-radius: 50%;
`
