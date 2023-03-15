import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
    return (
        <div className='nav'>
            <Link to='/'>
                <img src='./molly.png' width='100'/>
            </Link>
            <ul className='nav nav-tabs'>
                
                <li className='nav-item'>
                    <Link className='nav-link' to='/iniciarsesion'>Iniciar Sesion</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/crearusuario'>Crear Usuario</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/auth'>Auth</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' to='/contacto'>Nosotros</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar