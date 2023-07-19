import React from 'react'
import logo from "./profile.jpg"

function body() {
  return (
    <div className="hero-container">
      <img src={logo} className="profile-img" width={300} height={300} alt="profile.jpg" />
      <div className="body-text">
        <h1> Hola! 👋🏾🍀</h1>

        <p align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatem optio impedit natus soluta accusantium. Aut a sequi distinctio, illo amet ut temporibus accusantium! Accusamus corrupti quis iure cum nemo.
        </p>

        <p align="justify">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure dicta quibusdam qui aperiam voluptatem nobis! Voluptas, tempora totam quam, illo repellat blanditiis, doloribus rem animi soluta maxime doloremque ipsam similique?
        </p>

        <p align="justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam fugit officiis doloribus tempore, nulla inventore perspiciatis corporis porro pariatur tempora, libero quo deleniti fuga eaque ad. Dignissimos mollitia alias at?
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
