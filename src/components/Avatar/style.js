import styled, { css } from 'styled-components'
import { circle } from 'utils/mixins'
const circleMixinFunc = (color, size = '8px') => css`
  content: '';
  display: block;
  position: absolute;
  ${circle(color, size)}
`

// 最外层div
const StyledAvatar = styled.div`
  position: relative;
`

// icon状态
const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;
  &::before {
    ${({ size }) => circleMixinFunc('#fff', size)}
    transform: scale(2);
  }
  &::after {
    ${({ theme, status, size }) => {
      if (status === 'online') {
        return circleMixinFunc(theme.green, size)
      } else if (status === 'offline') {
        return circleMixinFunc(theme.gray, size)
      }
    }}
  }
`

const AvatarClip = styled.div`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: 50%;
  overflow: hidden;
`

// 头像图片
const AvatarImage = styled.img`
  width: 100%;
  height: 100%;

  /* 设置图片自动等比例缩放 */
  object-fit: cover;
  /* 设置图片居中 */
  object-position: center;
`

export default StyledAvatar

export { StatusIcon, AvatarClip, AvatarImage }
