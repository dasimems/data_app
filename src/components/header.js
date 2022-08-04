import React, { useEffect, useState } from "react";
import {Row, Col, Button } from "antd"

import { BiMenu } from "react-icons/bi"
import { MdOutlineClose } from "react-icons/md"
import { Link, useParams, useNavigate } from "react-router-dom"

export default function Header(props){


    var params = useParams(), 
        headerProps = {
            activeLink: window.location.hash !== "" && params["*"] === ""? window.location.hash.slice(1): "home",
            mobileHeader: false
        },
        [headerState, setHeaderState] = useState(headerProps),
        linkPosition = props.links.filter((proplink)=>document.getElementById("page-" + proplink.link)),
        linkClick = false,
        navigate = useNavigate();

        // console.log(linkPosition)
        
        
        // console.log(secPos)
        
        useEffect(()=>{
            window.addEventListener('scroll', checkScroll);
            
            // window.addEventListener("hashchange", (e)=>{
            //     var links = window.location.hash.slice(1);

            //     // console.log(e);
                
            //     setHeaderState((prevState)=>{
    
            //         return(
            //             {
            //                 ...prevState,
            //                 mobileHeader: false,
            //                 activeLink: links === ""? "home": links
            //             }
            //         );
        
            //     });
    
            //     // console.log("working")
    
            // });

            function checkScroll(){
        
                var topPos = window.scrollY,
                    linkPos;

                    if(document.getElementById("page-home")){

                        linkPos = linkPosition.filter((links)=> topPos >= (document.getElementById("page-" + links.link).offsetTop - 100))

                        if(linkPos.length > 0){
                            
                            var linkValue = linkPos[(linkPos.length - 1)].link.replace("page-", "")
                            if(window.location.hash !== "#" + linkValue){
    
                                if(linkClick === false){
    
                                    window.location.hash = linkValue;
        
                                    changeActiveLink(linkValue);
                                }
    
    
    
                            }
    
                        }
                    }


            
            }

        }, [linkPosition, linkClick]);

        useEffect(()=>{

            if(params["*"] !== ""){
                setHeaderState((prevState)=>{

                    return({
                        ...prevState,
                        activeLink: params["*"]
                    })

                })
            }

        }, [params])

        function scrollToElement(link){

            changeActiveLink(link)

            if(params["*"].length !== 0){

                navigate("/#" + link)

                

            }else{

                window.location.hash = link;
    
                if(document.getElementById("page-" + link)){
                    // console.log("work")
    
                    
    
                    linkClick = true;
    
                    scrollEle(link);
                    
    
                }
            }


        }

        async function scrollEle(link){

            await window.scrollTo({
                top: document.getElementById("page-" + link).offsetTop,
                left: 0
            })
            
            linkClick = false;
        }


    async function changeActiveLink(links){

            await setHeaderState((prevState)=>{
    
                    return(
                        {
                            ...prevState,
                            mobileHeader: false,
                            activeLink: links === ""? "home": links
                        }
                    );
        
                });

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

                                    {links.followHash? <Link onClick={(e)=>{e.preventDefault(); scrollToElement(links.link)}} className={links.borderAvailable? "border-link": "non-border-link"} to={"/#" + links.link}>{links.label}</Link>: <Link to={"/" + links.link} className={links.borderAvailable? "border-link": "non-border-link"}>{links.label}</Link>}

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

                                    {links.followHash? 
                                        <Link onClick={(e)=>{e.preventDefault(); scrollToElement(links.link)}} className={links.borderAvailable? "border-link": "non-border-link"} to={"/#" + links.link}>{links.label}</Link>
                                        :
                                         <Link to={"/" + links.link} className={links.borderAvailable? "border-link": "non-border-link"}>{links.label}</Link>}

                                </li>
                            );

                        })}
                        
                    </ul>

                </div>

            </Row>
            

        </>
    )
}