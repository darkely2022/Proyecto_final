import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { useNavigate } from "react-router-dom";
import Regpropiedad from '../components/Regpropiedad';
import Vistapropublicada from '../components/Vistapropublicada'

const Vistapropietario = () => {
    const navigate = useNavigate();

   
    const irAPublicadas = () => {
        navigate(`/publicadas`);
        
    };
    const irPublicar = () => {
        navigate(`/publicar`);
    };
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    return (
        <>
            <Container Fluid>
                <Row>
                    <Col>
                        <ListGroup horizontal defaultActiveKey="#link1">
                            <ListGroup.Item action href="#link1" onClick={irPublicar}>
                                Publicar una propiedad
                            </ListGroup.Item>
                           
                            <ListGroup.Item action onClick={alertClicked}>
                                Datos Personales
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={irAPublicadas}>
                                Propiedades publicadas
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={alertClicked}>
                                Propiedades reservadas
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                </Row>
                <Row>
                    <Col>
                        <Regpropiedad></Regpropiedad>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Vistapropietario;