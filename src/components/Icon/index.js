import React from 'react'
import StyledIcon from './style'
import PropTypes from 'prop-types'

function Icon({
  icon: IconComponent,
  width = 24,
  height = 24,
  color,
  opacity,
  ...rest
}) {
  return (
    <StyledIcon color={color} opacity={opacity} {...rest}>
      {IconComponent && (
        <IconComponent width={width} height={height}></IconComponent>
      )}
    </StyledIcon>
  )
}

/**
 * @name Icon.propTypes 设置参数类型
 * @param  {element} icon 图标，React组件
 * @param  {number,string} width 宽度，可以是number或者string
 * @param  {number,string} height 高度，可以是number或者string
 * @param  {string} color 颜色
 * @param  {number} opacity 透明度
 */

Icon.propTypes = {
  icon: PropTypes.element,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),  // PropTypes.oneOfType 可以是数组里面任何一种类型
  height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  color: PropTypes.string,
  opacity: PropTypes.number,
}

export default Icon
