import React, { useEffect, useState } from "react";
import {Row, Col, Button } from "antd"

import { BiMenu } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { Link, useNavigate, useParams } from "react-router-dom"

export default function Header(props){


    var linkParams = useParams(),
        navigate = useNavigate(),
        headerProps = {
            activeLink: "home",
            mobileHeader: false
        },
        [headerState, setHeaderState] = useState(headerProps),
        windowScroll = window.addEventListener('scroll', checkScroll),
        linkPosArr = [],
        secPos = props.links.map((links)=>{

            if(document.getElementById(links.link)){

                var doc = document.getElementById(links.link) 

                linkPosArr.push(doc.offsetTop);
                
                return({
                    sectionPosition: doc.offsetTop,
                    ...links
                })
            }


        });

        // console.log(secPos)

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

    function checkScroll(){

        var posY = window.scrollY,
            activeLink = linkParams["*"].split("/");

        // console.log(posY);

        secPos.forEach((links)=>{

            if((links !== undefined && links !== null ) && document.getElementById(links.link)){

                var an = linkPosArr.filter((pos)=> posY >= (pos + 100)),
                    arrLength = an.length;
                if(arrLength < 1){
                    arrLength = 1;
                }

                // console.log(activeLink[0], secPos[(arrLength - 1)].link)
                if(activeLink[0] !== secPos[(arrLength - 1)].link){
                    

                    // navigate(`/${secPos[(arrLength - 1)].link}`);
                }
                
            }

        });

        
        // console.log("working")
    
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

                        {props.links.map((links, linkKey)=>{

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