import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
function NavigationBar() {
  const navigate = useNavigate();
  return (
    <>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">Movie Trends Catalog</Navbar.Brand>
      <Nav className="me-auto">
        <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
      </Nav>
    </Container>
  </Navbar>
    </>
  )
}

export default NavigationBar