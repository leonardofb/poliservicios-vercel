import React from 'react';
import styles from './Grids3.module.css';

// Usar rutas absolutas si las imágenes están en "public/images/"
const aileo = "/images/aileo.jpg";
const electricista = "/images/Electricista2.jpg";
const g3 = "/images/g3.jpg";

const Grids3 = () => {
    const services = [
        { 
            img: aileo, 
            category: 'Seguridad y Conectividad', 
            title: 'Cámaras de Videovigilancia y Redes de Datos', 
            description: 'Protege tu hogar o negocio con videovigilancia avanzada. Instalamos y mantenemos redes de datos para una conexión estable y segura.'
        },
        { 
            img: electricista, 
            category: 'Servicios Eléctricos', 
            title: 'Soluciones Eléctricas Profesionales', 
            description: 'Diagnóstico y reparación de fallas eléctricas. Instalaciones seguras y optimización de redes para evitar fallos inesperados.' 
        },
        { 
            img: g3, 
            category: 'Automatización Inteligente', 
            title: 'Automatización para Hogares y Negocios', 
            description: 'Controla luces, puertas y dispositivos con un solo clic. Mejora la eficiencia y seguridad con tecnología inteligente.' 
        }
    ];
    
    return (
        <div className={styles.gridsContainer} id="grids-3">
            <div className="container-fluid">
                <div className="row">
                    {services.map((service, index) => (
                        <div key={index} className={`col-lg-4 col-md-6 col-sm-12 ${styles.gridItem}`}>
                            <div className={styles.imageContainer}>
                                <img src={service.img} alt={service.title} className={styles.newsImage} />
                                <div className={styles.overlay}>
                                    <h6 className={styles.category}>{service.category}</h6>
                                    <h4 className={styles.title}>{service.title}</h4>
                                    <p className={styles.description}>{service.description}</p>
                                    <div className={styles.buttonContainer}>
                                        <a href="#" className={styles.button}>Ver más</a>
                                        <a href="#" className={styles.button}>Detalles</a>
                                        <a href="#" className={styles.button}>Contacto</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Grids3;
