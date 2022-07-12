import React from "react";
import {Row, Col } from "antd"
import { Link } from "react-router-dom"

export default function Header(){

    return(
        <>
    
            <Row justify="space-between">

                <Col span={5} push={1}className="header-logo">

                    <Link to="/">Logo</Link>
                    
                </Col>

                <Col span={10} pull={1} className="header-Links">
                    this are just the links
                </Col>

            </Row>
            

        </>
    )
}