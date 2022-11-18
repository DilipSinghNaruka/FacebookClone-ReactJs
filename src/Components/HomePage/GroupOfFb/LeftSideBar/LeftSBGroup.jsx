import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import FeedIcon from '@mui/icons-material/Feed';
import ExploreIcon from '@mui/icons-material/Explore';
import GroupsIcon from '@mui/icons-material/Groups';
import './LeftSBGroup.css'

function LeftSBGroup() {
  return (
    <div className='LeftSBGroup__container'>
        <div className="LeftSBGroup__top">
        <div className="LeftSBGroup__top__upper">
        <span>
                        Groups
                    </span>

                    <div className='LeftSBGroup__top__icons'>
                        <SettingsIcon sx={{ width: 40, height: 30,  }} />
                    </div>
                    </div>
                    <div className="LeftSBGroup__top__down">
                      <input type="text" placeholder='Search groups' />
                    </div>


        

       
    </div>

    <div className="LeftSBGroup__middle">
    <div className="LeftSBGroup__middle__feed">
    <LeftSBGroup2  icon = {<FeedIcon/>} text = "Your feed" />
    </div>
    <div className="LeftSBGroup__middle__feed">
    <LeftSBGroup2 icon = {<ExploreIcon/>} text = "Discover"/>
    </div>
    <div className="LeftSBGroup__middle__feed">
    <LeftSBGroup2 icon = {<GroupsIcon/>} text = "Groups you've joined"/>
    </div>
    <div className='LeftSBGroup__middle__createBtn'>
    <button > + Create New Group</button>
    <hr />
    </div>
     
    </div>

    <div className="LeftSBGroup__bottom">
    <div className="LeftSBGroup__bottom__top">
      <div className='LeftSBGroup__bottom__top__GYJ'>
        Group you've joined
      </div>

      <div className='LeftSBGroup__bottom__top__seeAll'>
        See All 
      </div>

    </div>
    <div className="LeftSBGroup__bottom__bottom">
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>
    <LeftSBGroup3 img= "https://scontent.fjai9-1.fna.fbcdn.net/v/t31.18172-8/26952508_10157049391249196_875630081080175247_o.jpg?stp=dst-jpg_s960x960&_nc_cat=104&ccb=1-7&_nc_sid=8631f5&_nc_ohc=r3EsEgw5nS8AX8Ep-Te&_nc_ht=scontent.fjai9-1.fna&oh=00_AT9HAILQIGZ2_oiIjqY6lcLoB_FOYNV2urZGG-ORMsrNhw&oe=62F7E6E1" alt=" image" text1= 'React js Group' text2 = ' Last active 2 days ago'/>



    </div>

    </div>
    </div>
  )
}

export default LeftSBGroup









 export function LeftSBGroup2(props){
  return(
    <div className="LeftSBGroup2__middle">
    <div className="LeftSBGroup2__middle__icon">
    {props.icon  }
    </div>
    <div className="LeftSBGroup2__middle__text">
      {props.text}
    </div>
  </div>
  )
}




export function LeftSBGroup3(props){
  return(
    <div className='LeftSBGroup3__container'>
      <div className="LeftSBGroup3__image">
        <img src={props.img} alt={props.alt} />
      </div>
      <div className="LeftSBGroup3__text">
      <div className='LeftSBGroup3__text1'>
      {props.text1}
        
      </div>
      <div className='LeftSBGroup3__text2'>
      {props.text2}

      </div>

      </div>
    </div>

  )
}