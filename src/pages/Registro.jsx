import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import alumno from '../assets/imgs/alumno.jpg';
import Regalumno from '../components/Regalumno';
import Regpropietario from '../components/Regpropietario';
import { useState ,useContext} from "react";

import { CrearAlumnoApi } from "../api/Apialumno";

import ContextOrigin from "../context/Context";
const { Context } = ContextOrigin;

const Registro = () => {

    const [tipoPerfil, setTipoPerfil] = useState('');
    const { setAlumnos, Alumnos } = useContext(Context);
    const [AlumnoContext, setAlumnoContext] = useState('');

    const CrearAlumno = (AlumnoporCrear) => {
        try {
          const AlumnoCreado = CrearAlumnoApi(AlumnoporCrear)
          setAlumnoContext(AlumnoCreado);
          setAlumnos([...Alumnos, AlumnoContext]);
          console.log(Alumnos)
          alert('Datos Grabados');
        } catch (error) {
          console.log(error)
          alert('Datos no grabados, verificar completar todos los datos')
          //setAlumnoContext(null);
        }
      }
    

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
                                    <Regalumno onSubmit={CrearAlumno}/>
                                </Col>
                            </Row>
                        </div>
                    )}

                    {tipoPerfil === '2' && (
                        <div>
                            <Row>
                                <Col>
                                    <Regpropietario/>
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