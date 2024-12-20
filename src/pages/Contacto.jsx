import React, { useState, useEffect } from 'react';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); 
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    alert('Formulario enviado');
    
    setFormData({
      nombre: '',
      email: '',
      mensaje: '',
    });
  };

  return (
    <section className="p-56 bg-gray-50">
      <h1 className={`text-4xl font-bold text-center text-lime-600 mb-6 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        Reserva Con Nosotros
      </h1>

      <p className={`text-lg text-gray-700 mb-6 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        ¿Tienes alguna pregunta? ¡Estamos aquí para ayudarte! Completa el formulario y nos pondremos en contacto contigo a la brevedad.
      </p>

      <div className={`max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <label htmlFor="nombre" className="block text-gray-700 font-semibold">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <label htmlFor="email" className="block text-gray-700 font-semibold">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              required
            />
          </div>

          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <label htmlFor="mensaje" className="block text-gray-700 font-semibold">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              value={formData.mensaje}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-500"
              rows="4"
              required
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-3 px-8 rounded-full shadow-md transition-all duration-300"
            >
              Enviar Mensaje
            </button>
          </div>
        </form>
      </div>

      <div className={`mt-12 text-center ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} transition-all duration-1000`}>
        <h2 className="text-2xl font-semibold text-lime-600 mb-4">Otros Métodos de Contacto</h2>
        <p className="text-lg text-gray-700 mb-2">También puedes contactarnos a través de:</p>
        <ul className="space-y-2 text-lg text-gray-700">
          <li>
            <a href="mailto:glamping_descanso@tuempresa.com" className="hover:text-lime-600">
              <i className="bi bi-envelope"></i> glamping_descanso@tuempresa.com
            </a>
          </li>
          <li>
            <a href="tel:+57234567890" className="hover:text-lime-600">
              <i className="bi bi-telephone"></i> +57 (234) 567-890
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-lime-600">
              <i className="bi bi-instagram"></i> Instagram
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Contacto;