import React from 'react'
import './CenterSBGroup.css'
import Img1 from '../../Images/Img1.jpg'
import Img2 from '../../Images/Img2.jpg'
import Img3 from '../../Images/Img3.jpg'
import Img4 from '../../Images/Img4.jpg'
import Img5 from '../../Images/Img5.jpg'
import './CenterSBGroup.css'
import Feed from '../../Center/Feed/Feed'

function CenterSBGroup() {
  return (
    <div className='CenterSBGroup__container'>
    <div className="CenterSBGroup__topText">
    Recent activity

    </div>
    <Feed username="Dilip Singh" image={Img1} message="This is my message"/>
    <Feed username="Dilip Singh" image={Img2} message="This is my message"/>
    <Feed username="Dilip Singh" image={Img3} message="This is my message"/>
    <Feed username="Dilip Singh" image={Img4} message="This is my message"/>
    <Feed username="Dilip Singh" image={Img5} message="This is my message"/>

    </div>
  )
}

export default CenterSBGroup