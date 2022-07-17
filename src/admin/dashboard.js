import React from 'react';
import { Row, Col } from "antd"

import Header from './components/header';
import Footer from './components/footer';
import "../assets/styles/admin.css"

export default function Dashboard() {
  return (
    <>
    
        <Header />

        <Row justify="center">

            <Col span={22}>This is the dahboard content</Col>

        </Row>

        <Footer />

    </>
  )
}
