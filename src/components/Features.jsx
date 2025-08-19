import React from 'react';
import { Link } from "react-router-dom";
import styles from "./Features.module.css";


const Features = () => {
  return (
  <div className={styles.aboutPage}>
    <section className="w3l-feature-with-photo-1">
      <section className="w3l-featureshny py-5" id="features">
        <div className="container py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-8 pe-lg-5 mb-lg-0 mb-5">
              <div className="w3l-header-sec text-left mb-md-5 mb-4">
                <h6 className="title-subhny mb-2">
                  <span>¿Por qué elegirnos?</span>
                </h6>
                <h5>
                  Impulsamos tu crecimiento con soluciones tecnológicas confiables: {" "}
                  <span className="span-bold">Análisis y Estrategia</span>
                </h5>
                <p className="mt-3 pr-lg-5">
                  Evaluamos tus necesidades para diseñar soluciones innovadoras y adaptadas a tu negocio.
                </p>
                <Link
                  to="/services"
                  className="btn btn-primary btn-style mt-lg-5 mt-4"
                >
                  Leer más
                  <span className="fas fa-angle-double-right ms-2"></span>
                </Link>
              </div>
            </div>

            <div className="col-lg-4 mb-lg-0 mb-md-5 mb-4">
              <div className="whybox-wrap mb-4">
                <div className="whybox-wrap-grid">
                  <div className="icon">
                    <span className="fas fa-lightbulb"></span>
                  </div>
                  <div className="info">
                    <h4>
                      <Link to="#">Calidad y Seguridad</Link>
                    </h4>
                    <p className="mt-3">
                      Implementamos tecnologías con altos estándares para garantizar eficiencia y protección.
                    </p>
                  </div>
                </div>
              </div>

              <div className="whybox-wrap mb-4">
                <div className="whybox-wrap-grid">
                  <div className="icon">
                    <span className="fas fa-database"></span>
                  </div>
                  <div className="info">
                     <h4>
                          <Link to="#">Soporte y Acompañamiento</Link>
                      </h4>
                    <p className="mt-3">
                      Ofrecemos un servicio integral con asistencia continua para asegurar tu tranquilidad.
                    </p>
                  </div>
                </div>
              </div>

              <div className="whybox-wrap">
                <div className="whybox-wrap-grid">
                  <div className="icon">
                    <span className="fas fa-chart-area"></span>
                  </div>
                  <div className="info">
                     <h4>
                        <Link to="#">Entrega y Optimización</Link>
                      </h4>
                    <p className="mt-3">
                      Garantizamos una implementación eficiente, asegurando que cada solución tecnológica funcione 
                      de manera óptima para tu negocio.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </section>
  </div> 
  );
};

export default Features;
