import React from 'react';
import img from '../assets/contacto.png'; 
import { motion } from 'framer-motion'; 

const SobreNosotros = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col items-center justify-center py-56 px-4 sm:px-12 lg:px-24">
      
      <motion.h1 
        className="text-4xl font-bold text-center text-lime-600 mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Sobre Nosotros
      </motion.h1>
      
      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        **<span className="font-bold text-lime-600 hover:text-lime-700">Glamping El Descanso</span>** es un refugio 
        único donde la naturaleza se encuentra con el lujo y el confort. En nuestro resort, hemos creado una experiencia 
        incomparable que combina la emoción de la aventura al aire libre con el confort de las comodidades modernas. Ya 
        sea que busques una escapada romántica, una aventura familiar o un retiro en la naturaleza, 
        en **<span className="font-bold text-lime-600 hover:text-lime-700">Glamping El Descanso</span>** tenemos 
        algo para todos.
      </motion.p>

      <motion.p
        className="text-lg text-gray-700 leading-relaxed mb-6 max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        Nos enorgullece ofrecer un espacio donde nuestros huéspedes pueden desconectar del ajetreo 
        diario y reconectar con la paz y serenidad que solo la naturaleza puede brindar. Disfruta de 
        nuestras acogedoras tiendas de lujo, totalmente equipadas, rodeadas de paisajes impresionantes, 
        aire puro y una atmósfera tranquila que te permitirá relajarte y recargar energías.
      </motion.p>

      <motion.div
        className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        <h2 className="font-semibold text-xl text-lime-600">¿Por qué elegirnos?</h2>
        <ul className="list-disc list-inside text-left mt-4">
          <li>
            <span className="font-bold text-lime-600 hover:text-lime-700">Confort y lujo en la naturaleza:</span> Cada
             una de nuestras tiendas está diseñada para ofrecerte una experiencia de camping con todas las comodidades de 
             un hotel de lujo. Desde camas cómodas y baños privados hasta áreas comunes con todo lo necesario para relajarte
             y disfrutar.
          </li>
          <li>
            <span className="font-bold text-lime-600 hover:text-lime-700">Ubicación privilegiada:</span> Nuestro 
            resort está ubicado en un entorno natural inigualable, donde podrás disfrutar de paisajes asombrosos, 
            senderos para explorar y actividades al aire libre, todo mientras te sumerges en el sonido relajante 
            de la naturaleza.
          </li>
          <li>
            <span className="font-bold text-lime-600 hover:text-lime-700">Sostenibilidad:</span> Estamos
            comprometidos con el respeto al medio ambiente. Trabajamos con prácticas sostenibles para preservar el entorno
            natural y asegurar que nuestras futuras generaciones puedan disfrutar de este paraíso.
          </li>
          <li>
            <span className="font-bold text-lime-600 hover:text-lime-700">Experiencia personalizada:</span> Nos 
            esforzamos por ofrecerte una experiencia única y personalizada. Nuestro equipo está siempre disponible
             para ayudarte a organizar actividades como paseos guiados, noches bajo las estrellas, cenas al aire libre
             y mucho más.
          </li>
        </ul>
      </motion.div>

      <motion.div
        className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        <h2 className="font-semibold text-xl text-lime-600">Nuestra misión</h2>
        <p className="mt-4">
          En <span className="font-bold text-lime-600 hover:text-lime-700">Glamping El Descanso</span>, nuestra misión
           es brindarte una escapatoria perfecta en la naturaleza, sin comprometer el confort. Queremos que cada huésped
           que visite nuestro resort se sienta renovado, inspirado y conectado con la belleza natural que nos rodea.
        </p>
        <p className="mt-4">
          Te invitamos a descubrir la magia del glamping y a crear recuerdos inolvidables con nosotros. ¡Ven y 
          vive una experiencia única!
        </p>
      </motion.div>

      <div className="flex justify-center mb-8">
        <motion.img 
          src={img} 
          alt="Imagen sobre nosotros"
          className="w-full max-w-lg rounded-lg shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1.4 }}
        />
      </div>

      <div className="flex justify-center">
        <motion.a
          href="https://wa.me/ " 
          target="_bank"
          rel="noopener noreferrer"
          className="bg-lime-500 hover:bg-lime-600 text-white font-bold py-2 px-8 rounded-full shadow-md flex items-center gap-2 transition-all duration-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.6 }}
        >
          <i className="bi bi-whatsapp text-2xl"></i>
          Reserva aquí
        </motion.a>
      </div>
    </section>
  );
}

export default SobreNosotros;