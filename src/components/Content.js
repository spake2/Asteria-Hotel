import React from "react";
import { Figure, Nav, Image, Container, Row, Col } from "react-bootstrap";

function Content() {
  return (
    <div className="row-container mt-2">
      <Figure>
        <Image
          className="first-image"
          src="/images/first.jpg"
          width="100%"
          alt="logo"
        />
      </Figure>
      <div className="container pt-5">
        <div className="row container-main">
          <div className="col-7">
            <h1 className="text-start">ASTERIA KREMLIN PALACE</h1>
            <h3 className="text-start">
              Travel in time with Asteria Kremlin Palace
            </h3>
            <p className="text-start">
              Asteria Kremlin Palace was built inspired by Kremlin Palace in
              Moscow to give you a chance to feel the magnificent atmosphere and
              discover the home of the Russian Czars. The hotel is located in
              one of the most modern resorts of Antalya - Kundu.
              <br />
              <br />
              Kundu attracts tourists not only with close location to Antalya
              city center but also with the beauty of the golden beaches and
              relaxing atmosphere
            </p>
          </div>
          <div className="col-3">
            <Figure>
              <Image className="rounded" src="/images/second.jpg"></Image>
            </Figure>
          </div>
        </div>
      </div>
      <Container className="mt-5">
        <Row>
          <Col className="text-center">
            <h2 className="title-m">SPECIAL FOR YOU</h2>
            <h3>Please click for more details...</h3>
            <p className="col-9 m-auto">
              Asteria Kremlin Palace offers you and your loved ones comfortable
              accommodation possibilites. Hotel’s location give you the
              possibility to explore the marvelous Antalya while offering
              magnificent atmosphere as well as quality service.
            </p>
            <Figure className="third-img">
              <Image className="rounded mt-3" src="/images/third.jpg"></Image>
              <Nav.Link href="#DETAIL">
                <span className="first inset-6">ACTIVITIES</span>
                <span className="second">Please review in detail.</span>
                <i className="fa-regular fa-circle-right"></i>
              </Nav.Link>
            </Figure>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Content;
