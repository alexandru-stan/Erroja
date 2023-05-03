/* eslint-disable react/function-component-definition */
/* eslint-disable no-unused-vars */

import {
  BrowserRouter as Router, Route, Routes,
} from 'react-router-dom';
import React from 'react';
import Login from './page_components/Login';
import HomeProfesor from './page_components/HomeProfesor';
import NoSessionError from './page_components/NoSessionError';
import CrearIncidencia from './page_components/CrearIncidencia';
import IncidenciaCreada from './page_components/IncidenciaCreada';
import VerIncidencias from './page_components/VerIncidencias';
import HomeAdmin from './page_components/HomeAdmin';
import Registrarse from './page_components/Registrarse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/HomeProfesor" element={<HomeProfesor />} />
        <Route path="/NoSessionError" element={<NoSessionError />} />
        <Route path="/CrearIncidencia" element={<CrearIncidencia />} />
        <Route path="/IncidenciaCreada" element={<IncidenciaCreada />} />
        <Route path="/VerIncidencias" element={<VerIncidencias />} />
        <Route path="/HomeAdmin" element={<HomeAdmin />} />
        <Route path="/Registrarse" element={<Registrarse />} />
      </Routes>
    </Router>

  );
}

export default App;
