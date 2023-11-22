import React from 'react';
import { Navbar, Container, InputGroup, FormControl } from 'react-bootstrap';
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        {}
        <Navbar.Brand>
          <img id='logo'
            alt="Logo Strony"
            src="/images/logo.png"  
            width="100"
            height="100"
            className="d-inline-block align-top"
          />{' '}
          
        </Navbar.Brand>
        <div className="logo-container">fsafasfassafasfs</div>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <InputGroup className="mb-3">
            <FormControl placeholder="Wyszukaj film" />
          </InputGroup>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
