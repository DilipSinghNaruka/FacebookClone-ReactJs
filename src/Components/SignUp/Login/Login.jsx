import React from 'react';
import { NavLink } from 'react-router-dom'
import './Login.css'

function Login() {
    return (
        <div className='Container'>
            <div className='Login__LeftDiv'>
                <div className='Login__forImage'>
                    <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook__Logo" />
                </div>
                <h2 className='Login__forText'>
                    Facebook helps you connect and share <br /> with the people in your life

                </h2>

            </div>
            <div className='Login__RightDiv'>
                <form className='Login__form'>
                    <div className="Login__input">
                        <input type="text" placeholder='Email address or phone number' className='Login__RightInput' />
                    </div>

                    <div >
                        <input type="password" placeholder='Password' className='Login__RightInput' />
                    </div>
                    <div>
                        <NavLink to='/home'>
                            <button className='Login__LoginBtn'>Log In</button> <br />
                        </NavLink>

                    </div>
                    <div className='Login__ForgateBtn'>
                        <NavLink to='/forgate'>
                            <a > Forgotten password</a>
                        </NavLink>

                    </div>
                    <hr className='Login__hr'/>
                    <div>
                        
                    <NavLink to='/Signup'>
                            <button  type="submit" className='Login__createBtn'>
                                Create New Account
                            </button>
                        </NavLink>
                    </div>





                    

                </form>

            </div>
        </div>
    )
}

export default Login