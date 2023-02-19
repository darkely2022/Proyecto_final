import { NavLink } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbarprin = () => {
    const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
    const [id, setId] = useState("");
    const navigate = useNavigate();
    const irARegistro = () => {
        navigate(`/registro`);
    };
    const irAHome = () => {
        navigate(`/`);
    };

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand onClick={ irARegistro } href="#">Registro</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link onClick={ irARegistro } href="#action1">Alojamientos</Nav.Link>
                            <Nav.Link onClick={ irARegistro } href="#action2">Contactanos</Nav.Link>
                            <Nav.Link onClick={ irAHome } href="#action3">Home</Nav.Link>
                        </Nav>
                        <Form className="d-flex">
                            <Form.Control
                                type="username"
                                placeholder="username"
                                className="me-2"
                                aria-label="Username"
                            />
                            <Form.Control
                                type="search"
                                placeholder="password"
                                className="me-2"
                                aria-label="Search"
                            />
                            <Button  onClick={ irARegistro } variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )

}

export default Navbarprin