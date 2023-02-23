import Regpropiedad from '../components/propietario_comp/Regpropiedad';
import Datospropietario from '../components/propietario_comp/Datospropietario';
import Vistapropublicada from '../components/propietario_comp/Vistapropublicada';
import Vistaproreservada from '../components/propietario_comp/Vistaproreservada';
import { useState , useEffect} from "react";
import Navbarpropietario from './propietario_sub/Navbarpropietario';

import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { CrearPropiedadApi, ListarpropiedadesApi } from '../api/Apipropiedad';

const Vistapropietario = () => {

  const [internalRoute, setIntervalRoute] = useState('ingresar-propiedad');
  const [PropiedadesContext, setPropiedadesContext] = useState('');
  const [listaprop]  = ListarpropiedadesApi();

  const CrearPropiedad = (PropiedadporCrear) => {
    try {
      const propiedadCreada = CrearPropiedadApi(PropiedadporCrear)
      setPropiedadesContext(propiedadCreada);
      alert('Datos Grabados');
    } catch (error) {
      console.log(error)
      alert('Datos no grabados, verificar completar todos los datos')
      setPropiedadesContext(null);
    }
  }


const PropiedadesView = () => {

  const [propiedades, setPropiedades] = useState([]);

  // PropiedadesContext

  useEffect(() => {
      const propiedades = ListarpropiedadesApi();
      setPropiedades(propiedades);
  }, []);

  return (
      <Vistapropublicada  propiedades/>
  )
};
  
 /* const ListadoPropiedades = () => {
    try {
      const [listaprop]  = ListarpropiedadesApi();
      console.log('listar propiedades')
      console.log(ListarpropiedadesApi);
      alert('Datos Cargados')
      
    } catch (error) {
        alert('Error al cargar los datos')
    }
  }*/

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
              <Regpropiedad onSubmit={CrearPropiedad} />
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
            PropiedadesView()
         /* <Row>
            <Col>
              <Vistapropublicada onLoad={[listaprop]} />
            </Col>
          </Row>*/
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