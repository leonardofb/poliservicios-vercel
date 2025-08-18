// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <footer className="w3l-footer-29-main">
        <div className="footer-29 py-5">
          <div className="container py-lg-4">
            <div className="row align-items-center mb-3">
              <h2 className="sign-left col-lg-7">
              “Únete a nuestra comunidad y haz crecer tu negocio con tecnología.”
              </h2>
              <div className="footerw3-btn col-lg-5 ps-lg-5">
                <Link to="#" className="btn btn-secondary btn-style">
                Pruébalo gratis{" "}
                  <span className="fas fa-angle-double-right ms-2"></span>
                </Link>
              </div>
            </div>

            <div className="row footer-top-29 mt-md-5 mt-4">
              <div className="col-lg-4 col-md-6 footer-list-29 footer-1 pe-lg-5">
                <h6 className="footer-title-29">A Dónde quiero llegar a:</h6>
                <div className="footer-listw3-grids">
                  <p className="pe-lg-4">
                  Mi objetivo a corto plazo es expandir la presencia y reputación de Poliservicios a
                  nivel regional, centrándome en los municipios aledaños para consolidar nuestra
                  posición en el mercado local.
                  </p>
                  <div className="w3pt-call-box mt-4">
                    <div className="w3pt-call-info">
                      <h5>Support</h5>
                      <h5>
                        <a href="tel:+1(21) 234 557 456">
                          <i className="fas fa-phone-alt me-1"></i> +1(57) 310 233 54 00 - 317 536 97 74
                        </a>
                      </h5>
                      <h5>
                        Nuestra Historia
                          <i className="far fa-envelope me-1"></i>
                          
                          <a href="mailto:support@mail.com" className="mail">
                            poliservicios2022@mail.com
                          </a>
                       </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Links</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link to="#us">Sobre Nosotros</Link>
                    </li>
                    <li>
                      <Link to="#team">Nuestro Equipo</Link>
                    </li>
                    <li>
                      <Link to="#pro">Projectos</Link>
                    </li>
                    <li>
                      <Link to="#career">Carreras</Link>
                    </li>
                    <li>
                      <Link to="#terms">Condiciones de Uso</Link>
                    </li>
                    <li>
                      <Link to="#tips">Política de Privacidad</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-md-6 footer-list-29 footer-3 mt-lg-0 mt-5">
                <h6 className="footer-title-29">Servicios</h6>
                <div className="footer-listw3-grids">
                  <ul className="footer-listw3">
                    <li>
                      <Link to="#lift">Servicios seguros</Link>
                    </li>
                    <li>
                      <Link to="#cardio">Organización digital</Link>
                    </li>
                    <li>
                      <Link to="#fit">Estrategia de contenido</Link>
                    </li>
                    <li>
                      <Link to="#tips">Servicios de procesamiento</Link>
                    </li>
                    <li>
                      <Link to="#tips">Web hosting</Link>
                    </li>
                    <li>
                      <Link to="#tips">Optimización de páginas</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 footer-list-29 footer-4 mt-lg-0 mt-5 ps-lg-5">
                <h6 className="footer-title-29">Mantener conectad@</h6>
                <p>Reciba actualizaciones suscribiéndose a nuestro boletín semanal</p>
                <form action="#" className="subscribe" method="post">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    required
                  />
                  <button>
                    <span className="fas fa-paper-plane"></span>
                  </button>
                </form>
                    <div className="main-social-footer-29 mt-4"> 
                       <a href="https://www.facebook.com/Leonardo.Fierro.B/" className="facebook" target="_blank" rel="noopener noreferrer">
                        <span className="fab fa-facebook-f"></span>
                        </a>
                        <a href="https://twitter.com/" className="twitter" target="_blank" rel="noopener noreferrer">
                        <span className="fab fa-twitter"></span>
                        </a>
                        <a href="https://www.instagram.com/" className="instagram" target="_blank" rel="noopener noreferrer">
                        <span className="fab fa-instagram"></span>
                        </a>
                        <a href="https://www.linkedin.com/" className="linkd" target="_blank" rel="noopener noreferrer">
                        <span className="fab fa-linkedin-in"></span>
                      </a>
                  </div>
              </div>
            </div>
            <div className="bottom-copies text-center">
              <p className="copy-footer-29">
                © 2025 Poliservicios. All rights reserved. Design by{" "}
                <Link to="https://poliservicios.com.co/" target="_blank">
                  W3Layouts y Leonardo Fierro B.
                </Link>
              </p>
            </div>
          </div>
        </div>
      </footer>
    );
};
export default Footer;
