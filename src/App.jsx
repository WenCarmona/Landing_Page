import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  // Importamos React Router
import Navbar from './components/Navbar/Navbar';
import Fondo from './assets/Fondo.jpeg';
import Inicio from './pages/Inicio';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'bottom',
    backgroundSize: 'cover',
    opacity: 0.80,
  };

  return (
    <Router>
      <div style={bgImagen} className="overflow-hidden min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
      
    </Router>
  );
}

export default App;
