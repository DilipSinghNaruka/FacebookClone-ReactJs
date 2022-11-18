import React from 'react'
import LeftSBGroup from './LeftSideBar/LeftSBGroup'
import CenterSBGroup from './CeneterSideBar/CenterSBGroup'
import RightSBGroup from './RightSideBar/RightSBGroup'
import './GroupsMainpage.css'

function GroupsMainpage() {
  return (
    <div className='Group__Container'>
      <LeftSBGroup />
      <CenterSBGroup />
      <RightSBGroup />

    </div>
  )
}

export default GroupsMainpage