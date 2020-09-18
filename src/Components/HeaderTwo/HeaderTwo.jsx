import React from 'react';
import './HeaderTwo.css'
import { Navbar, Nav } from 'react-bootstrap';
import logo2 from '../../Image/Logo2.png'
import { Link } from 'react-router-dom';


const HeaderTwo = () => {
  return (
      <Navbar expand="lg">
        <Navbar.Brand href="#home" className="py-4 navBar">
          <img style={{width:'100px'}} src={logo2} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link><Link to="/news"  className="linkTextTwo">News</Link > </Nav.Link>
            <Nav.Link><Link to="/destination"  className="linkTextTwo">Destination</Link ></Nav.Link>
            <Nav.Link><Link to="/blog"  className="linkTextTwo">Blog</Link ></Nav.Link>
            <Nav.Link><Link to="/contact"  className="linkTextTwo">Contact</Link ></Nav.Link>
            <Link  to="/login"> <button className="btn btn-warning">Login</button></Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default HeaderTwo;