import React from 'react'
import { Col } from 'antd'

import VerifImage from "../assets/images/verification.png"

export default function PRLink() {
  document.title = "Verify Password Reset"
  return (
    <>
    
      <Col span={10} lg={{span: 10}} md={{span: 14}} sm={{span: 18}} xs={{span: 22}} className="page-verify-container">

          <img src={VerifImage} alt="email envelope" className="verify-image" />

          <p className="verify-text">Please Check your inbox for the verification link sent to your Email</p>

          

      </Col>
    
    </>
  )
}
