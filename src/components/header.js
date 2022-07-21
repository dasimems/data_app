import React, { useEffect, useState } from "react";
import {Row, Col, Button } from "antd"

import { BiMenu } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { Link } from "react-router-dom"

export default function Header(props){


    var headerProps = {
            activeLink: window.location.hash !== ""? window.location.hash.slice(1): "home",
            mobileHeader: false
        },
        [headerState, setHeaderState] = useState(headerProps);
        
        
        // console.log(secPos)
        
        useEffect(()=>{
            window.addEventListener('scroll', checkScroll);
            
            window.addEventListener("hashchange", ()=>{
                var links = window.location.hash.slice(1);
                
                setHeaderState((prevState)=>{
    
                    return(
                        {
                            ...prevState,
                            mobileHeader: false,
                            activeLink: links === ""? "home": links
                        }
                    );
        
                });
    
                // console.log("working")
    
            });

        }, [])


    
    function checkScroll(){

        
    
    }

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

                        {props.links.map((links, linkKey)=>{

                            // console.log(linkKey)

                            return(
                                <li key={linkKey} id={headerState.activeLink === links.link? "active-link": "non-active-link"} >

                                    <a className={links.borderAvailable? "border-link": "non-border-link"} href={"#" + links.link}>{links.label}</a>

                                </li>
                            );

                        })}
                        
                    </ul>
                    
                </Col>

                

                <Col span={12} pull={1} className="mobile-btn">
                    <Button className="open-close-button" onClick={changeHeader}>{headerState.mobileHeader? <MdOutlineClose /> : <BiMenu />}</Button>
                </Col>

                <div className="side-nav" style={{right: headerState.mobileHeader? "0px": "-580px"}}>

                    <ul className="link-contents">

                        {props.links.map((links, linkKey)=>{

                            // console.log(linkKey)

                            return(
                                <li key={linkKey} id={headerState.activeLink === links.link? "active-link": "non-active-link"} >

                                    <a className={links.borderAvailable? "border-link": "non-border-link"} href={"#" + links.link}>{links.label}</a>

                                </li>
                            );

                        })}
                        
                    </ul>

                </div>

            </Row>
            

        </>
    )
}