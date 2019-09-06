import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'

function NavButton() {
  return(
    <div>
      <Navbar bg="dark" variant="dark">
        <Nav className="mr-auto">
          <Nav.Link href="#Home">Home</Nav.Link>
          <Nav.Link href="#Notification">Notifications</Nav.Link>
          <Nav.Link href="#Messages">Messages</Nav.Link>
        </Nav>
      </Navbar>
      </div>
  );
}

export default NavButton;
