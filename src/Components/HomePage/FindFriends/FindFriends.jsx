import React from 'react'
import SettingsIcon from '@mui/icons-material/Settings';
import './FindFriends.css'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonRemoveIcon from '@mui/icons-material/PersonRemove';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import PersonIcon from '@mui/icons-material/Person';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {NavLink} from "react-router-dom"

function FindFriends() {
    return (
        <div className='FindFriend__container'>
            <div className="FindFriend__leftSB">
                <div className='FindFriend__leftSB__Top'>
                    <span>
                        Friends
                    </span>

                    <div className='FindFriend__leftSB__top__icons'>
                        <SettingsIcon sx={{ width: 30, height: 25,  }} />
                    </div>
                </div>
                <div>
                <NavLink to="/home">
                <FindFriend__leftSB__bottom__prop text="Home" icon1={<PeopleAltIcon sx={{ width: 30, height: 30, }}/>} />
                </NavLink>
                </div>

                <FindFriend__leftSB__bottom__prop text="Friend requests" icon1={<PersonRemoveIcon sx={{ width: 30, height: 30, }} />} icon2={<ArrowForwardIosIcon/>} />

                <FindFriend__leftSB__bottom__prop text="Suggestions" icon1={<PersonAddIcon sx={{ width: 30, height: 30, }} />} icon2={<ArrowForwardIosIcon/>} />

                <FindFriend__leftSB__bottom__prop text="All Friends" icon1={<PersonIcon sx={{ width: 30, height: 30, }} />} icon2={<ArrowForwardIosIcon/>} />

                <FindFriend__leftSB__bottom__prop text="Birthdays" icon1={<CardGiftcardIcon sx={{ width: 30, height: 30, }} />}  />

                <FindFriend__leftSB__bottom__prop text="Custom lists" icon1={<PersonIcon sx={{ width: 30, height: 30, }} />} icon2={<ArrowForwardIosIcon/>} />
            </div>


            <div className="FindFriend__rightSB">
                <div className="FindFriend__rightSB__container">
                
                
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>
                <FindFriend__rightSB__prop image="https://scontent.fjai9-1.fna.fbcdn.net/v/t39.30808-1/274701511_139729431858078_1241318722151949520_n.jpg?stp=dst-jpg_p240x240&_nc_cat=105&ccb=1-7&_nc_sid=7206a8&_nc_ohc=sjL9S1yKUHUAX98yj_N&_nc_ht=scontent.fjai9-1.fna&oh=00_AT_AfsBa6TcAOxbjD26H0HdK2k3zWxQ9Vg1nGfZQN3snzA&oe=62D53EFB" title="Dilip Singh"/>

                </div>
            </div>

        </div>

    )
}

export default FindFriends;

export function FindFriend__leftSB__bottom__prop(props) {
    return (
        <div className="FindFriend__leftSB__bottom">
            <div className="FindFriend__leftSB__bottom__leftSD">
                <div className="FindFriend__leftSB__bottom__icons1">
                    {props.icon1}

                </div>
                <div className="FindFriend__leftSB__bottom__text">
                    {props.text}
                </div>
            </div>

            <div className="FindFriend__leftSB__bottom__icons2">
            {props.icon2}

            </div>
        </div>


    )

}


export function FindFriend__rightSB__prop(props){
    return(
    <div className="FindFriend__rightSB__prop__container">
        <div className="FindFriend__rightSB__prop__image">
            <img src={props.image} alt="nothing" />
        </div>
        <div className="FindFriend__rightSB__bottom">
        <div className="FindFriend__rightSB__prop__title">
        {props.title}
            
        </div>
        <div className="FindFriend__rightSB__prop__btn1">
            <button>Confirm</button>
            
        </div>
        <div className="FindFriend__rightSB__prop__btn2">
            <button>Delete</button>

        </div>
        </div>
    </div>
    )
}
