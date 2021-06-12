import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
import { Container,Navbar,Nav } from 'react-bootstrap';

const Header = () => {
  return <header><Container>
  <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
<LinkContainer to ='/'>
<Navbar.Brand>Proshop</Navbar.Brand>
</LinkContainer>

  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="ml-auto">
      <LinkContainer to ='/cart'>
          <Nav.Link><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>{/* used font awesome for icons */}
      </LinkContainer>
      <LinkContainer to ='/login'>
       <Nav.Link><i className="fas fa-user"></i> Sign In</Nav.Link>
     </LinkContainer>


    </Nav>

  </Navbar.Collapse>
</Navbar>
  </Container></header>

}

export default Header
