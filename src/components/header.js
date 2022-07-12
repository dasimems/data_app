import React, { useEffect, useState } from "react";
import {Row, Col, Button } from "antd"

import { BiMenu } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { Link, useParams } from "react-router-dom"

export default function Header(){


    var linkParams = useParams(),
        headerProps = {
            activeLink: "home",
            mobileHeader: false
        },
        [headerState, setHeaderState] = useState(headerProps),
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
        ];


    useEffect(()=>{

        var links = linkParams["*"].split("/");

        setHeaderState((prevState)=>{

            return(
                {
                    ...prevState,
                    mobileHeader: false,
                    activeLink: links[0] === ""? "home": links[0]
                }
            );

        });

        // console.log(links[0]);

    }, [linkParams]);

    function changeHeader(){

        setHeaderState((prevState)=>{
            return(
                {
                    ...prevState,
                    mobileHeader: !headerState.mobileHeader
                }
            );
        })
    }

    // console.log(headerState);

    

    return(
        <>
    
            <Row justify="space-between" className="header">

                <Col span={5} push={1}className="header-logo">

                    <Link to="/">Logo</Link>
                    
                </Col>

                <Col span={14} lg={{span: 14}} md={{span: 16}} sm={{span: 15}} pull={1} className="header-Links">
                    
                    <ul className="link-contents">

                        {pageLinks.map((links, linkKey)=>{

                            // console.log(linkKey)

                            return(
                                <li key={linkKey} id={headerState.activeLink === links.link? "active-link": "non-active-link"} >

                                    <Link className={links.borderAvailable? "border-link": "non-border-link"} to={`/${links.link}`}>{links.label}</Link>

                                </li>
                            );

                        })}
                        
                    </ul>
                    
                </Col>

                

                <Col span={12} pull={1} className="mobile-btn">
                    <Button className="open-close-button" onClick={changeHeader}>{headerState.mobileHeader? <MdOutlineClose /> : <BiMenu />}</Button>
                </Col>

                <div className="side-nav" style={{right: headerState.mobileHeader? "0px": "-400px"}}>

                    <ul className="link-contents">

                        {pageLinks.map((links, linkKey)=>{

                            // console.log(linkKey)

                            return(
                                <li key={linkKey} id={headerState.activeLink === links.link? "active-link": "non-active-link"} >

                                    <Link className={links.borderAvailable? "border-link": "non-border-link"} to={`/${links.link}`}>{links.label}</Link>

                                </li>
                            );

                        })}
                        
                    </ul>

                </div>

            </Row>
            

        </>
    )
}