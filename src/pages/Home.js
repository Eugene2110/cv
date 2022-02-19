import React, { Component } from 'react';
import { Navbar, Row, Col, Container, Nav, Tab, Card, Button, CardDeck, Form } from 'react-bootstrap';
import lrImg from '../assets/lr.png';
import unImg from '../assets/un.png';
import unsImg from '../assets/uns.png';
import m239Img from '../assets/m239.png';
import Progress from '../components/Progress.scss';
import ScrollableAnchor from 'react-scrollable-anchor';
import { configureAnchors } from 'react-scrollable-anchor';
import CountUp, { useCountUp } from 'react-countup';
import { faArrowAltCircleRight, faArrowCircleRight, faArrowRight, faArrowsAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
configureAnchors({ offset: -60, scrollDuration: 600 });



export default class Home extends Component {

    render() {
        return (
            <>
                <Container style={{ backgroundColor: "#ececec" }}>
                    <ScrollableAnchor id={'projects'}>
                        <h1 className='text-center'>Projects</h1>
                    </ScrollableAnchor>
                    <Row>
                        <Col sm={6}>
                        <Card.Link href="https://undetectable.io/" target='_blank'>
                            <CardDeck className='mt-4'>
                                <Card>
                                    <Card.Img variant="top" src={unImg} />
                                    <Card.Body>
                                        <Card.Title>Undetectable</Card.Title >
                                        <Card.Text>
                                            
                                    </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            </Card.Link>
                        </Col>
                        <Col sm={6}>
                        <Card.Link href="https://app.undetectable.io/" target='_blank'>
                            <CardDeck className='mt-4'>
                                <Card>
                                    <Card.Img variant="top" src={unsImg} />
                                    <Card.Body>
                                        <Card.Title>Undetectable Shop</Card.Title>
                                        <Card.Text>                                            
                                   </Card.Text>
                                    </Card.Body>
                                </Card>
                            </CardDeck>
                            </Card.Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={6}>
                        <Card.Link href="https://leaksradar.com/" target='_blank'>
                            <CardDeck className='mt-4 mb-3'>
                            <Card>
                                <Card.Img variant="top" src={lrImg} />
                                <Card.Body>
                                    <Card.Title>LeaksRadar</Card.Title>
                                    <Card.Text>                                            
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                            </CardDeck>
                            </Card.Link>
                        </Col>
                        <Col sm={6}>
                        <Card.Link href="https://minimath239.com/" target='_blank'>
                            <CardDeck className='mt-4'>
                            <Card>
                                <Card.Img variant="top" src={m239Img} />
                                <Card.Body>
                                    <Card.Title>Minimath239</Card.Title>
                                    <Card.Text>                                            
                                    </Card.Text>
                                </Card.Body>
                             </Card>
                            </CardDeck>
                            </Card.Link>
                        </Col>
                    </Row>                                           
                </Container>

            </>
        );
    }
}

