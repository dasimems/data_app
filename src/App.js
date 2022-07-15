import React, { useEffect, useState } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row } from "antd";

import LandingPageContent from "./components/landing_page_content";

import { useParams } from "react-router-dom";
import Login from "./components/login";
import Signup from "./components/signup";

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
    component: <LandingPageContent />
  },
  [pageState, setPageState] = useState(pageProps),
  anotherLinkArray = [];

  pageLinks.forEach((links)=>{
    anotherLinkArray.push(links.link)
  });

  useEffect(()=>{

    var links = pageLinkParams["*"].split("/"),
        sectionElement = document.getElementById(links[0]);

        // console.log(links);

        if(links.length < 1 || links[0] === ""){
          sectionElement = document.getElementById("home")
        }

        if(sectionElement){
          // console.log(sectionElement.offsetTop);

          window.scrollTo({
            top: (sectionElement.offsetTop - 100),
            left: 0
          });

        }

        if(links[0] === "login"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <Login />
              })
          })

        }else  if(links[0] === "signup"){

          setPageState((prevState)=>{
              return({
                ...prevState,
                component: <Signup />
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

      <Row justify="center" className="page-sections">

        {pageState.component}
 
      </Row>

      <Footer />

    </>
  );

}

export default App;
