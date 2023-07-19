import React from 'react'
import Imagen from "./about.jpg"

function about() {
  return (
    <div className="about-container">
    <div className="flex-about">
        <div className="about-text">

            <h1>El Menticiero</h1>

            <p align="justify">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ullam sunt eveniet enim libero quas sequi expedita est beatae voluptatem quidem, ipsa quam repellendus odio voluptates eius assumenda! Vel, voluptatibus?
            </p>

            <p align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id ullam harum pariatur at ex et rem molestiae rerum, porro labore iusto deleniti consectetur? Animi, voluptate nemo perspiciatis quisquam magni modi.
            </p>

            <p align="justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia excepturi consectetur aspernatur sequi at saepe sapiente ducimus, dolore recusandae deleniti esse facilis facere cumque error aut quia eaque. Fugiat, quia!
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
