import React from "react";
import { Link } from "react-router-dom";
import Home from "./Home";
import '../App.css'

function Contacto() {
    return(
    <div className="App-header">
        <h1>ACERCA DE NOSOTROS</h1>
        <p>En un texto “Sobre nosotros”, debes contar la historia de tu empresa, tus valores y tu visión de la empresa de forma auténtica. También has de presentar a tu equipo. De este modo, ofrecerás a los visitantes de tu página web la posibilidad de establecer una conexión emocional con tu empresa.</p>
        
        <Link to='/' onClick={<Home/>}>
           volver al Home
        </Link>
    </div>
    );
}
export default Contacto;
