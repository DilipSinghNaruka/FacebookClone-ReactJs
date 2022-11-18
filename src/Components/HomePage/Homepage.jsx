import React from 'react';
import Header from './Header/Header'
import  './Homepage.css'
import LeftsideBarContant from '../HomePage/Leftsidebar/LeftsideBarContant'
import CenterBodyDiv from './Center/CenterBodyDiv';
import RightSideBar from './RightSideBar/RightSideBar'
function Homepage() {
  return (
    
    <>
    <div className='Homapage__fullPage'>
    <Header/>
    <div className='Homapage__Body'>
    
    <LeftsideBarContant/>
    <CenterBodyDiv/>
    <RightSideBar/>

    </div>
    </div>
    </>
  )
}

export default Homepage