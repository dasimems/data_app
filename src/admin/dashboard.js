import React, { useState } from 'react';
import { Row, Col } from "antd"

import Header from './components/header';
import Footer from './components/footer';
import SideNav from './components/side_nav';
import "../assets/styles/admin.css";
import DashboardPage from './components/pages/dashboard_page';

export default function Dashboard() {

  var dashboardProps = {
      navOpen: true,
      component: <DashboardPage />
    },
    [dashboardState, setDashboardState] = useState(dashboardProps);

  
    function openNav(){

      setDashboardState((prevState)=>{
        return({
          ...prevState,
          navOpen: !dashboardState.navOpen
        })
      })

    }

  return (
    <>
    
        <Header navButtonClick={openNav} open={dashboardState.navOpen}  />

        <Row justify="space-between" className='dashboard'>

            <Col span={dashboardState.navOpen? 5 : 1} className="dashboard-nav"><SideNav open={dashboardState.navOpen} /></Col>
            <Col span={dashboardState.navOpen? 19 : 23} className="user-content">{dashboardState.component}</Col>

        </Row>

        <Footer />

    </>
  )
}
