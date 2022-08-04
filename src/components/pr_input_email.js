import React, { useState } from 'react'
import { Col, Button } from 'antd'
import { useSearchParams } from 'react-router-dom';

export default function PREmailInput() {
  document.title = "Input Password Reset Email"

  var emailProps = {
      emailInput: "",
      emailErr: "",
      buttonText: "Send Reset Link",
      buttonDisabled: false
    },
    [emailState, setEmailState] = useState(emailProps),
    setSearchParams = useSearchParams()[1];

    function handleInput(e){


      var inputedValue = e.target.value,
          err = "",
          emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9+_.-]+\.[a-zA-Z]+$/;


      if(e.target.id === "password-reset-email"){


        setEmailState((prevState)=>{

          if(!emailReg.test(inputedValue)){
            err = "Please inout a valid email address";
          }

          return({
            ...prevState,
            emailInput: inputedValue,
            emailErr: err
          })

        })

      }

    }

    function sendResetLink(){

      var err = "",
      emailReg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9+_.-]+\.[a-zA-Z]+$/;
      if(emailState.emailInput === ""){
        err = "Please input an email address";

      }else if(!emailReg.test(emailState.emailInput)){

        err = "Please input a valid email address";

      }

      if(err !== ""){

        setEmailState((prevState)=>{
          return({
            ...prevState,
            emailErr: err
          })
        })

      }else{

        setEmailState((prevState)=>{
          return({
            ...prevState,
            buttonText: "Verifying...",
            buttonDisabled: true
          })
        })

        setTimeout(()=>{

          //promise code to check the if the email is available
          setEmailState((prevState)=>{
            return({
              ...prevState,
              buttonText: "Sending Link...",
            })
          })
  

          setTimeout(()=>{

            //promise code to send the link then change url params

            setSearchParams({
              mail: emailState.emailInput 
            })

            
    

          }, 2000)

        }, 1000)

      }
    }
    
  return (
    <>

      <Col span={9} lg={{span: 9}} md={{span: 11}} sm={{span: 14}} xs={{span: 22}} className="page-login-container">
      
        
        <div className="login-header"><h1>Password Reset</h1></div>

        <p className="login-header-description">Please input the email you used for registration. A link will be sent if an account with the email provided is found</p>



        <div className="form-container">

          <div className="form-content">

              <label htmlFor="password-reset-email">Email <span className="required">*</span></label>

              <input type="email" name="password-reset-email" id="password-reset-email" onChange={handleInput} value={emailState.emailInput} />


              {emailState.emailErr !== ""? <p className="input-err">{emailState.emailErr}</p>: ""}

          </div>

          <div className="form-content content-center">
                    
                <Button type="primary" onClick={sendResetLink} disabled={emailState.buttonDisabled}> {emailState.buttonText} </Button>

            </div>

        </div>


      
      </Col>

    
    
    </>
  )
}
