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
          borderAvailable: false
      },
      {
          link: "service",
          label: "Service",
          borderAvailable: false
      },
      {
          link: "about",
          label: "About",
          borderAvailable: false
      },
      {
          link: "price",
          label: "Price",
          borderAvailable: false
      },
      {
          link: "testimonial",
          label: "Testimonial",
          borderAvailable: false
      },
      {
          link: "faq",
          label: "FAQ",
          borderAvailable: false
      },
      {
          link: "login",
          label: "Sign In",
          borderAvailable: true
      }
  ],
  pageProps = {
    component: <LandingPageContent />,
    bgColor: "white"
  },
  [pageState, setPageState] = useState(pageProps);

  useEffect(()=>{

    var links = pageLinkParams["*"].split("/"),
        hashName = window.location.hash,
        color = "rgb(248, 248, 248)",
        sectionElement,
        topScroll = 0;

        if(hashName !== ""){

          sectionElement = document.getElementById(hashName.slice(1));

          if(sectionElement){
            topScroll = sectionElement.offsetTop;
          }

        }

        window.scrollTo({
          top: (topScroll - 100),
          left: 0
        });

        // console.log(topScroll);


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
