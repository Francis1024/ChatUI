import React from 'react'
import Avatar from './index'
import 'story.css'
import face1 from 'assets/images/face-male-1.jpg'

export default {
  title: 'Avatar-头像组件',
  component: Avatar,
}

export const Default = () => <Avatar src={face1}></Avatar>
export const Sizes = () => {
  return (
    <div className="row-elements">
      <Avatar src={face1} size="28px"></Avatar>
      <Avatar src={face1} size="38px"></Avatar>
      <Avatar src={face1} size="48px"></Avatar>
      <Avatar src={face1} size="58px"></Avatar>
    </div>
  )
}

export const WithStatus = () => {
  return (
    <div className="row-elements">
      <Avatar src={face1} status="online"></Avatar>
      <Avatar src={face1} status="offline"></Avatar>
      <Avatar
        src={face1}
        status="offline"
        size="72px"
        statusIconSize="12px"
      ></Avatar>
    </div>
  )
}
