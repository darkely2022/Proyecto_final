import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import foto_propietario from '../../assets/imgs/propietario.jpg';

const Datospropietario = () => {

    return (
        <>
            <Container fluid>
                <Row>
                    <Col><h1>Datos propietario</h1></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_propietario} className="propietario_ini" alt="propietario" />
                    </Col>
                    <Col xs={6}>
                        <h1>Rut</h1>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Datospropietario;