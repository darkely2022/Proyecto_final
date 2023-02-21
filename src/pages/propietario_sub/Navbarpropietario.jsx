import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';

const Navbarpropietario = ({setIntervalRoute}) => {
    const alertClicked = () => {
        alert('You clicked the third ListGroupItem');
    };

    return(
        <>
        <Container Fluid>
                <Row>
                    <Col xs={12}>
                        <ListGroup horizontal defaultActiveKey="#link1">
                            <ListGroup.Item action href="#link1" onClick={()=>setIntervalRoute('ingresar-propiedad')}>
                                Publicar una propiedad
                            </ListGroup.Item>
                           
                            <ListGroup.Item action onClick={()=>setIntervalRoute('datos-propietario')}>
                                Datos Personales
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={()=>setIntervalRoute('propiedades-publicadas')}>
                                Propiedades publicadas
                            </ListGroup.Item>
                            <ListGroup.Item action onClick={()=>setIntervalRoute('propiedades-reservadas')}>
                                Propiedades reservadas
                            </ListGroup.Item>
                        </ListGroup>
                    </Col>
                    
                </Row>
               
            </Container>
        </>
    )
}
export default Navbarpropietario;