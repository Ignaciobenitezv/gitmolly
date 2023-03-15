
import './App.css';
import Home from './Rutas/Home';
import {
  Route,
  Routes
} from "react-router-dom";
import Contacto from './Rutas/Contacto';
import IniciarSesion from './Rutas/IniciarSesion';
import Ath from './Rutas/Auth';
import Auth from './Rutas/Auth';
import Navbar from './Rutas/Navbar';
import CrearUsuario from './Rutas/CrearUsuario';
import {Container} from '@mui/material'    
import TaskForm from './Rutas/TaskForm';



function App() {
  return(

    <div className='App'>
    <Navbar/>   
    <Container>  
    <Routes>  
      <Route path='/' element={<Home/>} />
      <Route path='/contacto' element={<Contacto/>} />
      <Route path='/Auth' element={<Auth/>} />
      <Route path='/iniciarsesion' element={<IniciarSesion/>} />
      <Route path='/crearusuario' element={<CrearUsuario/>} />
      <Route path='/task' element={<TaskForm/>} />
    </Routes>
  </Container>
  </div>
  )
}
export default App;

