import React from 'react'
import logo from "./profile.jpg"

function body() {
  return (
    <div className="hero-container">
      <img src={logo} className="profile-img" width={300} height={300} alt="profile.jpg" />
      <div className="body-text">
        <h1> 👷🏾‍♂️👷🏾‍♂️👷🏾‍♂️ </h1>
        <h1> Hola! 👋🏾🍀</h1>

        <p align="justify">
          
          Soy Juan Carlos, Técnico en Computación y Tecnologías de la Información, resuelto y habilidoso para la resolución de problemas, ofreciendo soluciones de calidad, eficientes y duraderas a los diferentes  problemas técnicos reportados, así como para prevenir futuros problemas físicos y prolongar la vida de los equipos, responsable y comprometido, ávido a la superación personal y profesional con mucha voluntad y disposición para el trabajo, poseo un nivel medio del idioma inglés, tengo más de veinte años de experiencia en el sector de las TI, destacando entre mis competencias y habilidades la instalación y administración de redes y servicios en sistemas operativos Linux y MS Windows (Estaciones y Servidores).
        </p>
        
        <div className="social-icons">
          <a
            href="/"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="/"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default body
