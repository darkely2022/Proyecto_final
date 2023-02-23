import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import alumno from '../assets/imgs/alumno.jpg';
import Regalumno from '../components/Regalumno';
import Regpropietario from '../components/Regpropietario';
import { useState } from "react";

const Registro = () => {


    const [tipoPerfil, setTipoPerfil] = useState('');

    return (
        <Container >
            <Row bg="light">
                <Col>
                    <h1>Indica si eres estudiante o propietario</h1>
                </Col>
            </Row>
            <Row bg="light">
                <Col xs={6}>
                    <img src={alumno} className="alumno_ini" alt="alumno" />
                </Col>
                <Col xs={6}>
                    <div>
                        <Form.Label htmlFor="inputPassword5">Selecciona tu perfil</Form.Label>
                        <Form.Select aria-label="Default select example"
                            onChange={(e) => setTipoPerfil(e.target.value)}
                            value={tipoPerfil}>

                            <option>Perfil</option>
                            <option value="1">Estudiante</option>
                            <option value="2">Propietario</option>
                        </Form.Select>
                    </div>


                    {tipoPerfil === '1' && (
                        <div>
                            <Row>
                                <Col>
                                    <Regalumno></Regalumno>
                                </Col>
                            </Row>
                        </div>
                    )}

                    {tipoPerfil === '2' && (
                        <div>
                            <Row>
                                <Col>
                                    <Regpropietario></Regpropietario>
                                </Col>
                            </Row>
                        </div>
                    )}

                </Col>
            </Row>
        </Container>
    );

}
export default Registro;