import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

function Header() {
  return (
<Navbar bg="light">
      <Container>
        <Navbar.Brand>News</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link>Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  )
}
export default Header