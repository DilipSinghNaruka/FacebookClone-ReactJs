import React from 'react';
import Logo from '../Images/Logo.png'
import './Header.css';
// import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import GroupsIcon from '@mui/icons-material/Groups';
import {NavLink} from "react-router-dom"

function Header() {
    return (

        <div className='Header__container'>
            <div className="Header__LeftNav">
                <img src={Logo} alt="HeaderLogo" />
                <div className="Header__RightNavInput">
                    <input type="text" placeholder='Search Facebook' />
                </div>
            </div>






            <div className="header_center">

                <div className='alliconcenter'>

                    <HomeIcon fontSize="large" className='header_navigationbar_icons_for_white_backgrount' style={{ padding: "7px" }} />
                </div>
                
            
                <NavLink to="/findfriend">
                <div className='alliconcenter'>

                    <PeopleIcon fontSize="large"
                        className='header_navigationbar_icons_for_white_backgrount' style={{ padding: "7px" }}
                    />
                </div>
                </NavLink>

                <div className='alliconcenter'>
                    <GroupsIcon fontSize="large"
                        className='header_navigationbar_icons_for_white_backgrount'
                        style={{ padding: "7px" }}
                    />
                </div>
            </div>







            <div className='header__right__icons' >
                <div className='Header__rightNav'>
                    <NavLink to="/findfriend">
                    <button className='headerRighticons' style={{ backgroundColor: "#ced6d8", borderRadius: "13px", padding: "8px", border: 'none' }}>
                        Find Friend
                    </button>
                    </NavLink>
                </div>
                <div className='Header__rightNav' style={{ backgroundColor: "#fff", border: "none" }}>
                    <button>
                        <AddIcon className='headerRighticons' style={{ backgroundColor: "#ced6d8", borderRadius: "20px", border: 'none' }} />

                    </button>

                </div>

                <div className='Header__rightNav'>

                    <button>
                        <MessageIcon className='headerRighticons' />

                    </button>
                </div>

                <div className='Header__rightNav'>


                    <button>

                        <NotificationsIcon className='headerRighticons' />
                    </button>
                </div>

                <div className='Header__rightNav'>

                    <button><Avatar className='headerRighticons' sx={{ width: 28, height: 28, }} /></button>
                </div>
            </div>








        </div>



    )
}

export default Header;