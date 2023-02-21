import Regpropiedad from '../components/propietario_comp/Regpropiedad';
import Vistapropublicada from '../components/propietario_comp/Vistapropublicada';
import Vistaproreservada from '../components/propietario_comp/Vistaproreservada';
import { useState } from "react";
import Navbarpropietario from './propietario_sub/Navbarpropietario';
import Datospropietario from '../components/propietario_comp/Datospropietario';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Vistapropietario = () => {

  const [internalRoute, setIntervalRoute] = useState('ingresar-propiedad');

  return (
    <>
      <Container fluid>
        {/*{userContex_rol==='estudiante'
            (<Navbarpropietario/>)
          } */}
        <Row>
          <Col>
            <Navbarpropietario setIntervalRoute={setIntervalRoute} />
          </Col>
        </Row>
        {internalRoute === 'ingresar-propiedad' && (
          <Row>
            <Col>
              <Regpropiedad />
            </Col>
          </Row>
        )
        }
        {internalRoute === 'datos-propietario' && (
          <Row>
            <Col>
              <Datospropietario />

            </Col>
          </Row>
        )
        }
        {internalRoute === 'propiedades-publicadas' && (

          <Row>
            <Col>
              <Vistapropublicada />
            </Col>
          </Row>
        )
        }
        {internalRoute === 'propiedades-reservadas' && (

          <Row>
            <Col>
              <Vistaproreservada />
            </Col>
          </Row>
        )
        }
      </Container>
    </>
  )
}
export default Vistapropietario;