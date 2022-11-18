import './StoryReel.css';
import Story from './Story';
import Img1 from '../../Images/Img1.jpg'
import Img2 from '../../Images/Img2.jpg'
import Img3 from '../../Images/Img3.jpg'
import Img4 from '../../Images/Img4.jpg'
import Img5 from '../../Images/Img5.jpg'
import Png1 from '../../Images/Png1.jpg'
import Png2 from '../../Images/Png2.jpg'
import Png3 from '../../Images/Png3.jpg'
import Png4 from '../../Images/Png4.jpg'
import Png5 from '../../Images/Png5.jpg'

import React from 'react'
function Feed() {
  return (
    <div className='feedsclass'>
        <Story profilesrc={Png1}
            title="first story"
            Image={Img1}
        />
        <Story profilesrc={Png2}
            title="second story"
            Image={Img2}
        />
        <Story profilesrc={Png3}
            title="third story"
            Image={Img3}
        />
        <Story profilesrc={Png4}
            title="fourth story"
            Image={Img4}
        />
        <Story profilesrc={Png5}
            title="fifth story"
            Image={Img5}
        />
    </div>
  )
}

export default Feed;