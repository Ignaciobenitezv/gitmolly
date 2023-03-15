import React, { useState } from 'react';

function CrearUsuario() {
  // Define los estados para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [fechaNacimiento, setFechaNacimiento] = useState('');

  // Función que se llama cuando se envía el formulario
  function handleSubmit(event) {
    event.preventDefault(); // Evita que se recargue la página al enviar el formulario
    // Aquí puedes enviar los datos a tu servidor o hacer lo que necesites con ellos
    console.log('Datos del formulario:', { nombre, apellido, correo, contraseña, fechaNacimiento });
  }
   
    return (
     <form className='App-header bg-image' onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)} />
      </label>
      <label>
        Apellido:
        <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)} />
      </label>
      <label>
        Correo:
        <input type="email" value={correo} onChange={(event) => setCorreo(event.target.value)} />
      </label>
      <label>
        Contraseña:
        <input type="password" value={contraseña} onChange={(event) => setContraseña(event.target.value)} />
      </label>
      <label>
        Fecha de nacimiento:
        <input type="date" value={fechaNacimiento} onChange={(event) => setFechaNacimiento(event.target.value)} />
      </label>
      <button className='button'>Crear</button>
      </form>
    )
}
export default CrearUsuario;
