
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Table, Button } from 'react-bootstrap';

const Vistapropublicada = (onLoad) => {

    const [data] = JSON.stringify(onLoad); // JSON.parse(JSON.stringify(onLoad))
    //const data= []
   // console.log('data');
   // console.log(data);
   // console.log('Onload');
   // console.log(onLoad);
    return (
        <>
            <Container >
                <Row>
                    <Col>
                        <h2>Propiedades publicadas</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Folio</th>
                                    <th>Nombre</th>
                                    <th>Dirección</th>
                                    <th>Comuna</th>
                                    <th>N°Habitaciones</th>
                                    <th>Metros</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                              
                               {/* {data.map((dato) => (

                                   { <tr key={dato.nombrepropiedad}>
                                        <td>{dato.direccionpropiedad}</td>
                                        <td>{dato.comuna}</td>
                                        <td>{dato.numhabitacion}</td>
                                        <td>{dato.metrospropiedad}</td>
                                        <td>{dato.valorpropiedad}</td>

                                </tr>
                                ))}*/}
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default Vistapropublicada;