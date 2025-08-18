import React from 'react';
import styles from './Testimonials.module.css';

const testimonials = [
    {
        name: "La Granja Extrema",
        city: "Villeta Cundinamarca",
        quote: "🏞️💪Excelente trabajo. Me instalaron el sistema de cámaras de videovigilancia en toda la granja, hicieron la extensión del internet hasta las zonas de actividad, y le dieron mantenimiento a los brazos electromecánicos de la puerta. Muy cumplidos, todo quedó funcionando perfecto. ¡Recomendados 100%! ✅",
        img: "/images/logo-granja-extrema.png"
    },
    {
        name: "Deposito Jc Garavito",
        city: "Villeta Cundinamarca",
        quote: "🛠️📶 Muy buen servicio. Me hicieron una ampliación de la red Wi-Fi a distancia y conectaron las cámaras de videovigilancia en la ferretería. Todo quedó funcionando excelente. ¡Recomendados! 👍",
        img: "/images/jcgaravito.jpeg"
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


