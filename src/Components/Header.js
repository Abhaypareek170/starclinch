import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
      <div className="Header">
        <div className="Header_child">
          <div className="logo_div">
            <img src="https://verdant-biscuit-f278ad.netlify.app/Vectorlogo.ea2d63f5.png" alt=""/> 
            <p className="medium">StarClinch</p>
            </div>
            <div className="user_name">
              <p className="small">Hello, Manish</p>
            </div>
          </div>
        </div>
    </>
  )
}

export default Header