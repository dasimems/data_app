import React, { useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'
import PRChangePassword from './pr_change_password';
import PREmailInput from './pr_input_email';
import PRLink from './pr_link';

export default function PasswordReset() {
    document.title = "Reset Password";

    var [searchParams, setSearchParams] = useSearchParams(),
        resetProps = {
            component: <PREmailInput />
        },
        [resetState, setResetState] = useState(resetProps);

    useEffect(()=>{

        if(((searchParams.has("email") || searchParams.has("mail")) && (searchParams.get("email") !== "" && searchParams.get("mail") !== "")) && !searchParams.has("key")){
            //code to check if the user email is available in the database
            //code to check if reset link has been sent else send request link
            //if email not found in db, throw an invalid link

            setResetState((prevState)=>{
                return({
                    ...prevState,
                    component: <PRLink />
                })
            })

        }else if(((searchParams.has("email") || searchParams.has("mail")) && (searchParams.get("email") !== "" && searchParams.get("mail") !== "")) && searchParams.has("key") && searchParams.get("key") !== ""){

            //check if key match the key in database.
            //if key doesn't match throw an invalid link
            //
            
            
            setResetState((prevState)=>{
                return({
                    ...prevState,
                    component: <PRChangePassword />
                })
            })
            

        }else{

            setResetState((prevState)=>{
                return({
                    ...prevState,
                    component: <PREmailInput />
                })
            })
        }
        
    }, [searchParams, setSearchParams]);
  return (
    <>
        {resetState.component}
    </>
  )
}
