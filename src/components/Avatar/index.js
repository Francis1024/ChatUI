import React from 'react'
import PropTypes from 'prop-types'
import StyledAvatar, { StatusIcon, AvatarClip, AvatarImage } from './style'

/**
 *
 * @param {string} src 图片路径
 * @param {string} size 图片大小
 * @param {string} status 状态
 * @param {string} statusIconSize 状态icon大小
 * @param  {...any} rest 其他参数
 */
function Avatar(
  { src, size = '48px', status, statusIconSize = '8px' },
  ...rest
) {
  return (
    <StyledAvatar {...rest}>
      {/* &&,它先计算第一个表达式，若为假，就不会去处理第二个表达；否则继续处理后继表达式。从左到右选取表达式的第一个为非true的表达式的值，如果一直未找到则返回最后一个表达式的值。  */}

      {status && (
        <StatusIcon status={status} size={statusIconSize}></StatusIcon>
      )}
      <AvatarClip size={size}>
        <AvatarImage src={src} />
      </AvatarClip>
    </StyledAvatar>
  )
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  statusIconSize: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline']),
}

export default Avatar
