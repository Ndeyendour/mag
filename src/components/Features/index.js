import React from 'react'
import { Link } from 'react-router-dom'
import featuresimg from '../../images/features/img-1.png'
import featuresimg2 from '../../images/features/img-2.png'
import featuresimg3 from '../../images/features/img-3.png'
import featuresimg4 from '../../images/features/img-4.png'
import './style.css'

const Features = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="features-area">
            <div className="container">
                <div className="row align-items-center">
                    {/* Texte principal */}
                    <div className="col-lg-5">
                        <div className="features-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>NOS AXES D’ACTION</span>
                                </div>
                            </div>
                            <h2>
                                Accompagner, connecter et valoriser les acteurs du développement local à Guédiawaye.
                            </h2>
                            <p>
                                La Maison des Associations de Guédiawaye est un espace collaboratif dédié à l’innovation
                                sociale, à l’entrepreneuriat et au renforcement des capacités des organisations communautaires.
                                Ensemble, construisons un territoire plus solidaire, créatif et durable.
                            </p>
                            <Link to="/partenaires" className="theme-btn">
                                Devenir partenaire
                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>

                    {/* Blocs d’illustration des pôles */}
                    <div className="col-lg-7">
                        <div className="features-wrap">
                            <div className="row">

                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg} alt="Accompagnement associatif" />
                                        </div>
                                        <div className="features-content">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/accompagnement">
                                                    Accompagnement des associations
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg2} alt="Entrepreneuriat local" />
                                        </div>
                                        <div className="features-content">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/entrepreneuriat">
                                                    Entrepreneuriat & Startups
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item-2 active">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg3} alt="Réseautage et échanges" />
                                        </div>
                                        <div className="features-content">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/reseautage">
                                                    Réseautage & Partenariats
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="features-item">
                                        <div className="features-icon">
                                            <img draggable="false" src={featuresimg4} alt="Conférences et forums" />
                                        </div>
                                        <div className="features-content">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/conferences">
                                                    Conférences & Forums citoyens
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features;
