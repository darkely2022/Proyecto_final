import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Regalumno = () => {
     
    const [idvistaalumno, setIdvistaalumno] = useState("1");
    const navigate = useNavigate();
    const irAVistaalumno = () => {
        navigate(`/vistaalumno/${idvistaalumno}`);
    };

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [rut, setRut] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [comuna, setComuna] = useState('');
    //Estado para los errores
    const [error, setError] = useState(false);
    const actualizarDatos = (e) => {
        console.log('Escribiendo')
    }
    const validarDatos = (e) => {
        e.preventDefault();
        //Validación;
        if (nombre === '' || apellido === '' || rut === '' || email === '' || password === '')
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
                        onChange={(e) => setNombre(e.target.value)}
                        value={nombre}
                    />
                </div>
                <div className="form-group">
                    <label>Apellido</label>
                    <input
                        type="text"
                        name="apellido"
                        className="form-control"
                        onChange={(e) => setApellido(e.target.value)}
                        value={apellido}
                    />
                </div>
                <div className="form-group">
                    <label>Rut</label>
                    <input
                        type="text"
                        name="rut"
                        className="form-control"
                        onChange={(e) => setRut(e.target.value)}
                        value={rut}
                    />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input
                        type="text"
                        name="password"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                    />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                </div>
                <div className="form-group">
                    <label>Comuna</label>
                    <select
                        type="comuna"
                        name="comuna"
                        className="form-control"
                        onChange={(e) => setComuna(e.target.value)}
                        value={comuna}>
                         <option value="1">Providencia</option>
                         <option value="2">Santiago</option>
                         <option value="3">Macul</option>
                    </select>
                </div>
                <button onClick={ irAVistaalumno } type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>
            
            
        </>
    );

}
export default Regalumno;