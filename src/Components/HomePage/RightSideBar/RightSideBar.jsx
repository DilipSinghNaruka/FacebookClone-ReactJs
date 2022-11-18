import React from 'react'
import './RightSideBar.css'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import RightSideBarProp from './RightSideBarProp'
import { Avatar } from '@mui/material';

function RightSideBar(props) {
  return (
    <div className='RightSB__container'>
      <div className='RightSB__top'>
        <h5>Sponsored</h5>
        <hr />
      </div>
      <div className='RightSB__middle'>
        <div className='RightSB__middle_left'>
          Contacts
        </div>
        <div className='RightSB__middle_right'>
          <VideoCallIcon sx={{paddingRight:"12px"}} />
          <SearchIcon sx={{paddingRight:"12px"}}/>
          <MoreHorizIcon/>

        </div>

      </div>
      <div className='RightSB__bottom'>
      <RightSideBarProp icon={<Avatar/>} title="dilip Singh "/ >
      <RightSideBarProp icon={<Avatar/>} title="Balram Saini"/ >
      <RightSideBarProp icon={<Avatar/>} title="akshay jangid "/ >
      <RightSideBarProp icon={<Avatar/>} title="Raghav joshi"/ >
      <RightSideBarProp icon={<Avatar/>} title="Bhavyansh pareek "/ >
      <RightSideBarProp icon={<Avatar/>} title="Dhruv Sharma"/ >
      <RightSideBarProp icon={<Avatar/>} title="Monu Meena"/ >
      <RightSideBarProp icon={<Avatar/>} title="Shashi mourya "/ >
      <RightSideBarProp icon={<Avatar/>} title="Nargis Syed"/ >
      <RightSideBarProp icon={<Avatar/>} title="Zainul Ali"/ >
      <RightSideBarProp icon={<Avatar/>} title="Roopprakash"/ >
      <RightSideBarProp icon={<Avatar/>} title="Animesh"/ >
      <RightSideBarProp icon={<Avatar/>} title="Ramparshad "/ >
      <RightSideBarProp icon={<Avatar/>} title="Ramphool"/ >


      </div>
      <div className='RightSB__lastBottom'>
      <hr />
        <span> Group Conversastion</span>
        <div className='RightSB__lastBottom__iconText'>
        <Avatar/>
        <span>
          Create New Group
        </span>

        </div>
      </div>

    </div>
  )
}

export default RightSideBar