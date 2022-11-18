import React from 'react'
import VideoCallIcon from '@mui/icons-material/VideoCall';
import Avatar from '@mui/material/Avatar';
import './CreateRoom.css'
function CreateRoom() {
    return (
        <div className="CreateRoom__container">
            <div className='createRoom__iconAndText'>
                <VideoCallIcon />
                <span>Create Room</span>
            </div>

            <div className='createRoom__icon'>
                <Avatar />
            </div>

            <div className='createRoom__icon'>
                <Avatar />
            </div>

        </div>
    )
}

export default CreateRoom