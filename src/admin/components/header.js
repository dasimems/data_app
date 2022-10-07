import { Button, Col, Row } from 'antd'
import React from 'react'
import { BiDotsVerticalRounded, BiMenu } from "react-icons/bi"

export default function Header(props) { 

  function logout(){
    //code to unset session or cookie.



  }


  return (
    <>
    
        
          <Row justify="space-betweeen" className="header">

            <Col span={5} className="header-logo">

              
              <p className="logo-text" style={{display: props.open? "block": "none" }}></p>

              <Button className="nav-open-close-button" onClick={()=>{props.navButtonClick()}}>
              
                {props.open? <BiMenu />: <BiDotsVerticalRounded />}

              </Button>
            
            </Col>
            <Col span={18} pull={1} className="header-link">

              <ul>
              
                <li><Button type="primary" className="header-logout-button" onClick={logout}>Logout</Button></li>

              </ul>

            </Col>
          
          
          </Row>
    
    </>
  )
}
