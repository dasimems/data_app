import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col, Button } from "antd"

import { BsSlack, BsMessenger} from "react-icons/bs"
import { FaHeadphones } from "react-icons/fa"

function App() {

  return (
    <>

      <Header />

      <Row justify="center" className="page-sections">

        <Col span={24} className="page-banner" id="home">

          <Row justify="space-between" className="banner-container">

            <Col push={1} span={11} className="banner-description">

              <h1>Eto connect</h1>

              <p>Your reliable plug for virtual top up, data subscription, online payment and subscription in Nigeria</p>
              <p>Nigeria's No 1 Telecommunication service provider</p>

              <div className="banner-button">

                  <Button className="register-button">Register</Button>
                  <Button className="login-button">Login</Button>

              </div>

            </Col>
            
            

          </Row>

        </Col>

        <Col span={20} className="page-why-to-choose-us">

          <div className="content">

            <div className="content-icon">

              <div className="icon">
                <BsSlack />
              </div>

            </div>

            <div className="content-description">
              Our service delivery and wallet funding is automated, your purchase are automated and get delivered to you at a blink of an eye.
            </div>

          </div>

          <div className="content">

            <div className="content-icon">

              <div className="icon">
                <FaHeadphones />
              </div>

            </div>

            <div className="content-description">
              Our service delivery and wallet funding is automated, your purchase are automated and get delivered to you at a blink of an eye.
            </div>

          </div>

          <div className="content">

            <div className="content-icon">

              <div className="icon">
                <BsMessenger />
              </div>

            </div>

            <div className="content-description">
              Our service delivery and wallet funding is automated, your purchase are automated and get delivered to you at a blink of an eye.
            </div>

          </div>

        </Col>

        <Col span={24} className="page-service" id="service">

            <h4>Rendered Services</h4>
            <h1>Services</h1>

          <Row justify="center">

            <Col span={22}>

              <Row justify="space-between" className="service-container">

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

              </Row>

            </Col>

          </Row>

        </Col>

      </Row>

      <Footer />

    </>
  );

}

export default App;
