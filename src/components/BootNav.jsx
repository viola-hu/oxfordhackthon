import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


class BootNav extends Component{

  render(){
    return(
      <Navbar className='nav-image' xpand="lg">
        <Navbar.Brand style={{color: 'white'}} href="#home">O|X|F|O|R|D</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link style={{color: 'white'}} href="#home">Home</Nav.Link>
            <Nav.Link style={{color: 'white'}} href="#link">Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
};

export default BootNav;
