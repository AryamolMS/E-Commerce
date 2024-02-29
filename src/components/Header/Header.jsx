import React from 'react'
import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <>
     <div className='d-flex'>
        <div className='header1'>
        <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Badges</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <NavDropdown title="Shop" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">About</Nav.Link>
            <Nav.Link href="#link">Blog</Nav.Link>
            <Nav.Link href="#link">Contact</Nav.Link>
            <Nav.Link href="#link">Pages</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <div className='p-2 m-1'> 
            
            <p> <i class="fa-regular fa-user me-2"></i>  Login / Register
            <i class="fa-solid fa-magnifying-glass ms-3"></i>
            <i class="fa-solid fa-cart-shopping ms-3"></i>
            <i class="fa-regular fa-heart ms-3"></i>
</p>
        </div>
      </Container>
    </Navbar>
        </div>
    </div> 
    </>
  )
}

export default Header
