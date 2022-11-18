import './Story.css'
import React from 'react'
import { Avatar } from '@mui/material';


function Story({Image, profilesrc, title}) {
  return (
    <div style={{backgroundImage:`url(${Image})` }}  className='storymaindiv'>  
    
        <Avatar src={profilesrc}  className="Avatar"/>
        <h4>{title} </h4>
    </div>
  )
}

export default Story