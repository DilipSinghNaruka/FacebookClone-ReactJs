import React from 'react';
import './Forgate.css'
import {NavLink} from 'react-router-dom'

function Forgate() {
  return (
    <div className='Forgate__fullPage'>
      <div className="Forgate__container">
        <div className="Forgate__Navbar">
        Facebook
        </div>

        <form className='forgate__form' >
          <div className="Forgate__navInput">
            <input type="text" placeholder='Email or phone ' />
            <input type="password" placeholder='Password' />
          </div>
          <NavLink to='/'>
          <div className="Forgate__loginBtn">
            <button>Log In</button>
          </div>
          </NavLink>
          <div className="forgate__forgottenText" >
          <a href="/home" > Forgotten account?</a>
            
          </div>
        </form>
      </div>

      <div className='Forgate__innerDiv'>
      <div className="Forgate__TopText">
        Find Your Account
      </div>
      <div className="Forgate__innerFirstHr">
        <hr />
      </div>
      <div className="Forgate__paraText">
      Please enter your email address or mobile number to search for your account.
      </div>
      <div className="Forgate__innerInput">
        <input type="text" placeholder='Email address or mobile number' />
      </div>
      <div className='Forgate__innerSecondHr'>
      <hr />
      </div>
      <div className="innerButtons">
      <NavLink to='/'>

        <button className='Forgate__CancelBtn'>Cancle</button>
      </NavLink>
        <button className='Forgate__searchBtn'>Search</button>
      </div>
      </div>
    </div>






  )
}

export default Forgate