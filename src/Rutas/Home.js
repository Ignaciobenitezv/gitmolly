
import { Link } from "react-router-dom";
import Contacto from "./Contacto";
import IniciarSesion from "./IniciarSesion"
import '../App.css';
import Auth from "./Auth";
import CrearUsuario from "./CrearUsuario";

function Home () {
    return (
        <div className="App-header bg-image img-redimension">
            <h1>Bienvenidos!</h1>
            <h2>Inicie sesion o Cree su usuario</h2>
            <br></br>

            <Link to='/iniciarsesion'>
                <button className="button">Iniciar sesión</button>
            </Link>
            <br></br>
            <Link to='/crearusuario'>
                <button className="button">Crear Usuario</button>
            </Link>
                
        
        {
        
                
        
        /*
            <Link to='/iniciarsesion' onClick={() => <IniciarSesion/>}>
            </Link>
        <Link to='/iniciarsesion' onClick={<IniciarSesion/>}>
            Iniciar Sesion
        </Link>
        <Link to='/contacto' onClick={<Contacto/>}>
            contacto
        </Link>
        <Link to='/auth' onClick={<Auth/>}>
            Auth
        </Link> */}


        </div>

    );
}
export default Home;