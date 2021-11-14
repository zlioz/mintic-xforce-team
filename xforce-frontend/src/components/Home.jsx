import React, { Component } from "react";
import Header from './Header';
import Footer from "./Footer";
import { Container, Row, Col } from "react-bootstrap"
import Carousel from 'react-bootstrap/Carousel'

import '../styles/Home.css'

class Home extends Component{
    render() {
    return (
            <Container className="fluid" fluid >
                <Row>
                    <Header />
                </Row>
                <Row>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/1.png"
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Banner2.png"
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src="img/Banner3.png"
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>
                </Row>
                <Row>
                    <Col>
                        <h1 className="mainTittleH1"> Bienvenido </h1>
                    </Col>
                </Row>
                <Row className="mb-5">
                    <Col>
                        <p className="mainTittleP">
                            Este es un Portal universitario no oficial y presentación con fines academicos.
                        </p>
                    </Col>
                </Row>
                <div>
                </div>
                <Row mb-5>
                    <Footer />
                </Row>
            </Container>
    )}
}

export default Home;