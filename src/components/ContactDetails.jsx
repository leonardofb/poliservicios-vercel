import React from 'react';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './ContactDetails.module.css';
const ContactDetails = () => {
    return (
        <div className="contactView my-5 py-lg-5">
            <div className="container">
                <div className="row">
                    {/* Primera columna - Colombia */}
                    <div className="col-lg-6 contDetails">
                        <h6 className="titleSubhny"><span>Encuéntranos</span></h6>
                        <h3 className="titleW3l mb-5">Oficina <span className="spanBold">Colombia</span></h3>                        
                        <div className="contTop">
                            <div className="contLeft text-center"><span className="fas fa-phone-alt"></span></div>
                            <div className="contRight">
                                <h5>Numero Celular</h5>
                                <p><a href="tel:+57 3102335400">+(57) 310 2335400</a></p>
                                <p><a href="tel:+57 3175369774">+(57) 317 536 97 74</a></p>
                            </div>
                        </div>

                        <div className="contTop marginUp">
                            <div className="contLeft text-center"><span className="fas fa-envelope-open-text"></span></div>
                            <div className="contRight">
                                <h5>Enviar Email</h5>
                                <p><a href="mailto:Poliservicios2022@mail.com" className="mail">Poliservicios2022@mail.com</a></p>
                            </div>
                        </div>

                        <div className="contTop marginUp">
                            <div className="contLeft text-center"><span className="fas fa-map-marker-alt"></span></div>
                            <div className="contRight">
                                <h5>Dirección</h5>
                                <p className="pr-lg-5">Calle 8a No 10a -17, Villeta, Cundinamarca.</p>
                            </div>
                        </div>
                    </div>

                    {/* Segunda columna - Redes Sociales */}
                    <div className="col-lg-6 contDetails">
    <h6 className="titleSubhny"><span>Conéctate con nosotros</span></h6>
    <h3 className="titleW3l mb-5">Síguenos en <span className="spanBold">Redes Sociales</span></h3>

    {/* WhatsApp */}
    <div className="contTop">
        <div className="contLeft text-center">
            <span className="fab fa-whatsapp" aria-hidden="true"></span>
        </div>
        <div className="contRight">
            <h5>WhatsApp</h5>
            <p><a href="https://wa.me/573102335400" target="_blank" rel="noopener noreferrer">Escríbenos aquí</a></p>
        </div>
    </div>

    {/* LinkedIn */}
    <div className="contTop marginUp">
        <div className="contLeft text-center">
            <span className="fab fa-linkedin" aria-hidden="true"></span>
        </div>
        <div className="contRight">
            <h5>LinkedIn</h5>
            <p><a href="https://www.linkedin.com/in/tu-perfil" target="_blank" rel="noopener noreferrer">Síguenos en LinkedIn</a></p>
        </div>
    </div>

    {/* Facebook */}
    <div className="contTop marginUp">
        <div className="contLeft text-center">
            <span className="fab fa-facebook-f" aria-hidden="true"></span>
        </div>
        <div className="contRight">
            <h5>Facebook</h5>
            <p><a href="https://www.facebook.com/tu-pagina" target="_blank" rel="noopener noreferrer">Dale Me Gusta</a></p>
        </div>
    </div>

    {/* YouTube */}
    <div className="contTop marginUp">
        <div className="contLeft text-center">
            <span className="fab fa-youtube" aria-hidden="true"></span>
        </div>
        <div className="contRight">
            <h5>YouTube</h5>
            <p><a href="https://www.youtube.com/c/tu-canal" target="_blank" rel="noopener noreferrer">Suscríbete a nuestro canal</a></p>
        </div>
    </div>
</div>
                </div>
            </div>
        </div>
    );
};

export default ContactDetails;
