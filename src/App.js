import React, { useEffect } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col, Button,Collapse } from "antd";

import { BsSlack, BsMessenger, BsCheckLg} from "react-icons/bs";
import { FaHeadphones } from "react-icons/fa";
import { GrAndroid } from "react-icons/gr";

import { useParams } from "react-router-dom";

function App() {

  
  var { Panel } = Collapse,
    pageLinkParams = useParams(),
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



  }, [pageLinkParams]);



  

  return (
    <>

      <Header links={pageLinks}/>

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

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

                    <div className="content-image"></div>

                    <h3>Buy Data</h3>

                    <p>Buy and enjoy cheap data plan for your internet browsing</p>

                </Col>

                <Col span={7} lg={{span: 7}} md={{span: 7}} sm={{span: 10}} xs={{span: 24}} className="content">

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

            <Col span={11} lg={{span: 11}} md={{span: 9}} xs={{span: 24}} className="page-about-image"></Col>
            <Col span={10} lg={{span: 10}} md={{span: 12}} xs={{span: 24}} className="page-about-description">
              <h3>About</h3>
              <h1>Why Choose Us</h1>

              <p>Etooconnect is the ultimate solution for Data subscription, Cable subscription, Airtime among others in Nigeria..

              We serve customers base on love that continues to grow exponentially, offering transmission services that span various categories including Data subscription, cable sub, electric bill, Airtime(vtu), and much more. With a reliable customer support</p>

              <Row justify="space-between" className="page-about-reasons">

                <Col span="10" lg={{span: 10}} md={{span: 10}} sm={{span: 10}} xs={{span: 24}} className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>


                <Col span="10" lg={{span: 10}} md={{span: 10}} sm={{span: 10}} xs={{span: 24}} className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>
                
                <Col span="10" lg={{span: 10}} md={{span: 10}} sm={{span: 10}} xs={{span: 24}} className="reasons">

                  <div className="icon"><BsCheckLg /></div>
                  <div className="test">We are fast</div>

                </Col>

                <Col span="10" lg={{span: 10}} md={{span: 10}} sm={{span: 10}} xs={{span: 24}} className="reasons">

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

            <Col span={4} lg={{span: 4}} md={{span: 5}} sm={{span: 9}} xs={{span: 24}} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>

            
            <Col span={4} lg={{span: 4}} md={{span: 5}} sm={{span: 9}} xs={{span: 24}} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>


            
            <Col span={4} lg={{span: 4}} md={{span: 5}} sm={{span: 9}} xs={{span: 24}} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>

            
            <Col span={4} lg={{span: 4}} md={{span: 5}} sm={{span: 9}} xs={{span: 24}} className="stats-card">
              <h1 className="stats">2000</h1>
              <p className="text">Customers</p>
            </Col>
            
          </Row>

        </Col>

        <Col span={24} className="page-pricing" id="price">

          <h1>Affordable Data Plans and Price</h1>

          <Row justify="center">

            <Col span={22}>

              <Row justify="space-between" className="price-container">

                <Col span={5} lg={{span: 5}} md={{span: 10}} sm={{span: 11}} xs={{span: 24}} className="prices">

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

                <Col span={5} lg={{span: 5}} md={{span: 10}} sm={{span: 11}} xs={{span: 24}} className="prices">

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

                <Col span={5} lg={{span: 5}} md={{span: 10}} sm={{span: 11}} xs={{span: 24}} className="prices">

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

                <Col span={5} lg={{span: 5}} md={{span: 10}} sm={{span: 11}} xs={{span: 24}} className="prices">

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
            
            <Col span={10} lg={{span: 10, push: 1}} md={{span: 10, push: 1}} sm={{span: 10, push: 1}} xs={{span: 24}} className="app-download-text">

              <h1>Download Our Mobile Application</h1>

              <p>Now Available on Android</p>

              <Button>Try It Now</Button>

            </Col>

            <Col span={10} lg={{span: 10, pull: 1}} md={{span: 10, pull: 1}} sm={{span: 10, pull: 1}} xs={{span: 24}} className="app-download-image">
              
              <div className="image">
                <GrAndroid />
              </div>

            </Col>

          </Row>

        </Col>

        <Col span={22} className="page-testimonial" id="testimonial">

            <h1>Testimonial?</h1>

            <Row justify="space-between" className="testimonial-container">

              <Col span={7} lg={{span: 7}} md={{span: 7}} xs={{span: 24}} className="testimonials">

                <div className="testimonial-header">

                  <div className="header-image"></div>

                  <div className="header-name">
                    <p className="name">DADA MOJEED</p>
                    <p className="work">Ui/Ux designer</p>
                  </div>

                </div>

                <div className="testimonial-message">I can really say that since I joined this site I have been earning more than before... Kudus To ETOOCONNECT Kudos to the developer of this great site.</div>

              </Col>

              <Col span={7} lg={{span: 7}} md={{span: 7}} xs={{span: 24}} className="testimonials">

                <div className="testimonial-header">

                  <div className="header-image"></div>
                  
                  <div className="header-name">
                    <p className="name">DADA MOJEED</p>
                    <p className="work">Ui/Ux designer</p>
                  </div>

                </div>

                <div className="testimonial-message">I can really say that since I joined this site I have been earning more than before... Kudus To ETOOCONNECT Kudos to the developer of this great site.</div>

              </Col>

              <Col span={7} lg={{span: 7}} md={{span: 7}} xs={{span: 24}} className="testimonials">

                <div className="testimonial-header">

                  <div className="header-image"></div>
                  
                  <div className="header-name">
                    <p className="name">DADA MOJEED</p>
                    <p className="work">Ui/Ux designer</p>
                  </div>

                </div>

                <div className="testimonial-message">I can really say that since I joined this site I have been earning more than before... Kudus To ETOOCONNECT Kudos to the developer of this great site.</div>

              </Col>
              

            </Row>

        </Col>

        <Col span={24} className="page-faq" id="faq">

          <h1>FAQ</h1>

          <Row justify="center" className="faq-container">

            <Col span={24} className="faq-content">

              <h3>Do you have any question about our service?</h3>

              <Collapse accordion className="accordion">

                  <Panel header="How To Buy Data" key="1">
                    <p>1. Log in to your account</p>
                    <p>2. If not click here to register</p>
                    <p>3. After log in click fund my account</p>
                    <p>4. Select Coupon payment</p>
                    <p>NB:You can buy coupon code from our agents</p>
                  </Panel>

                  <Panel header="How To Buy Data" key="2">
                    <p>1. Log in to your account</p>
                    <p>2. If not click here to register</p>
                    <p>3. After log in click fund my account</p>
                    <p>4. Select Coupon payment</p>
                    <p>NB:You can buy coupon code from our agents</p>
                  </Panel>

                  <Panel header="How To Buy Data" key="3">
                    <p>1. Log in to your account</p>
                    <p>2. If not click here to register</p>
                    <p>3. After log in click fund my account</p>
                    <p>4. Select Coupon payment</p>
                    <p>NB:You can buy coupon code from our agents</p>
                  </Panel>
                  
                </Collapse>

            </Col>

          </Row>

        </Col>
 
      </Row>

      <Footer />

    </>
  );

}

export default App;
