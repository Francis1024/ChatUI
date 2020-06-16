import styled, { css } from 'styled-components'

const circleMixinFunc = (color) => css`
  content: '';
  display: block;
  position: absolute;
  width: 8px;
  height: 8px;
  background-color: ${color};
  border-radius: 50%;
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
    ${circleMixinFunc('#fff')}
    transform: scale(2);
  }
  &::after {
    ${({ theme }) => circleMixinFunc(theme.green)}
  }
`

const AvatarClip = styled.div`
  width: 48px;
  height: 48px;
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
