import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col } from "antd"

function App() {

  return (
    <>

      <Header />

      <Row justify="center" className="page-sections">

        <Col span={24} className="page-banner"></Col>

      </Row>

      <Footer />

    </>
  );

}

export default App;
