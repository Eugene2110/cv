import React, { Component } from 'react';
import { Container, Nav, Navbar, Row, Col, Tab } from 'react-bootstrap';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from '../pages/Home';
import CountUp, { useCountUp } from 'react-countup';
import AnimatedNumber from 'react-animated-number';
import EKH from '../assets/pp.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub,  faLinkedin, faWhatsappSquare, faTelegramPlane } from "@fortawesome/free-brands-svg-icons";
import {  faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


   function Body() {
        const { countUp, start, update } = useCountUp({
            duration: 6,
            end: 80,
            startOnMount: false
        })
           
        return (
            <>
                <Navbar fixed="top" style={{ backgroundColor: "white" }} collapseOnSelect expand='md'>
                    <Container>
                        <Navbar.Brand href='/'>
                       Evgenii Khustochka
                    </Navbar.Brand>
                        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                        <Navbar.Collapse className='justify-content-end' id='responsive-navbar-nav'>
                            <Nav className='mr-auto'>
                                <Nav.Link href='/'>Home</Nav.Link>
                                <Nav.Link href='#projects'>Projects</Nav.Link>                                
                            </Nav>
                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                    <Nav.Link>Contact me</Nav.Link>        
                    
                    <Navbar.Brand href="mailto:ekhustochka@gmail.com"><FontAwesomeIcon icon={faEnvelopeSquare} /></Navbar.Brand>
                    <Navbar.Brand href="https://wa.me/77052874724?text=Здравствуйте!" target='_blank'><FontAwesomeIcon icon={faWhatsappSquare} /></Navbar.Brand>
                    <Navbar.Brand href="https://t.me/evgeniikhustochka" target='_blank'><FontAwesomeIcon icon={faTelegramPlane} /></Navbar.Brand>
                    <Navbar.Brand href="https://www.linkedin.com/in/evgeniikh/" target='_blank'><FontAwesomeIcon icon={faLinkedin} /></Navbar.Brand>
                   {/* <Navbar.Brand href="https://github.com/Eugene2110" target='_blank'><FontAwesomeIcon icon={faGithub} /></Navbar.Brand> */}                                    
                    </Navbar.Collapse>
                    </Container>
                </Navbar>


                <Container style={{ backgroundColor: "#ececec" }} className='mt-5'>
                    <Tab.Container id='left-tabs-example' defaultActiveKey='first'>
                        <Row>
                            <Col sm={3} className='mt-2'>
                                <img
                                    style={{ borderRadius: '50%' }}
                                    className="d-block w-100 my-5"
                                    src={ EKH }
                                    alt='Eugene'
                                />
                            </Col>

                            <Col sm={4} className='mt-5'>
                                <h3>Skills</h3>
                                <Nav variant='pills' className='flex-column mt-2'>
                                    <Nav.Item>
                                        <Nav.Link onClick={start} eventKey='first'>HTML</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => update(80)} eventKey='second'>CSS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => update(50)} eventKey='third'>JavaScript</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => update(40)} eventKey='fourth'>ReactJS</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link onClick={() => update(40)} eventKey='fifth'>PHP</Nav.Link>
                                    </Nav.Item>

                                </Nav>
                            </Col>
                            <Col sm={5} className='mt-5'>
                                <Tab.Content className='text-center'>
                                    <Tab.Pane eventKey='first'>
                                        <div class="progress" data-percentage="80">
                                            <span class="progress-left">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <div class="progress-value" >
                                            <CountUp start={0} end={80} delay={0} duration={6}>
                                                {({ countUpRef }) => (
                                                   
                                                    <p class="p_start" ref={countUpRef}></p>
                                                )}
                                            </CountUp> %
                                            </div>
                                        </div>
                                        <p>Skill proficiency as a percentage.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='second'>
                                        <div class="progress" data-percentage="70">
                                            <span class="progress-left">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <div class="progress-value">
                                            {countUp} %
                                            </div>
                                        </div>
                                        <p>Skill proficiency as a percentage.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='third'>
                                        <div class="progress" data-percentage="60">
                                            <span class="progress-left">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <div class="progress-value">
                                                {countUp} %
                                                </div>
                                        </div>
                                        <p>Skill proficiency as a percentage.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fourth'>
                                        <div class="progress" data-percentage="40">
                                            <span class="progress-left">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <div class="progress-value">
                                            {countUp} %
                                                </div>
                                        </div>
                                        <p>Skill proficiency as a percentage.</p>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey='fifth'>
                                        <div class="progress" data-percentage="40">
                                            <span class="progress-left">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <span class="progress-right">
                                                <span class="progress-bar">
                                                </span>
                                            </span>
                                            <div class="progress-value">
                                            {countUp} %
                                                </div>
                                        </div>
                                        <p>Skill proficiency as a percentage.</p>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>

                <Router>
                    <Routes>
                        <Route exact path='/' component={Home} />
                    </Routes>
                </Router>
            </>
        );
    }

    export default Body;