import React from 'react'
import './RightSideBarProp.css'

function RightSideBarProp(props) {
  return (
    <div className='RightSBP__container'>
<div className='RightSB__bottom__icon'>

{props.icon}

</div>
<div className='RightSB__bottom__title'>
  {props.title}
</div>
</div>
   
  )
}

export default RightSideBarProp



