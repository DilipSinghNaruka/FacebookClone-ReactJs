import React from 'react'
import StoryReel from './Story/StoryReel'
import CreatePost from './Create Post/CreatePost'
import Feed2 from './Feed/Feed2'
import CreateRoom from './CreateRoom/CreateRoom'
import  './CenterBodyDiv.css'


function CenterBodyDiv() {
  return (
    <div className='CenterBD__container'>
    <StoryReel/>
    <CreatePost/>
    <CreateRoom/>
    <Feed2/></div>
  )
}

export default CenterBodyDiv