import React from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import { Row, Col } from "antd"

function App() {

  return (
    <>

      <Header />

      <Row justify="center">

        <Col span={22}  className="page-sections"></Col>

      </Row>

      <Footer />

    </>
  );

}

export default App;
