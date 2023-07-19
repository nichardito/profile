import React from 'react'

const footer = () => {
  return (
    <>
        <hr />
        <div className="footer-container">
            <p>
                &copy; {new Date().getFullYear()} Hecho con ❤️ <i className="fa-solid fa-heart"></i> por <a href="mailto:nadie@nadie.com">Cubano Positivo</a>
            </p>
            <div className="social_icons">
                <a
                    href="/"
                    aria-label="Twitter"
                >
                    <i className="fa-brands fa-twitter"></i>

                </a>
                <a
                    href="/"
                    aria-label="GitHub"
                >
                    <i className="fa-brands fa-github"></i>

                </a>
                <a
                    href="/"
                    aria-label="LinkedIn"
                >
                    <i className="fa-brands fa-linkedin"></i>
                    
                </a>
            </div>
        </div>
    </>
)

}

export default footer
