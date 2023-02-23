import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from "react";

import foto_propietario from '../../assets/imgs/propietario.jpg';

const Datospropietario = () => {

    const [nombrePropietario, setNombrePropietario] = useState('');
    const [apellidoPropietario, setApellidoPropietario] = useState('');
    const [rutPropietario, setRutPropietario] = useState('');
    const [passwordPropietario, setPasswordPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [comunaPropietario, setComunaPropietario] = useState('');
    const [error, setError] = useState(false);

    const validarDatosPropietario = (e) => {
        e.preventDefault();
        //Validación;
        if (passwordPropietario === '' || emailPropietario === '' || comunaPropietario === '') {
            setError(true);
            alert('Datos deben ser completados')
            return;

        }

    };

    const ActualizarPropietario = () => {
        if (error === 'false') {
            alert('Datos actualizados')
        }
    }



    return (
        <>
            <Container fluid>
                <Row>
                    <Col><h2>Datos propietario</h2></Col>
                </Row>
                <Row>
                    <Col xs={6}>
                        <img src={foto_propietario} className="propietario_ini" alt="propietario" />
                    </Col>
                    <Col xs={6}>
                        <form className="formulario" onSubmit={validarDatosPropietario}>
                            {/*{error ? <p>Todos los campos son obligatorios</p> : null}*/}
                            <div className="form-group">
                                <label>Nombre</label>
                                <input
                                    type="text"
                                    name="nombre"
                                    className="form-control"
                                    onChange={(e) => setNombrePropietario(e.target.value)}
                                    value={nombrePropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Apellido</label>
                                <input
                                    type="text"
                                    name="apellido"
                                    className="form-control"
                                    onChange={(e) => setApellidoPropietario(e.target.value)}
                                    value={apellidoPropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Rut</label>
                                <input
                                    type="text"
                                    name="rut"
                                    className="form-control"
                                    onChange={(e) => setRutPropietario(e.target.value)}
                                    value={rutPropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    type="text"
                                    name="password"
                                    className="form-control"
                                    onChange={(e) => setPasswordPropietario(e.target.value)}
                                    value={passwordPropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={(e) => setEmailPropietario(e.target.value)}
                                    value={emailPropietario}
                                />
                            </div>
                            <div className="form-group">
                                <label>Comuna</label>
                                <select
                                    type="comuna"
                                    name="comuna"
                                    className="form-control"
                                    onChange={(e) => setComunaPropietario(e.target.value)}
                                    value={comunaPropietario}>
                                    <option value="1">Providencia</option>
                                    <option value="2">Santiago</option>
                                    <option value="3">Macul</option>
                                </select>
                            </div>
                            <button onClick={ActualizarPropietario} type="submit" className="btn btn-primary">
                                Modificar
                            </button>
                        </form>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Datospropietario;