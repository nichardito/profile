import React from 'react'
import Imagen from "./about.jpg"

function about() {
  return (
    <div className="about-container">
    <div className="flex-about">
        <div className="about-text">

            <h1>El Menticiero</h1>

            <p align="justify">
                El Menticiero es un sitio de noticias que ofrece información veraz, actualizada y entretenida sobre Cuba y El Mundo.
            </p>

            <p align="justify">
                Aquí encontrarás reportajes, entrevistas, análisis y opinión sobre los temas más relevantes de la política, la economía, la cultura, la ciencia y el deporte.
            </p>

            <p align="justify">
                El Menticiero te invita a pensar, a cuestionar y a participar en el debate público con una mirada crítica y constructiva. El Menticiero es el sitio de noticias que no te miente.
            </p>
            
        </div>
        <div className="about-img">
            <img src={Imagen} className="profile-img" width={300} height={500} alt="about.jpg"/>
        </div>
    </div>
    </div>
  )
}

export default about
