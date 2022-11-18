import React from 'react';
import './LeftsideBar.css'

function LeftsideBar(props) {
  return (

    <>
      <div className='LeftsideBar__container'>
        <div className='LeftsideBar__innerDiv'>
          {props.icon}
        </div>
        
        <div className='LeftsideBar__title'>
        {props.title} 
        </div>
        
      </div>
    </>



  )
}

export default LeftsideBar