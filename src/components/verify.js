import React, { useState} from 'react';
import { Col } from 'antd';
import { Link, useSearchParams } from 'react-router-dom'
import VerifImage from "../assets/images/verification.png"

export default function Verify() {
    var searchParams = useSearchParams(),
        verifyProps = {
            text: searchParams[0].has("key")? "Verifying..." : "Please check your email for verification link to continue",
            image: VerifImage,
            isVerified: false,
            wrongLink: false
        },
        [verifyState, setVerifyState] = useState(verifyProps);

    // console.log(searchParams)
    
    if(searchParams[0].has("mail") || searchParams[0].has("email")){
        //code to check if email needs verification. if the email is already verified, redirect to login page

        if(searchParams[0].has("key")){

            //promise code to verify the key to the one in db. if the key is incorrect, redirect to home page



            setTimeout(()=>{

                setVerifyState((prevState)=>{
                    return({
                        ...prevState,
                        text: "Email verified, please click the below link to login",
                        isVerified: true
                    })
                });
            }, 3000)

        }


    }

    


  return (

    <>

        {!searchParams[0].has("mail") && !searchParams[0].has("email")? 
        
        <Col span={10} lg={{span: 10}} md={{span: 14}} sm={{span: 18}} xs={{span: 22}} className="page-verify-container">

            <p className="verify-text">This is an Invalid Link</p>

            <Link to="/home" className="login-link">Back to home</Link>
            
        </Col>
        
        
        : 
        
        <Col span={10} lg={{span: 10}} md={{span: 14}} sm={{span: 18}} xs={{span: 22}} className="page-verify-container">

            <img src={verifyState.image} alt="email envelope" className="verify-image" />

            <p className="verify-text">{verifyState.text}</p>

            {verifyState.isVerified? <Link to="/login" className="login-link">Login</Link> : ""}

        </Col>}
    
    </>
  )
}
