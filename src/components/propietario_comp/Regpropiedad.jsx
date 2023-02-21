import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import foto_propiedad from '../../assets/imgs/propiedad.jpg';
const Regpropiedad = () => {

return(
    <>
       <Container fluid>
                <Row>
                    <Col><h1>Datos de la propiedad</h1></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_propiedad} className="propietario_ini" alt="propiedad" />
                    </Col>
                    <Col xs={6}>
                        <h1>Nombre</h1>
                    </Col>
                </Row>
            </Container>
    </>
)    
}
export default Regpropiedad;