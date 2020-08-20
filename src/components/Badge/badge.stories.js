
import React from 'react'
import Badge from './index'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFolder,
} from '@fortawesome/free-solid-svg-icons'

export default {
  title: 'UI组件/Badge',
  component: Badge,
}

export const Default = () => <Badge count={5} />
export const DotVariant = () => <Badge show variant='dot' >
    <FontAwesomeIcon
        icon={faFolder}
        color='blue'
        style={{ fontSize: '34px', marginRight: '20px' }}
      ></FontAwesomeIcon>
</Badge>


