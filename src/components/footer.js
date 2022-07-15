import React from "react";
import {Row, Col } from "antd"
import { Link } from "react-router-dom";

export default function Footer(){

    return(
        <>
    
            <Row justify="center" className="page-footer">

                <Col span={22} className="footer-container">

                    <Row justify="space-between">


                        <Col span={4} className="footer-content">
                            <h1>Logo</h1>

                            <p>
                                Etooconnect is the ultimate solution for Data subscription, Cable subscription, Airtime among others  in Nigeria..
                            
                            </p>

                        </Col>


                        <Col span={4} className="footer-content">
                            <h3>Links</h3>

                            <ul>

                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/service">Services</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/testimonial">Testimonial</Link></li>


                            </ul>

                        </Col>

                        <Col span={4} className="footer-content">
                            <h3>Product</h3>

                            <ul>

                                <li><Link to="/u/buy/data">Buy Data</Link></li>
                                <li><Link to="/u/buy/cable">Cable Subscription</Link></li>
                                <li><Link to="/u/buy/airtime">Buy Airtime</Link></li>
                                <li><Link to="/u/buy/utilities">Utilities Bills</Link></li>
                                

                            </ul>

                        </Col>

                        <Col span={4} className="footer-content">
                            <h3>More</h3>

                            <ul>

                                <li><Link to="/u/airtime-cash">Airtime to cash</Link></li>
                                <li><Link to="/u/electricity">Electricity</Link></li>

                            </ul>

                        </Col>

                        <Col span={4} className="footer-content">
                            <h3>Information</h3>

                            <p><span className="title">Address:</span> Faith junction, beside new stadium Akure, Ondo State.</p>

                            <p><span className="title">Email:</span> Connectwithetoo@gmail.com</p>
                            <p><span className="title">Phone:</span> +2348119986833</p>

                        </Col>



                    </Row>
                    
                </Col>

                <Col span={24} className="footer-bottom">

                    <Row justify="space-between">

                        <Col span={10} push={1}>
                            All etoconnect &copy; Copyrights Reserved
                        </Col>
                        <Col span={10} pull={1} className="bottom-content-two">
                            Designed and developed by &nbsp;<a className="ref-link" href="https://www.facebook.com/dasimems" target="_blank" rel="noreferrer">Dasimems</a>
                        </Col>

                    </Row>

                </Col>

            </Row>
            

        </>
    )
}