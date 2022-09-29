import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';



export default class Footer extends Component {
    render () {
        return (
            <>
                  <Navbar style={{ backgroundColor: "white"}}>                    
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-center">
                    <Navbar.Brand> Have a good day! </Navbar.Brand>
                                                        
                    </Navbar.Collapse>
                </Navbar> 

            </>
        );
    }
}

