import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar bg="dark" fixed="top" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">PIPELINE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link passHref href="/">
              <Nav.Link>All Talent</Nav.Link>
            </Link>
            <Link passHref href="/available-techies">
              <Nav.Link>Available Talent</Nav.Link>
            </Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
