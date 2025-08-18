// RequestConsultation.jsx
import React from 'react';
import { Link } from "react-router-dom";

const RequestConsultation = () => {
    return (
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
                <Link to="#" className="btn btn-secondary btn-style">
                  Contactanos Ahora{" "}
                  <span className="fas fa-angle-double-right ms-2"></span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default RequestConsultation;