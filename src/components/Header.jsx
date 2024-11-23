import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../img/folha.png';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <div className="container">
      <img src={logo} alt="Logo" style={{ width: '40px', height: '40px', marginRight: '10px' }} />
      <Navbar.Brand>DWB Energy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Início</Nav.Link>
            <Nav.Link as={Link} to="/monitor">Monitoramento</Nav.Link>
            <Nav.Link as={Link} to="/info">Informações sobre Energia</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Header;