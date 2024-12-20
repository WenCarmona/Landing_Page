import React from 'react';
import Principal from "../../assets/IMG1.PNG";
import carrusel1 from "../../assets/IMG3.WEBP";
import carrusel2 from "../../assets/IMG5.WEBP";
import carrusel3 from "../../assets/IMG6.WEBP";
import carrusel4 from "../../assets/IMG4.WEBP";
import carrusel5 from "../../assets/IMG7.WEBP";
import carrusel6 from "../../assets/IMG8.WEBP";
import { motion } from "framer-motion";
import { animacion } from '../../utility/animation';
import Slider from "react-slick"; 
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Hero = () => {
  const settings = {
    dots: true,  
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true,  
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2, 
          slidesToScroll: 2, 
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
      {
        breakpoint: 480, 
        settings: {
          slidesToShow: 1, 
          slidesToScroll: 1, 
        },
      },
    ],
  };

  return (
    <section className="mt-40 min-h-screen pt-16"> 
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className='p-10'>
      <img src={Principal} alt="imagen principal" className="w-full min-h-screen md:h-screen h-auto" />
      <motion.p
        className="py-12 text-white text-1xl md:text-2xl lg:text-2xl" 
        initial="initial"
        animate="animate"
      >
        ¡Descubre la magia de Glamping El Descanso en nuestros videos! 
        Te invitamos a visitar nuestro canal de YouTube, donde podrás sumergirte en 
        las experiencias únicas que ofrecemos en nuestro Resort. Desde las vistas 
        espectaculares hasta las aventuras que puedes disfrutar en plena naturaleza, nuestros 
        videos capturan la esencia de lo que significa vivir el "glamping". 
        ¡No te lo pierdas! Haz clic en el enlace y acompáñanos en esta aventura 
        visual que te hará sentir la paz y la emoción de estar en nuestro paraíso natural.
      </motion.p>

      <div className="flex justify-center gap-4">
        <a 
          href="https://www.youtube.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-lime-400 py-2 px-12 rounded-3xl text-white hover:bg-black transition-all 
            duration-300 items-center cursor-pointer ml-1 text-2xl"
        >
          Ver Video
          <i className="bi bi-youtube items-center text-xl ml-2"></i>
        </a>
      </div>
    </div>

    <div className="mt-40 min-h-screen h-auto md:h-screen">
    <Slider {...settings}>
      <motion.img
        src={carrusel1}
        alt="Imagen 1"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-full object-cover rounded-xl"
      />
      <motion.img
        src={carrusel2}
        alt="Imagen 2"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-full object-cover rounded-xl"
      />
      <motion.img
        src={carrusel3}
        alt="Imagen 3"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-full object-cover rounded-xl"
      />
      <motion.img
        src={carrusel4}
        alt="Imagen 4"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-full object-cover rounded-xl"
      />
      <motion.img
        src={carrusel5}
        alt="Imagen 5"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-full object-cover rounded-xl"
      />
      <motion.img
        src={carrusel6}
        alt="Imagen 5"
        variants={animacion(0.5)}
        initial="initial"
        animate="animate"
        className="carousel-image w-full h-screen object-cover rounded-xl"
      />
    </Slider>
    </div>
  </div>
</section>
  );
};

export default Hero;