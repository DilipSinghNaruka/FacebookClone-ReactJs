import React from 'react'
import LeftsideBar from './LeftsideBar';
import { Avatar } from '@mui/material';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import GroupsIcon from '@mui/icons-material/Groups';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import FlagIcon from '@mui/icons-material/Flag';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './LeftsideBarContant.css'
import BarChartIcon from '@mui/icons-material/BarChart';
// import PeopleAltIcon from './Icons/PeopleAltIcon.png'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavLink from 'react'

function LeftsideBarContant() {
  return (
    
    <>
    <div className='LeftSBContant__container'>

    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<Avatar sx={{width:"30px", height:"30px"}}/>} title="Dilip Singh " />
    </div> 
    <div className='LeftSBContant__personaldivForiconText'>
   
    <LeftsideBar icon={<PeopleAltIcon sx={{color:'blue'}}/>} title="Find Friend" />
    
    
    </div>

    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<GroupsIcon sx={{color:'blue'}}/>} title="Group" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<StoreIcon sx={{color:'blue'}}/>} title="Marketplace" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<OndemandVideoIcon sx={{color:'blue'}}/> }title="Watch" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<MoreTimeIcon sx={{color:'blue'}}/>} title="Memories"/>
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<BookmarkAddIcon sx={{color:''}}/>}  title="Saved" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<FlagIcon sx={{color:'orange'}}/>} title="Pages" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<AvTimerIcon/>} title="Most Recent" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<StarBorderIcon/>} title="Favourites" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<BarChartIcon sx={{color:'blue'}}/>} title="Ads Manager" />
    </div>
    <div className='LeftSBContant__personaldivForiconText'>
    <LeftsideBar icon={<ExpandMoreIcon sx={{color:'blue'}}/>} title="See More" />
    </div>
    
    


</div>
    </>
  )
}

export default LeftsideBarContant