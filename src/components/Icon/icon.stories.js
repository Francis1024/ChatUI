import React from 'react'
import Icon from './index'
import { ReactComponent as SmileIcon } from 'assets/icons/smile.svg'
import {
  faCommentDots,
  faFolder,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default {
  title: 'UI组件/Icon',
  component: Icon,
}

/**
 * @name Default 默认
 */
export const Default = () => <Icon icon={SmileIcon}></Icon>
/**
 * @name CustomColor 定制颜色
 */
export const CustomColor = () => <Icon icon={SmileIcon} color="pink"></Icon>
/**
 * @name CustomSize 定制大小
 */
export const CustomSize = () => (
  <Icon icon={SmileIcon} color="pink" width="30" height="30"></Icon>
)
/**
 * @name FontAwesome 字体图标
 */
export const FontAwesome = () => (
  <FontAwesomeIcon icon={faCommentDots}></FontAwesomeIcon>
)
/**
 * @name FontAwesomeColor 字体图标颜色
 */

export const FontAwesomeColor = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ color: 'pink', marginRight: '20px' }}
      ></FontAwesomeIcon>

      <FontAwesomeIcon
        icon={faCommentDots}
        color='blue'
        style={{ fontSize: '34px', marginRight: '20px' }}
      ></FontAwesomeIcon>
       <FontAwesomeIcon
        icon={faCommentDots}
        color='#ccc'
        style={{ fontSize: '40px', marginRight: '20px' }}
      ></FontAwesomeIcon>
    </div>
  )
}

/**
 * @name FontAwesomeColor 字体图标颜色
 */

export const FontAwesomeSizes = () => {
  return (
    <div>
      <FontAwesomeIcon
        icon={faCommentDots}
        style={{ color: 'pink', marginRight: '20px' }}
      ></FontAwesomeIcon>

      <FontAwesomeIcon
        icon={faFolder}
        color='blue'
        style={{ fontSize: '34px', marginRight: '20px' }}
      ></FontAwesomeIcon>
       <FontAwesomeIcon
        icon={faStickyNote}
        color='blue'
        style={{ fontSize: '40px', marginRight: '20px' }}
      ></FontAwesomeIcon>
    </div>
  )
}