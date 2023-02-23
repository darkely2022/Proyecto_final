import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Regpropietario = () => {
     
    const [idvistaalumno, setIdvistaalumno] = useState("2");
    const navigate = useNavigate();
    const irAVistaPropietario = () => {
        navigate(`/vistapropietario/${idvistaalumno}`);
    };

    const [nombrePropietario, setNombrePropietario] = useState('');
    const [apellidoPropietario, setApellidoPropietario] = useState('');
    const [rutPropietario, setRutPropietario] = useState('');
    const [passwordPropietario, setPasswordPropietario] = useState('');
    const [emailPropietario, setEmailPropietario] = useState('');
    const [comunaPropietario, setComunaPropietario] = useState('');
    //Estado para los errores
    const [error, setError] = useState(false);
    const actualizarDatos = (e) => {
        console.log('Escribiendo')
    }
    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombrePropietario === '' || apellidoPropietario === '' || rutPropietario === '' || emailPropietario === '' || passwordPropietario === '' || comunaPropietario ==='')
        {
            setError(true);
            return;
        }
    };

    return (
        <>
            <form className="formulario" onSubmit={validarDatos}>
                {error ? <p>Todos los campos son obligatorios</p> : null}
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
                         <option>Seleccionar comuna</option>
                         <option value="1">Providencia</option>
                         <option value="2">Santiago</option>
                         <option value="3">Macul</option>
                    </select>
                </div>
                <button onClick={ irAVistaPropietario } type="submit" className="btn btn-primary">
                    Grabar
                </button>
            </form>
            
            
        </>
    );

}
export default Regpropietario;