import React, { useState, useEffect } from 'react';
import { Col , Button, message } from 'antd';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function PRChangePassword() {
  document.title = "Change Password";
  var changePasswordProps = {

      passwordOne: "",
      passwordOneErr: "",
      passwordTwo: "",
      passwordTwoErr: "",
      passwordVisible: false,

    },
    buttonProps = {
      buttonDisabled: true,
      buttonText: "Change Password"
    },
    [passwordState, setPasswordState] = useState(changePasswordProps),
    [buttonState, setButtonState] = useState(buttonProps),
    navigate = useNavigate();

    function handleInput(e){

      var inputedValue = e.target.value.trim(),
        err = "";

      if(e.target.id === "password-one"){

        if(inputedValue === ""){

          err = "Please fill the above field"

        }else if(inputedValue.length < 8){

          err = "Please your password must be 8 or more characters"

        }

        setPasswordState((prevState)=>{
          return({
            ...prevState,
            passwordOne: inputedValue,
            passwordOneErr: err
          })
        })

      }

      if(e.target.id === "password-two"){

        if(passwordState.passwordOne === ""){

          inputedValue = "";
          err = "Please fill in the previous password field";
          
        }else if(passwordState.passwordOne.length < 8){

          inputedValue = "";
          err = "Please password in previous field must be 8 or more characters";
          
        }else if(passwordState.passwordOne !== inputedValue){

          err = "Inputed Password doesn't match with the previous one";

        }

        setPasswordState((prevState)=>{
          return({
            ...prevState,
            passwordTwo: inputedValue,
            passwordTwoErr: err
          })
        })
      }

    }

    function changePasswordState(){

      setPasswordState((prevState)=>{
        return({
          ...prevState,
          passwordVisible: !passwordState.passwordVisible
        })
      })

    }

    useEffect(() => {

      if(passwordState.passwordOne !== "" && passwordState.passwordOne.length > 7 && passwordState.passwordTwo !== "" && passwordState.passwordTwo === passwordState.passwordOne){
        
        setButtonState((prevState)=>{
          return({
            ...prevState,
            buttonDisabled: false
          })
        })

      }else{

        setButtonState((prevState)=>{
          return({
            ...prevState,
            buttonDisabled: true
          })
        })

      }
      
    }, [passwordState])

    useEffect(()=>{

      //code to check if key is valid... if not valid, navigate to password reset page without the email set

    }, [])
    

    function changePassword(){

      if(passwordState.passwordOne !== "" && passwordState.passwordOne.length > 7 && passwordState.passwordTwo !== "" && passwordState.passwordTwo === passwordState.passwordOne){

        setButtonState((prevState)=>{
          return({
            ...prevState,
            buttonDisabled: true,
            buttonText: "Changing..."
          })
        })

        //promisecode to change password

        setTimeout(()=>{

          message.success("Password Changed. You can login now with your new password", 1).then(()=> {

            message.loading("Redirecting", 2.5);
            setTimeout(()=>{navigate("/login")}, 2000);
          
          })

        }, 2000)

      }

    }

  return (
    <>


      <Col span={9} lg={{span: 9}} md={{span: 11}} sm={{span: 14}} xs={{span: 22}} className="page-login-container">


      <div className="login-header"><h1>Change Password</h1></div>

      <div className="form-container">


        <div className="form-content">
                      
          <label htmlFor="password-one">Password <span className="required">*</span></label>

          <div className="password-input">
              
              <input type={passwordState.passwordVisible? "text": "password"} name="password-one" id="password-one" onChange={handleInput} value={passwordState.passwordOne} />

              <Button type="primary" onClick={changePasswordState}>

                  {passwordState.passwordVisible? <FaEyeSlash /> : <FaEye />}
                  
              </Button>

          </div>

          {passwordState.passwordOneErr !== ""? <p className="input-err">{passwordState.passwordOneErr}</p>: ""}



        </div>

        <div className="form-content">
                      
          <label htmlFor="password-two">Repeat Password <span className="required">*</span></label>

          <div className="password-input">
              
              <input type={passwordState.passwordVisible? "text": "password"} name="password-two" id="password-two" onChange={handleInput} value={passwordState.passwordTwo} />

              <Button type="primary" onClick={changePasswordState}>

                  {passwordState.passwordVisible? <FaEyeSlash /> : <FaEye />}
                  
              </Button>

          </div>

          {passwordState.passwordTwoErr !== ""? <p className="input-err">{passwordState.passwordTwoErr}</p>: ""}



        </div>

        <div className="form-content content-center">
                    
            <Button type="primary" onClick={changePassword} disabled={buttonState.buttonDisabled}> {buttonState.buttonText} </Button>

        </div>

      </div>

      
      
      
      </Col>
    
    
    </>
  )
}
