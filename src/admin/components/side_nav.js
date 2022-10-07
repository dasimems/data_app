import React from 'react'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"

export default function SideNav(props) {

  var linkTextStyle = {
    display: props.open? "inline" : "none"
  }
  return (
    <>
    
        <nav>
        
          <div className='nav-links'>

            <div className="nav-user-short-details">

              <div className="user-image"></div>
            
            </div>
          
            <div className="nav-link-content">
            
              <Link to="/user">
              
                <span className="icon"><FaHome /> </span>
                <span className="link-text" style={linkTextStyle}>Dashboard</span>
              
              </Link>
              
            </div>
          
          </div>
        
        </nav>
    
    </>
  )
}
