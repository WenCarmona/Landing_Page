import React from "react";
import Hero from "../components/Hero/Hero";

const Inicio = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-screen text-white"
        style={{
          backgroundImage: `url('../assets/fondo.jpg')`, 
        }}
      >
        
        <div className="h-full flex flex-col justify-center items-center text-center pt-24 sm:pt-32 md:pt-40 lg:pt-56">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-4">
            <span className="typing-effect text-sky-50">
              Bienvenidos a <br />
              Glamping El Descanso
            </span>
          </h1>

          <p className="text-xl text-white font-bold px-4 sm:px-8 md:px-16 lg:px-24">
            Sumérgete en la naturaleza y vive una experiencia única en nuestro{" "}
            <span className="text-lime-500 hover:text-lime-700 transition-all duration-300">
              Glamping Resort
            </span>
            , un refugio de lujo en medio de la serenidad del paisaje natural. Desconéctate del estrés
            diario y reconéctate con la belleza de la naturaleza sin renunciar a la comodidad. Con nuestras
            instalaciones sostenibles y un enfoque ecológico, te ofrecemos la oportunidad de disfrutar de unas
            vacaciones relajantes y conscientes del medio ambiente. ¡Ven y vive la experiencia de{" "}
            <span className="text-lime-500 hover:text-lime-700 transition-all duration-300">
              Glamping El Descanso
            </span>!
          </p>
        </div>
      </div>

      <div className="relative pr-8"> 
        <Hero /> 
      </div>
    </div>
  );
};

export default Inicio;