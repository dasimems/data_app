import React, { useEffect, useState } from 'react'
import { Button, Col, message } from 'antd'
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {

    var signupProps = {
      userName: "",
      passwordTwo: "",
      passwordOne: "",
      fullName: "",
      address: "",
      referrer: "",
      email: "",
      mobileNumber: "",
      passwordVisible: false,
      userNameErr: "",
      fullNameErr: "",
      emailErr: "",
      passWordTwoErr: "",
      mobileNumberErr: "",
      addressErr: "",
      passWordOneErr: "",
      referrerReadOnly: false
  },
  buttonProps = {
    buttonText: "Sign Up",
    buttonDisabled: true,
  },
  [signupState, setSignupState] = useState(signupProps),
  [buttonState, setButtonState] = useState(buttonProps),
  key="updatable",
  navigate = useNavigate();

    function handleInput(e){

        var inputedValue = e.target.value.trim(),
        err = "",
        mobileNumRequiredLength = 10,
        usernameRequiredLength = 3,
        passwordRequiredLength = 8,
        textOnlyReg = /^[a-zA-Z ]+$/,
        mobileNumReg = /^[0-9+()]+$/,
        emailReg = /^/;

        if(e.target.name === "signup-fullname"){
            
            if(inputedValue === ""){

                err = "Full name field can't be empty";
            }else{

                if(!textOnlyReg.test(inputedValue)){
                    err = "Only alphabets is allowed";
                }
            }


            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    fullName: inputedValue,
                    fullNameErr: err
                })

            });
        }

        if(e.target.name === "signup-username"){

            if(inputedValue === ""){

                err = "Username field can't be empty";

            }else{
            
                if(inputedValue.length < usernameRequiredLength){
                    err = `Username must be at least ${usernameRequiredLength} characters`;
                }
            }

            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    userName: inputedValue,
                    userNameErr: err
                })

            });
        }

        if(e.target.name === "signup-email"){

            if(inputedValue === ""){

                err = "Email field can't be empty";

            }

            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    email: inputedValue,
                    emailErr: err
                })

            });
        }

        if(e.target.name === "signup-mobile-number"){

            if(inputedValue === ""){

                err = "Please input your mobile number";

            }else{

                if(!mobileNumReg.test(inputedValue)){

                    
                    if(signupState.mobileNumber.length < mobileNumRequiredLength){
                        err = "Please input a vaild mobile number";
                    }

                    inputedValue = signupState.mobileNumber;

                }else{

                    if(inputedValue.length < mobileNumRequiredLength){

                        err = `Please input a valid mobile number`;
                        
                    }
                }
            }

            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    mobileNumber: inputedValue,
                    mobileNumberErr: err
                })

            });
        }

        if(e.target.name === "signup-address"){

            if(inputedValue === ""){

                err = "Please input your home address";

            }

            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    address: inputedValue,
                    addressErr: err
                })

            });
        }

        if(e.target.name === "signup-referrer"){

            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    referrer: inputedValue
                })

            });
        }

        if(e.target.name === "signup-password-one"){

            if(inputedValue === ""){

                err = "Password field can't be empty";
            }else{

                if(inputedValue.length < passwordRequiredLength){
                    err = `Password must not be less than ${passwordRequiredLength} characters`;
                }

            }
            
            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    passwordOne: inputedValue,
                    passWordOneErr: err
                })

            });
        }

        if(e.target.name === "signup-password-two"){

            if(signupState.passwordOne === ""){
                inputedValue = "";
                err = "Please fill the previous password box first";
            }else{

                if(signupState.passwordOne !== inputedValue){
                    err= "Password doesn't match with the previous one";
                }
            }
            
            setSignupState((prevState)=>{

                return({
                    ...prevState,
                    passwordTwo: inputedValue,
                    passWordTwoErr: err
                })

            });
        }

    }

    useEffect(()=>{

        
    var mobileNumRequiredLength = 10,
        usernameRequiredLength = 3,
        passwordRequiredLength = 8,
        textOnlyReg = /^[a-zA-Z ]+$/,
        mobileNumReg = /^[0-9+()]+$/,
        emailReg = /^/

        if(signupState.fullName.trim() !== "" && textOnlyReg.test(signupState.fullName) && signupState.userName.trim() !== "" && signupState.userName.length >= usernameRequiredLength && signupState.email.trim() !== "" && signupState.mobileNumber.trim() !== "" && mobileNumReg.test(signupState.mobileNumber) && signupState.mobileNumber >= mobileNumRequiredLength && signupState.address.trim() !== "" && signupState.passwordOne.trim() !== "" && signupState.passwordOne.length >= passwordRequiredLength && signupState.passwordTwo === signupState.passwordOne){

            setButtonState((prevState)=>{
                return({
                    ...prevState,
                    buttonDisabled: false
                })
            })
        }

    }, [signupState]);


    function signUserUp(){

         var mobileNumRequiredLength = 10,
        usernameRequiredLength = 3,
        passwordRequiredLength = 8,
        textOnlyReg = /^[a-zA-Z ]+$/,
        mobileNumReg = /^[0-9+()]+$/,
        emailReg = /^/

        if(signupState.fullName.trim() !== "" && textOnlyReg.test(signupState.fullName) && signupState.userName.trim() !== "" && signupState.userName.length >= usernameRequiredLength && signupState.email.trim() !== "" && signupState.mobileNumber.trim() !== "" && mobileNumReg.test(signupState.mobileNumber) && signupState.mobileNumber >= mobileNumRequiredLength && signupState.address.trim() !== "" && signupState.passwordOne.trim() !== "" && signupState.passwordOne.length >= passwordRequiredLength && signupState.passwordTwo === signupState.passwordOne){
            var email = signupState.email;

            setButtonState((prevState)=>{
                return({
                    ...prevState,
                    buttonDisabled: true,
                    buttonText: "Please Wait..."
                })
            })

            //code to register user

            setTimeout(()=>{
                
                navigate(`/verify?email=${email}`);

            }, 3000)

        }

        // if(signupState.userName !== "" && signupState.passwordOne !== ""){

        //   setButtonState((prevState)=>{
        //         return({
        //             ...prevState,
        //             buttonDisabled: true,
        //             buttonText: "Please Wait..."
        //         })
        //     });

        //   //promise code to check login details 

        //   setTimeout(()=>{

        //         message.success({
        //             content: "Login Successfull",
        //             key
                    
        //         })

        //         setTimeout(()=>{
        //             message.loading({
        //                 content: "Redirecting...",
        //                 duration: 5,
        //                 key
                        
        //             })

        //         }, 1000)


        //   }, 3000)

        // }else{

        //     if(signupState.fullName === ""){
        //         var fullNameElement = document.getElementById("signup-fullname");

        //         setSignupState((prevState)=>{

        //             return({
        //                 ...prevState,
        //                 fullNameErr: "Please input your full name"
        //             })

        //         });

        //         fullNameElement.focus();

        //     }else if(signupState.userName === ""){
        //         var userNameElement = document.getElementById("signup-username");

        //         setSignupState((prevState)=>{

        //             return({
        //                 ...prevState,
        //                 userNameErr: "Please input a username"
        //             })

        //         });

        //         userNameElement.focus();
        //     }

            
        // }
    }

    function changePasswordState(){

    setSignupState((prevState)=>{
        return({
            ...prevState,
            passwordVisible: !signupState.passwordVisible
        })
    });

    }
  return (
    <>
    
      
        <Col span={9} lg={{span: 9}} md={{span: 11}} sm={{span: 14}} xs={{span: 22}} className="page-login-container">

            <div className="login-header"><h1>Sign Up</h1></div>

            <div className="form-container">

                <div className="form-content">

                    <label htmlFor="signup-fullname">Full Name <span className="required">*</span></label>

                    <input type="text" name="signup-fullname" id="signup-fullname" onChange={handleInput} value={signupState.fullName} />

                    {signupState.fullNameErr !== ""? <p className="input-err">{signupState.fullNameErr}</p>: ""}

                    

                </div>

                <div className="form-content">

                    <label htmlFor="signup-username">Username <span className="required">*</span></label>

                    <input type="text" name="signup-username" id="signup-username" onChange={handleInput} value={signupState.userName} />

                    {signupState.userNameErr !== ""? <p className="input-err">{signupState.userNameErr}</p>: ""}

                </div>

                <div className="form-content">

                    <label htmlFor="signup-email">Email <span className="required">*</span></label>

                    <input type="email" name="signup-email" id="signup-email" onChange={handleInput} value={signupState.email} />

                    

                    {signupState.emailErr !== ""? <p className="input-err">{signupState.emailErr}</p>: ""}

                </div>

                <div className="form-content">

                    <label htmlFor="signup-mobile-number">Mobile Number <span className="required">*</span></label>

                    <input type="tel" name="signup-mobile-number" id="signup-mobile-number" onChange={handleInput} value={signupState.mobileNumber} />

                    {signupState.mobileNumberErr !== ""? <p className="input-err">{signupState.mobileNumberErr}</p>: ""}

                </div>

                <div className="form-content">

                    <label htmlFor="signup-address">Address <span className="required">*</span></label>

                    <input type="text" name="signup-address" id="signup-address" onChange={handleInput} value={signupState.address} />

                    {signupState.addressErr !== ""? <p className="input-err">{signupState.addressErr}</p>: ""}

                </div>

                <div className="form-content">

                    <label htmlFor="signup-referrer">Referrer [optional]</label>

                    <input type="text" name="signup-referrer" id="signup-referrer" onChange={handleInput} value={signupState.referrer} readOnly={signupState.referrerReadOnly}/>

                </div>

                <div className="form-content">
                    
                    <label htmlFor="signup-password-one">Password <span className="required">*</span></label>

                    <div className="password-input">
                        
                        <input type={signupState.passwordVisible? "text": "password"} name="signup-password-one" id="signup-password-one" onChange={handleInput} value={signupState.passwordOne} />

                        <Button type="primary" onClick={changePasswordState}>

                            {signupState.passwordVisible? <FaEyeSlash /> : <FaEye />}
                            
                        </Button>

                    </div>

                    {signupState.passWordOneErr !== ""? <p className="input-err">{signupState.passWordOneErr}</p>: ""}



                </div>

                <div className="form-content">
                    
                    <label htmlFor="signup-password-two">Repeat Password <span className="required">*</span></label>

                    <div className="password-input">
                        
                        <input type={signupState.passwordVisible? "text": "password"} name="signup-password-two" id="signup-password-two" onChange={handleInput} value={signupState.passwordTwo} />

                        <Button type="primary" onClick={changePasswordState}>

                            {signupState.passwordVisible? <FaEyeSlash /> : <FaEye />}
                            
                        </Button>

                    </div>

                    {signupState.passWordTwoErr !== ""? <p className="input-err">{signupState.passWordTwoErr}</p>: ""}


                </div>

                <div className="form-content content-center">
                    
                    <Button type="primary" onClick={signUserUp} disabled={buttonState.buttonDisabled}> {buttonState.buttonText} </Button>

                </div>

                <div className="form-content content-center">
                    
                    <p className="sign-up-text">Already a user?<Link to="/login">Login</Link></p>

                </div>

            </div>

        </Col>

    </>
  )
}
