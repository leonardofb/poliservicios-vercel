import React from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Map from './Map';
import Footer from './Footer';

const Contact = () => {
    return (
        <div>
           <section className="w3l-contact-1 py-5" id="contact">
                <div className="contacts-9 py-lg-5 py-md-4">
                    <div className="container">
                        <div className="header-title text-center">
                            <h6 className="title-subhny"><span>¡Hablemos!</span></h6>
                            <h3 className="title-w3l mb-2">Hablemos de 
                                <span className="span-bold"> Tu proyecto</span>
                            </h3>
                            <p className="mb-sm-5 mb-4">Empiece a trabajar con nosotros, que podemos proporcionarle todo lo que necesita para generar conciencia,
                            generar tráfico y conectar. .<br /> Le garantizamos que podrá resolver cualquier problema en 24 horas.
                            </p>
                        </div>
                        <ContactForm /> {/* Componente del formulario de contacto */}
                        <ContactDetails /> {/* Componente con los detalles de contacto */}
                        <Map /> {/* Componente del mapa */}
                    </div>
                </div>
            </section>
            <Footer /> {/* Componente del pie de página */}
        </div>
    );
};

export default Contact;