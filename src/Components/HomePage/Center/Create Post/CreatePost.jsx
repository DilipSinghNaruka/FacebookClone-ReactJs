

import React from 'react';
import { Avatar } from '@mui/material';
import './CreatePost.css';
import VideocamIcon from '@mui/icons-material/Videocam';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { useState } from 'react';
// import firebase from "firebase"

function CreatePost() {
  const [input, setInput] =useState("");
  const [imageUrl, setImageUrl] =useState("");

  const handleSubmit = (e) =>{
    e.preventDefault();


    //some clever db stuff
    setInput("");
    setImageUrl("");

  };
  return (
    <div className='messageSender'>
    <div className='messageSender__top'>
    <Avatar/>
    <form >
      <input 
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className='messageSender__input'
      placeholder={`what's on your mind `}       />
      <input
      value={imageUrl}
      onChange={(e)=>setImageUrl(e.target.value)}
       placeholder='image URL (Optional)' />
      <button onClick={handleSubmit} type="submit"> Hidden Submit</button>
    </form>
    
    </div>

    <div className='messageSender__bottom'>
    <div className='messageSender__option'>
    <VideocamIcon style={{color: "red"}}/>
    <h3>Live Video</h3>
    </div>
    <div className='messageSender__option'>
    <PhotoLibraryIcon style={{color: "green"}}/>
    <h3>Live Video</h3>
    </div>
    <div className='messageSender__option'>
    <InsertEmoticonIcon style={{color: "yellow"}}/>
    <h3>Live Video</h3>
    </div>

    </div>

    </div>

  )
}

export default CreatePost;