import React, { useContext } from 'react';
import './HeaderTwo.css'
import { Navbar, Nav } from 'react-bootstrap';
import logo2 from '../../Image/Logo2.png'
import { Link } from 'react-router-dom';
import { LocationContext } from '../../App';


const HeaderTwo = () => {
  const [{ setLoggedInUser }] = useContext(LocationContext)
  return (
      <Navbar expand="lg">
        <Navbar.Brand href="/home" className="py-4 navBar">
          <img style={{width:'100px'}} src={logo2} alt=""/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav><Link to="/home"  className="linkTextTwo">Home</Link > </Nav>
            <Nav><Link to="/destination"  className="linkTextTwo">Destination</Link ></Nav>
            <Nav><Link to="/#"  className="linkTextTwo">Blog</Link ></Nav>
            <Nav><Link to="/contact"  className="linkTextTwo">Contact</Link ></Nav>
            <Link onClick ={()=> setLoggedInUser({})} to="/login"> <button className="btn btn-warning text-dark ">Log Out</button></Link> 
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
};

export default HeaderTwo;