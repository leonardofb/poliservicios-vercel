import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "Odontologia- Luna Gonzalez",
        city: "Villeta Cundinamarca",
        quote: "🦷💻Excelente servicio. Me instalaron de manera profesional toda la red de equipos de cómputo, el panorex, las cámaras de videovigilancia y el sistema de sonido ambiental. Muy cumplidos y atentos a cada detalle.",
        img: "/images/logo_LGonzalez.jpg"
    },
    {
        name: "Cooperativa de Caficultores Coodecafe",
        city: "San Juan de Rioseco",
        quote: "🧑‍🌾 Muy buen trabajo. Me instalaron las cámaras pa’ vigilar las bodegas y dejaron todo funcionando bien. Ahora puedo ver todo desde el celular, y quedé tranquilo con la seguridad. Recomendados.",
        img: "/images/coodecafe.png"
    }
];

const Testimonials = () => {
    return (
        <section className={styles.testimonialsSection}>
            <div className={styles.testimonialsContainer}>
                <div className="heading text-center mx-auto">
                    <h6 className="title-subhny mb-2"><span>Testimonios</span></h6>
                    <h3 className="title-w3l mb-5">Clientes satisfechos <span className="span-bold">& opiniones</span></h3>
                </div>
                <div className={styles.testimonialWidth}>
                    <div className="row">
                        {testimonials.map((testimonial, index) => (
                            <div className="col-lg-6 item" key={index}>
                                <div className={styles.testimonialContent}>
                                    <div className={styles.testimonial}>
                                        <blockquote>
                                            <i className="fas fa-quote-left"></i>
                                            <q>{testimonial.quote}</q>
                                        </blockquote>
                                        <div className={styles.testiDes}>
                                            <div className={styles.testImg}>
                                                <img src={testimonial.img} className="img-fluid" alt="client-img" />
                                            </div>
                                            <div className={styles.peopl}>
                                                <h3>{testimonial.name}</h3>
                                                <p className={styles.identity}>{testimonial.city}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;


