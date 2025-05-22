// src/components/Header.jsx
import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand href="#">💊 Tiệm thuốc LHThu</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <Nav.Link href="#">Trang chủ</Nav.Link>
            <Nav.Link href="#">Thuốc</Nav.Link>
            <Nav.Link href="#">Giỏ hàng</Nav.Link>
            <Nav.Link href="#">Liên hệ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
