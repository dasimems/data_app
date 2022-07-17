import { Button, Col, message } from 'antd'
import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export default function Login() {

    var loginProps = {
            userName: "",
            password: "",
            passwordVisible: false,
            buttonText: "Login",
            buttonDisabled: false,
            loginErr: ""
        },
        [loginState, setLoginState] = useState(loginProps),
        key="updatable";

    function handleInput(e){

        var inputedValue = e.target.value;

        if(e.target.name === "login-username"){

            setLoginState((prevState)=>{

                return({
                    ...prevState,
                    userName: inputedValue,
                    loginErr: ""
                })

            });
        }

        if(e.target.name === "login-password"){
            
            setLoginState((prevState)=>{

                return({
                    ...prevState,
                    password: inputedValue,
                    loginErr: ""
                })

            });
        }

    }

    function logUserIn(){

        if(loginState.userName !== "" && loginState.password !== ""){

            setLoginState((prevState)=>{
                return({
                    ...prevState,
                    buttonDisabled: true,
                    buttonText: "Please Wait..."
                })
            });

           //promise code to check login details 

           setTimeout(()=>{

                message.success({
                    content: "Login Successfull",
                    key
                    
                })

                setTimeout(()=>{
                    message.loading({
                        content: "Redirecting...",
                        duration: 5,
                        key
                        
                    })

                }, 1000)


           }, 3000)

        }else{

            setLoginState((prevState)=>{
                return({
                    ...prevState,
                    loginErr: "Please both username and password field are required"
                })
            });
        }
    }

    function changePasswordState(){

        setLoginState((prevState)=>{
            return({
                ...prevState,
                passwordVisible: !loginState.passwordVisible
            })
        });

    }
  return (
    <>

        <Col span={9} lg={{span: 9}} md={{span: 11}} sm={{span: 14}} xs={{span: 22}} className="page-login-container">

            <div className="login-header"><h1>Login</h1></div>

            <div className="form-container">

                <p className="form-err" style={{opacity: loginState.loginErr === ""? 0 : 1, transition: "1s ease all"}}>{loginState.loginErr}</p>


                <div className="form-content">

                    <label htmlFor="login-username">Username <span className="required">*</span></label>

                    <input type="text" name="login-username" id="login-username" onChange={handleInput} value={loginState.userName} />

                </div>

                <div className="form-content">
                    
                    <label htmlFor="login-password">Password <span className="required">*</span></label>

                    <div className="password-input">
                        
                        <input type={loginState.passwordVisible? "text": "password"} name="login-password" id="login-password" onChange={handleInput} value={loginState.password} />

                        <Button type="primary" onClick={changePasswordState}>

                            {loginState.passwordVisible? <FaEyeSlash /> : <FaEye />}
                            
                        </Button>

                    </div>


                </div>

                <div className="form-content content-end">
                    
                    <Link to="/password-reset">Forgot Password?</Link>

                </div>

                <div className="form-content content-center">
                    
                    <Button type="primary" onClick={logUserIn} disabled={loginState.buttonDisabled}> {loginState.buttonText} </Button>

                </div>

                <div className="form-content content-center">
                    
                    <p className="sign-up-text">Don't have an account yet?<Link to="/signup">Sign up</Link></p>

                </div>

            </div>

        </Col>
    
    </>
  )
}
