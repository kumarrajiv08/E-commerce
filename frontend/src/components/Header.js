import React from 'react';
import { Container,Navbar,Nav } from 'react-bootstrap';

const Header = () => {
  return <header><Container>
  <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Navbar.Brand href="#home">Proshop</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="/cart"><i class="fas fa-shopping-cart"></i> Cart</Nav.Link> {/* used font awesome for icons */}
      <Nav.Link href="/login"><i class="fas fa-user"></i> Sign In</Nav.Link>

    </Nav>

  </Navbar.Collapse>
</Navbar>
  </Container></header>

}

export default Header
