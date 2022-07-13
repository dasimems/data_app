import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col, Button } from "antd"

import { BsSlack, BsMessenger, BsCheckLg} from "react-icons/bs"
import { FaHeadphones } from "react-icons/fa"
import { GrAndroid } from "react-icons/gr"

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

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

              </Row>

            </Col>

          </Row>

        </Col>

        <Col span={22} className="page-about" id="about">

          <Row justify="space-between" className="page-about-container">

            <Col span={11} className="page-about-image"></Col>
            <Col span={10} className="page-about-description">
              <h3>About</h3>
              <h1>Why Choose Us</h1>

              <p>Etooconnect is the ultimate solution for Data subscription, Cable subscription, Airtime among others in Nigeria..

              We serve customers base on love that continues to grow exponentially, offering transmission services that span various categories including Data subscription, cable sub, electric bill, Airtime(vtu), and much more. With a reliable customer support</p>

              <Row justify="space-between" className="page-about-reasons">

                <Col span="10" className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>


                <Col span="10" className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>
                
                <Col span="10" className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>

                <Col span="10" className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>

              </Row>

              <div className="page-about-button">
                <Button type="primary">Register</Button>
              </div>
              
            </Col>

          </Row>

        </Col>

        <Col span={22} className="page-statistic">

          <Row justify="space-between">

            <Col span={4} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>

            
            <Col span={4} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>


            
            <Col span={4} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>

            
            <Col span={4} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>
            
          </Row>

        </Col>

        <Col span={24} className="page-pricing">

          <h1>Affordable Data Plans and Price</h1>

          <Row justify="center">

            <Col span={22}>

              <Row justify="space-between" className="price-container">

                <Col span={5} className="prices">

                  <div className="price-image">

                  </div>


                  <div className="price-title">MTN DATA</div>

                  <ul className="price-list">

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                  </ul>

                  <div className="price-button">
                    <Button type="primary" className="buy-data-btn">Buy Now</Button>
                  </div>

                </Col>

                <Col span={5} className="prices">

                  <div className="price-image">

                  </div>


                  <div className="price-title">MTN DATA</div>

                  <ul className="price-list">

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                  </ul>

                  <div className="price-button">
                    <Button type="primary" className="buy-data-btn">Buy Now</Button>
                  </div>

                </Col>

                <Col span={5} className="prices">

                  <div className="price-image">

                  </div>


                  <div className="price-title">MTN DATA</div>

                  <ul className="price-list">

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                  </ul>

                  <div className="price-button">
                    <Button type="primary" className="buy-data-btn">Buy Now</Button>
                  </div>

                </Col>

                <Col span={5} className="prices">

                  <div className="price-image">

                  </div>


                  <div className="price-title">MTN DATA</div>

                  <ul className="price-list">

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                    <li className="list">
                      <span className="data-amount">1.0GB</span>
                      <span className="data-price">&#8358;280</span>
                      <span className="data-duration">30 days</span>
                    </li>

                  </ul>

                  <div className="price-button">
                    <Button type="primary" className="buy-data-btn">Buy Now</Button>
                  </div>

                </Col>

              </Row>

            </Col>

          </Row>



        </Col>

        <Col span={24} className="page-app-download">

          <Row justify="space-between" className="app-download-container">
            
            <Col span={10} push={1} className="app-download-text">

              <h1>Download Our Mobile Application</h1>

              <p>Now Available on Android</p>

              <Button>Try It Now</Button>

            </Col>

            <Col span={10} pull={1} className="app-download-image">
              
              <div className="image">
                <GrAndroid />
              </div>

            </Col>

          </Row>

        </Col>
 
      </Row>

      <Footer />

    </>
  );

}

export default App;
