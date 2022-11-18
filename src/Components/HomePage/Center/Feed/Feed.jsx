import React from 'react';
import './Feed.css'
import { Avatar } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Img1 from '../../Images/Img1.jpg'

function Feed({profilePic, image, username, timestamp, message,}) {
    return (
        <div className="post">
            <div className="post__top">
                <Avatar src={profilePic}
                    className="post__avatar" />
                <div className="post__topInfo">
                    <h3>{username}</h3>
                    <p>{new Date(timestamp?.toDate()).toUTCString()}</p>
                </div>

            </div>
            <div className="post__bottom">
                <p>
                   {message}
                </p>
            </div>
            <div className="post__image">
                <img src={image} alt="" />
            </div>
            <div className="post__options">
                <div className="post__option">
                <ThumbUpOffAltIcon/>
                <p>Like</p>
                </div>
                <div className="post__option">
                <ChatBubbleOutlineIcon/>
                <p>Comment</p>
                </div>
                <div className="post__option">
                <NearMeIcon/>
                <p>Share</p>
                </div>
                <div className='post__option'>
                    <AccountCircleIcon/>
                    <ExpandMoreIcon/>
                </div>
            </div>
        </div>
    )
}

export default Feed