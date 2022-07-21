import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row } from "antd";

import LandingPageContent from "./components/landing_page_content";

import { useParams } from "react-router-dom";
import Login from "./components/login";
import Verify from "./components/verify";
import PasswordReset from "./components/password_reset";
import Signup from "./components/signup";
import './assets/styles/index.css';

function App() {

  
  var pageLinkParams = useParams(),
    pageLinks = [
      {
          link: "home",
          label: "Home",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "service",
          label: "Service",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "about",
          label: "About",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "price",
          label: "Price",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "testimonial",
          label: "Testimonial",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "faq",
          label: "FAQ",
          borderAvailable: false,
          followHash: true
      },
      {
          link: "login",
          label: "Sign In",
          borderAvailable: true,
          followHash: false
      }
  ],
  pageProps = {
    component: <LandingPageContent />,
    bgColor: "white"
  },
  [pageState, setPageState] = useState(pageProps);


  useEffect(()=>{

    var hashName = window.location.hash,
      links = pageLinkParams["*"].split("/"),
      color = "rgb(248, 248, 248)";

        
      if(hashName === ""){
        window.scrollTo({
          top: 0,
          left: 0
        })
      }

        if(links[0] === "login"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <Login />,
                bgColor: color
              })
          })

        }else  if(links[0] === "signup"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <Signup />,
                bgColor: color
              })
          })

        }else  if(links[0] === "verify"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <Verify/>,
                bgColor: color
              })
          })

        }else  if(links[0] === "password-reset"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <PasswordReset/>,
                bgColor: color
              })
          })

        }else{

          setPageState((prevState)=>{
            return({
              ...prevState,
              component: <LandingPageContent />
            })
        })

        }



  }, [pageLinkParams]);


  

  return (
    <>

      <Header links={pageLinks}/>

      <Row justify="center" className="page-sections" style={{background: pageState.bgColor}}>

        {pageState.component}
 
      </Row>

      <Footer />

    </>
  );

}

export default App;
