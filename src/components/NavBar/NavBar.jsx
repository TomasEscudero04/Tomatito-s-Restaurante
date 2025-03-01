import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Navbar expand="md" className="fixed-top shadow" style={{backgroundColor: '#CFCFCF'}}>
      <Container>
        <Navbar.Brand href="/">
          <Link to="/" className="navbar-brand text-danger fw-bold">
            Tomatito's Restaurante
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-end w-100">
            <Nav.Link href="/" className="active">
              Inicio
            </Nav.Link>
            <Nav.Link href="/menu" className="active ">
              Menu
            </Nav.Link>
            <Nav.Link href="/about" className="active ">
              Nosotros
            </Nav.Link>
            <Nav.Link href="/contact" className="active ">
              Contacto
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
