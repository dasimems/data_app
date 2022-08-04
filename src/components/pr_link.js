import React from 'react'
import { Button, Col } from 'antd'

import VerifImage from "../assets/images/verification.png"

export default function PRLink() {
  document.title = "Verify Password Reset"

  //code to check if email is available and password reset link has been sent else redirect to default password reset page where the user is required to input his or her email

  function resendMail(){

  }

  return (
    <>
    
      <Col span={10} lg={{span: 10}} md={{span: 14}} sm={{span: 18}} xs={{span: 22}} className="page-verify-container">

          <img src={VerifImage} alt="email envelope" className="verify-image" />

          <p className="verify-text">Please Check your inbox for the verification link sent to your Email</p>

          <Button type="primary" className="redo-button" onClick={resendMail}>Resend link</Button>

          

      </Col>
    
    </>
  )
}
