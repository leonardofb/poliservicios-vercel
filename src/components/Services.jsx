//import React from 'react';
import RequestConsultation from './RequestConsultation';
import styles from './Services.module.scss'; // Importa el módulo SCSS

const Services = () => {
  return (
    <>
      <section className={styles.servicesSection} id="services">
        <div className={styles.servicesContainer}>
          <div className="row cwp23-content mt-lg-5 mt-4">
            <div className="col-lg-6">
              <h6 className={styles.subtitle}>
                <span>¿Qué hacemos?</span>
              </h6>
  
              <div className="text-left mt-8 mb-6 px-4 max-w-xl">
<h2 className="text-2xl md:text-3xl font-bold mb-3">
  En <span className="text-blue-700">Poliservicios</span> combinamos
  <span className="text-blue-600 font-semibold"> tecnología, seguridad y eficiencia</span>
</h2>

<p className="text-base md:text-lg leading-relaxed mb-2">
  Brindamos <strong>soluciones integrales</strong> para el <strong>hogar</strong> y la <strong>empresa</strong>, adaptadas a tus necesidades.
</p>


  <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-4">
    Nuestro compromiso es ayudarte a mantenerte <strong>protegido</strong>, <strong>actualizado</strong> y <strong>conectado</strong>.
  </p>

  <p className={styles.redTitle}>
  Conoce nuestros servicios principales
</p>

</div>

  
              <ul className={`${styles.description} list-disc pl-5 mt-4 space-y-2`}>
  <li>
    <strong>Redes de cómputo cableadas e inalámbricas (Wi-Fi Mesh):</strong> Diseño e instalación para hogares, empresas y zonas amplias.
  </li>
  <li>
    <strong>Videovigilancia:</strong> Cámaras IP o analógicas, grabación continua y acceso remoto seguro.
  </li>
  <li>
    <strong>Control de acceso y automatización:</strong> Puertas electromecánicas, sensores, videoporteros y sistemas domóticos.
  </li>
  <li>
    <strong>Paneles solares:</strong> Respaldo de energía para mantener sus equipos operativos por varias horas.
  </li>
  <li>
    <strong>Venta de equipos electrónicos y licencias de software:</strong> Equipos confiables y software original.
  </li>
  <li>
    <strong>Soporte y mantenimiento de computadores (presencial y remoto):</strong> Diagnóstico, limpieza y optimización de equipos.
  </li>
</ul>
              <div className={`${styles.buttonContainer} mt-4`}>
              <a href="#how" className="btn btn-primary btn-style">
                  Leer Más <span className="fas fa-angle-double-right ms-2"></span>
                </a>
              </div>
            </div>
  
            <div className="col-lg-6">
              <div className={styles.imageGrid}>
                <div className={styles.column}>
                  <a href="#"><img src="/images/g2.jpg" alt="" /></a>
                </div>
                <div className={styles.column}>
                  <a href="#"><img src="/images/g3.jpg" alt="" /></a>
                </div>
                <div className={styles.column}>
                  <a href="#"><img src="/images/g4.jpg" alt="" /></a>
                </div>
                <div className={styles.column}>
                  <a href="#"><img src="/images/g5.jpg" alt="" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <RequestConsultation />
      </section>

      <section className="w3l-grids-3 py-5" id="how">
  <div className="container py-md-5 py-3">
    <div className="row bottom-ab-grids align-items-center">
      <div className="header-sec text-center">
        <h6 className="title-subhny mb-2"><span>¿Cómo lo hacemos?</span></h6>
        <h3 className="title-w3l mb-3">
          Enfocados en <span className="span-bold">soluciones tecnológicas integrales</span> 
          <br />
          para hogares y empresas.
        </h3>
      </div>
    </div>

    <div className="row bottom_grids pt-md-3 text-left">
      {[
        {
          icon: 'fas fa-tools',
          title: 'Soporte y mantenimiento',
          description: 'Mantenemos tus computadores funcionando al 100%, ya sea de forma remota o presencial.',
          link: '#pricing' 
        },
        {
          icon: 'fas fa-network-wired',
          title: 'Redes de cómputo',
          description: 'Diseño, instalación y mantenimiento de redes cableadas e inalámbricas.'
        },
        {
          icon: 'fas fa-video',
          title: 'Videovigilancia',
          description: 'Instalamos cámaras de seguridad modernas para proteger lo que más importa.'
        },
        {
          icon: 'fas fa-door-open',
          title: 'Control de acceso',
          description: 'Automatiza tus espacios con sistemas de acceso inteligente y brazos mecánicos.'
        },
        {
          icon: 'fas fa-laptop',
          title: 'Venta de equipos',
          description: 'Suministro de computadores, accesorios y tecnología confiable.'
        },
        {
          icon: 'fas fa-key',
          title: 'Licencias de software',
          description: 'Ofrecemos licencias originales para sistemas operativos, antivirus y más.'
        }
      ].map((item, index) => (
        <div className="col-lg-4 col-md-6 mt-5" key={index}>
          <div className="grid-block">
          <a href={item.link || "#services"} className="d-block p-lg-4 p-3">
              <span className={`${item.icon} fa-2x`} aria-hidden="true"></span>
              <h4 className="my-3">{item.title}</h4>
              <p>{item.description}</p>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


<section className="w3l-services3">
  <div className="new-block">
    <div className="container py-5">
      <div className="middle-section py-lg-5 py-4">
        <div className="section-width">
          <h6 className="title-subhny mb-2"><span>¿Por qué elegirnos?</span></h6>
          <h3 className="title-w3l two mb-4">
            Confía en <span className="span-bold">tecnología inteligente</span> para proteger y hacer crecer tu negocio.
          </h3>
        </div>

        <div className="link-list-menu">
          <p className="text-base text-gray-700">
            En <strong>Poliservicios</strong>, combinamos experiencia, calidad y soluciones tecnológicas integrales para brindarte tranquilidad, seguridad y eficiencia. Nos enfocamos en que cada instalación y soporte sea confiable, duradero y adaptado a tus necesidades.
          </p>

          <div className="w3l-two-buttons">
            <a href="contact" className="btn btn-primary btn-white btn-style mt-lg-5 mt-4">
              Contáctanos <span className="fas fa-angle-double-right ml-2"></span>
            </a>
            <a href="#services" className="btn btn-style btn-secondary mt-lg-5 mt-4 ms-sm-3">
              Ver Servicios <span className="fas fa-angle-double-right ml-2"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <section className="w3l-pricing-sec py-5" id="pricing">
  <div className="container py-md-5 py-2">
    <div className="title-content text-center">
      <h6 className="title-subhny mb-2"><span>Planes de Servicio</span></h6>
      <h3 className="title-w3l mb-4">Mantenimiento <span className="span-bold">Mensual</span></h3>
    </div>

    <div className="row pricing-main-grids mt-3">
      {[
        {
          icon: 'fas fa-wrench',
          plan: 'Plan Básico',
          description: 'Ideal para mantenimiento preventivo en equipos poco exigentes.',
          price: '30.000',
          features: [
            'Limpieza física interna y externa (trimestral)',
            'Revisión general de hardware',
            'Actualización de antivirus',
            'Liberación de espacio y optimización básica',
            'Soporte remoto 1 vez al mes',
          ],
          nota: 'Precio negociable según contrato (más de 5 equipos)'
        },
        {
          icon: 'fas fa-cogs',
          plan: 'Plan Estándar',
          description: 'Perfecto para oficinas o empresas que requieren seguimiento mensual.',
          price: '90.000',
          features: [
            'Todo lo del plan Básico',
            'Mantenimiento mensual',
            'Revisión de sistema operativo y discos duros',
            'Configuración de copias de seguridad',
            'Soporte remoto hasta 3 veces al mes',
            'Visita presencial 1 vez al mes',
          ],
          nota: 'Precio especial por paquete (más de 5 equipos)'
        },
        {
          icon: 'fas fa-star',
          plan: 'Plan Premium',
          description: 'Para quienes requieren soporte total, recuperación de datos y atención rápida.',
          price: '120.000',
          features: [
            'Todo lo del plan Estándar',
            'Mantenimiento correctivo',
            'Reinstalación de sistema operativo si aplica',
            'Recuperación de datos básica',
            'Diagnóstico mensual',
            'Soporte remoto ilimitado',
            'Soporte presencial preferencial (24h)',
            'Asesoría en renovación tecnológica',
          ],
          nota: 'Contrato personalizado según cantidad de equipos'
        }
      ].map((item, index) => (
        <div className="col-lg-4 col-md-6 pricing-main-grid mt-sm-5 mt-4" key={index}>
          <div className="w3-pricing-inner-inf">
            <div className={`pricing-header set-${index + 1}`}>
              <span className={`${item.icon} fa-2x mb-3`} aria-hidden="true"></span>
              <h4>{item.plan}</h4>
              <p>{item.description}</p>
              <div className="price-wrapper mt-4">
                <div className="price">
                  <h3 className="currency">$</h3>
                  <h3 className="heading headin-h3">{item.price}</h3>
                  <span className="currency"> / mes por equipo</span>
                </div>
              </div>
            </div>

            <div className="pricing-body">
              <div className="inner">
                <ul className="list-style">
                  {item.features.map((feature, i) => (
                    <li key={i}><span className="fa fa-check me-2" aria-hidden="true"></span> {feature}</li>
                  ))}
                </ul>
                <p className="mt-3"><em>{item.nota}</em></p>
              </div>
              <div className="pricing-get-button mt-3">
                <a className="btn btn-secondary btn-style mt-4 d-block" href="#contact">Solicitar este plan</a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
    </>
  );
};

export default Services;
