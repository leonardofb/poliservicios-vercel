import React, { useEffect } from 'react';
import ContactForm from './ContactForm';
import ContactDetails from './ContactDetails';
import Map from './Map';
import Footer from './Footer';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Siempre lleva al tope cuando se monta
  }, []);

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
              <p className="mb-sm-5 mb-4">
                Empiece a trabajar con nosotros, que podemos proporcionarle todo lo que necesita para generar conciencia,
                generar tráfico y conectar.<br />
                Le garantizamos que podrá resolver cualquier problema en 24 horas.
              </p>
            </div>
            <ContactForm />
            <ContactDetails />
            <Map />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Contact;
