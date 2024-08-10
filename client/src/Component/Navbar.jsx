import "../assets/css/navbar.css"
import { Outlet, Link } from "react-router-dom";
import React, { useContext, useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Footer from "./Fotter";
import noteContext from "../context/NoteContext";

function Navbar1() {

  const {userDetails} = useContext(noteContext);

  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };


  return (
    <>
      <div className="upper-section d-flex">
        <h6 id="blinkingText">Quality is not an act, it is a habit. Quality is not an act, it is a habit.</h6>
        {/* <marquee className="blink py-2 px-5 w-50">
            Quality is not an act, it is a habit. 
            </marquee> */}
        <div className="upper-right-section ms-auto custom-font">
          <h5 className="py-2 px-4 bg-warning">Contact Us - {userDetails.mobileNo}</h5>
        </div>
      </div>

      <Navbar collapseOnSelect expand="lg" bg="light" expanded={isNavbarOpen}>
        <Container>

          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-5 mb-2 mb-lg-0">
              <Nav.Item>
                <Nav.Link active><Link to='/' className="text-decoration-none text-dark">Home</Link></Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-2">
                <Nav.Link href="#">Painting</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-2">
                <Nav.Link href="#">Buy</Nav.Link>
              </Nav.Item>
              <Nav.Item className="ms-2">
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleNavbarToggle} />
          <Link to='/' className="text-decoration-none text-dark"><Navbar.Brand><b>The Creator</b></Navbar.Brand></Link>

          <div className="d-flex">
            <input
              className="form-control nav-search-button me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <Link to='/register' className="bag me-3 text-decoration-none text-dark"><i className="fa fa-user"></i></Link>
            <Link to="/cart">
              <a className="bag me-3"><i className="fa fa-shopping-bag"></i></a>
            </Link>
          </div>

        </Container>
      </Navbar>

      <Outlet />                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

      <Footer />

    </>
  );
}
mmm    