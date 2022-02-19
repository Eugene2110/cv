import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub,  faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {  faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';


export default class Footer extends Component {
    render () {
        return (
            <>
                  <Navbar style={{ backgroundColor: "white"}}>                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faEnvelopeSquare} /></Navbar.Brand>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faLinkedin} /></Navbar.Brand>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faGithub} /></Navbar.Brand>
                    <Navbar.Brand href="#"><FontAwesomeIcon icon={faFacebookF} /></Navbar.Brand>                    
                    </Navbar.Collapse>
                </Navbar> 

            </>
        );
    }
}

