import React from "react";
import { Link } from "react-router-dom";
import styles from "./About.module.css";

const ab1 = "/images/ab1.jpg"; // Ruta correcta para imágenes en public/


// Importa las imágenes que necesites (ajusta las rutas según tu estructura)
import ab2 from "/images/ab2.jpg";
import team1 from "/images/team1.jpg";
import team2 from "/images/team2.jpg";
import team3 from "/images/team3.jpg";
import team4 from "/images/team4.jpg";

const About = () => {
  return (
    <div className={styles.aboutPage}>
         
      <section className="w3l-feature-with-photo-1">
        <div className="feature-with-photo-hny py-5">
          <div className="container py-lg-5">
            <div className="feature-with-photo-content">
              <div className="ab-in-flow row mb-lg-5 mb-3">
                <div className="col-lg-6 ab-left pe-lg-5">
                  <img
                    src={ab2}
                    alt="About Us"
                    className="img-fluid radius-image"
                  />
                </div>
                <div className="col-lg-6 ab-right pl-lg-5">
                  <h6 className="title-subhny mb-2">
                    <span>Quiénes somos</span>
                  </h6>
                  <h3 className="title-w3l mb-4">
                  {"Compromiso, Calidad y Confianza "}
                  </h3>
                  <span className="span-bold title-subhny mb-4">{"El aliado que necesitas."}</span>
                                   
                  <p className="my-4">
                  En Poliservicios nos dedicamos a ofrecer soluciones tecnológicas que
                  garantizan seguridad y satisfacción. Basamos nuestro trabajo en la calidad, 
                  confiabilidad y compromiso, lo que convierte cada servicio en una experiencia 
                  indispensable para quienes buscan la excelencia. Nuestro enfoque personalizado 
                  hace que nuestros clientes siempre quieran contar con nosotros.
                  </p>
                  <Link to="/services" className="btn btn-style btn-primary mt-2">
                    Read More{" "}
                    <span className="fas fa-angle-double-right ml-2"></span>
                  </Link>
                </div>
              </div>
              <div className="three-grids d-grid grid-columns-3 mt-lg-5 pt-lg-4">
                <div className="grid">
                  <h3 className="title-w3l mb-4">
                  ¿Que . <span className="span-bold">hacemos?</span>
                  </h3>
                </div>
                <div className="grid">
                  <div className="three-grids-icon">1</div>
                  <h4>
                    <Link to="#">Nuestra misión</Link>
                  </h4>
                  <p>
                  Ofrecer soluciones integrales en tecnología y seguridad, garantizando 
                  calidad y eficiencia para la tranquilidad de nuestros clientes.
                  </p>
                </div>
                <div className="grid">
                  <div className="three-grids-icon">2</div>
                  <h4>
                    <Link to="#">Nuestra visión</Link>
                  </h4>
                  <p>
                  Ser líderes en tecnología y seguridad, expandiéndonos 
                  y marcando la diferencia con innovación y excelencia.
                  </p>
                </div>
                <div className="grid">
                  <div className="three-grids-icon">3</div>
                  <h4>
                    <Link to="#">Nuestro camino</Link>
                  </h4>
                  <p>
                  Crecemos para consolidarnos en la región y, 
                  a futuro, llevar nuestra experiencia a nivel nacional.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w3l-featureshny py-5" id="features">
        <div className="container py-md-4 py-2">
          <div className="row align-items-center">
            <div className="col-lg-8 pe-lg-5 mb-lg-0 mb-5">
              <div className="w3l-header-sec text-left mb-md-5 mb-4">
                <h6 className="title-subhny mb-2">
                  <span>¿Por qué elegirnos?</span>
                </h6>
                <h5>
                Impulsamos tu crecimiento con soluciones tecnológicas confiables.{" "}
                  <span className="span-bold">Análisis y Estrategia</span>
                </h5>
                <p className="mt-3 pr-lg-5">
                Evaluamos tus necesidades para diseñar soluciones innovadoras y adaptadas a tu negocio.
                </p>
                <Link
                  to="/services"
                  className="btn btn-primary btn-style mt-lg-5 mt-4"
                >
                  Read More{" "}
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
                    Garantizamos una implementación eficiente, 
                    asegurando que cada solución tecnológica funcione 
                    de manera óptima para tu negocio..
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w3l-team-main team py-5" id="team">
        <div className="container py-lg-5">
          <div className="w3l-heaser-sec text-center">
            <h6 className="title-subhny mb-2">
              <span>Un equipo con pasión por la innovación</span>
            </h6>
            <h3 className="title-w3l">
            "Un Equipo{"Un Equipo"}
              <span className="span-bold">Siempre pensando en cómo la tecnología transforma el futuro</span>
            </h3>
          </div>
          <div className="row team-row mt-md-5 mt-4">
            <div className="col-lg-3 col-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img
                    src={team1}
                    alt="Team Member"
                    className="radius-image"
                  />
                  <div className="overlay-team">
                    <div className="team-details text-center">
                      <div className="socials mt-20">
                        <Link to="#facebook">
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                        <Link to="#twitter">
                          <span className="fab fa-twitter"></span>
                        </Link>
                        <Link to="#linkedin">
                          <span className="fab fa-linkedin-in"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="team-title">
                  Leonardo Fierro
                </Link>
                <p>Fundador</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 team-wrap">
              <div className="team-member text-center">
                <div className="team-img">
                  <img
                    src={team3}
                    alt="Team Member"
                    className="radius-image"
                  />
                  <div className="overlay-team">
                    <div className="team-details text-center">
                      <div className="socials mt-20">
                        <Link to="#facebook">
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                        <Link to="#twitter">
                          <span className="fab fa-twitter"></span>
                        </Link>
                        <Link to="#linkedin">
                          <span className="fab fa-linkedin-in"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="team-title">
                  Yaquelin Cristancho
                </Link>
                <p>Tecnico Profesional</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src={team2}
                    alt="Team Member"
                    className="radius-image"
                  />
                  <div className="overlay-team">
                    <div className="team-details text-center">
                      <div className="socials mt-20">
                        <Link to="#facebook">
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                        <Link to="#twitter">
                          <span className="fab fa-twitter"></span>
                        </Link>
                        <Link to="#linkedin">
                          <span className="fab fa-linkedin-in"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="team-title">
                  Phillip Hunt
                </Link>
                <p>Gerente</p>
              </div>
            </div>
            <div className="col-lg-3 col-6 team-wrap mt-lg-0 mt-5">
              <div className="team-member last text-center">
                <div className="team-img">
                  <img
                    src={team4}
                    alt="Team Member"
                    className="radius-image"
                  />
                  <div className="overlay-team">
                    <div className="team-details text-center">
                      <div className="socials mt-20">
                        <Link to="#facebook">
                          <span className="fab fa-facebook-f"></span>
                        </Link>
                        <Link to="#twitter">
                          <span className="fab fa-twitter"></span>
                        </Link>
                        <Link to="#linkedin">
                          <span className="fab fa-linkedin-in"></span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <Link to="#" className="team-title">
                  Sara Grande
                </Link>
                <p>HR</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Section */}
      <section className="w3l-project-main pb-5">
        <div className="container pb-md-5 -b-3">
          <div className="w3l-project p-md-5 p-4 px-4">
            <div className="row py-lg-4 px-lg-2 align-items-center">
              <div className="col-lg-8 w3l-project-right">
                <div className="bottom-info">
                  <div className="header-section pr-lg-5">
                    <h3 className="title-w3l two">
                    Solicitar consulta gratuita<br />y {" "}
                      <span className="span-bold">¡Hagámoslo!</span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 w3l-project-left mt-lg-0 mt-4">
              <a
                href="https://wa.me/573102335400" // Reemplaza con tu número
                className="btn btn-secondary btn-style"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contáctanos Ahora{" "}
                <span className="fas fa-angle-double-right ms-2"></span>
              </a>
                

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default About;

