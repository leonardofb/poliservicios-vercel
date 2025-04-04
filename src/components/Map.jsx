import React from 'react';

const Map = () => {
    return (
        <div className="map-content-9">
            <div className="map-iframe">
                
                 {/* Este es un comentario en JSX 
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C+UK!5e0!3m2!1sen!2spl!4v1562654563739!5m2!1sen!2spl"
                    width="100%"
                    height="400"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
                */}
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31796.404232947447!2d-74.49084856595053!3d5.014039676242137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e409a46b61023ff%3A0x82094f500526ecb4!2sVilleta%2C%20Cundinamarca!5e0!3m2!1ses!2sco!4v1741061867347!5m2!1ses!2sco" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }}
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    >
                </iframe>
            </div>
        </div>
    );
};

export default Map;