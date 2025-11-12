import React from 'react'
import './style.css'

const CtaSection = (props) => {

    return(
        <div className="cta-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 col-12">
                        <div className="cta-left">
                            <h2>Vous êtes une association ou un jeune porteur de projet ?
Rejoignez la dynamique de la Maison des Associations de Guédiawaye !</h2>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 col-md-12 col-12">
                        <div className="cta-wrap">
                            <div className="cta-call">
                                <span>Appelez nous!</span>
                                <h3>00 968 469 876</h3>
                            </div>
                            <div className="cta-call">
                                <span>E-mail !</span>
                                <h3>support@gmail.com</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CtaSection;