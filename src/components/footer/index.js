import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../images/logo/logo.png'
import n1 from '../../images/instragram/1.jpg'
import n2 from '../../images/instragram/2.jpg'
import n3 from '../../images/instragram/3.jpg'
import n4 from '../../images/instragram/4.jpg'
import n5 from '../../images/instragram/5.jpg'
import n6 from '../../images/instragram/6.jpg'
import './style.css'

const Footer = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <footer className="tp-site-footer">
            <div className="tp-upper-footer">
                <div className="container">
                    <div className="row">

                        {/* Logo + Présentation */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget about-widget">
                                <div className="footer-logo widget-title">
                                    <Link onClick={ClickHandler} to="/">
                                        <img src={Logo} alt="Logo Maison des Associations de Guédiawaye" />
                                        MAG 
                                        {/* <span>des Associations</span> */}
                                    </Link>
                                </div>
                                <p>
                                    La Maison des Associations de Guédiawaye (MAG) est un espace d’innovation sociale,
                                    d’accompagnement et de collaboration pour les acteurs associatifs, les jeunes et les entrepreneurs locaux.
                                </p>
                                <ul>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-facebook"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-twitter-alt"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-instagram"></i>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link onClick={ClickHandler} to="/">
                                            <i className="ti-linkedin"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Liens utiles */}
                        <div className="col col-lg-2 col-md-6 col-sm-12 col-12">
                            <div className="widget link-widget">
                                <div className="widget-title">
                                    <h3>Liens utiles</h3>
                                </div>
                                <ul>
                                    <li><Link onClick={ClickHandler} to="/about">À propos</Link></li>
                                    <li><Link onClick={ClickHandler} to="/programmes">Nos programmes</Link></li>
                                    <li><Link onClick={ClickHandler} to="/volontaires">Nos volontaires</Link></li>
                                    <li><Link onClick={ClickHandler} to="/actualites">Actualités</Link></li>
                                    <li><Link onClick={ClickHandler} to="/contact">Contact</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Contact */}
                        <div className="col col-lg-3 col-lg-offset-1 col-md-6 col-sm-12 col-12">
                            <div className="widget market-widget tp-service-link-widget">
                                <div className="widget-title">
                                    <h3>Contact</h3>
                                </div>
                                <p>
                                    Pour toute information, accompagnement ou partenariat, contactez notre équipe.
                                </p>
                                <div className="contact-ft">
                                    <ul>
                                        <li>
                                            <i className="fi flaticon-pin"></i>
                                            Cité des Enseignants, Guédiawaye – Sénégal
                                        </li>
                                        <li>
                                            <i className="fi flaticon-call"></i>
                                            +221 77 123 45 67
                                        </li>
                                        <li>
                                            <i className="fi flaticon-envelope"></i>
                                            contact@mag.sn
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Galerie */}
                        <div className="col col-lg-3 col-md-6 col-sm-12 col-12">
                            <div className="widget instagram">
                                <div className="widget-title">
                                    <h3>Galerie</h3>
                                </div>
                                <ul className="d-flex">
                                    <li><Link onClick={ClickHandler} to="/"><img src={n1} alt="Atelier MAG" /></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n2} alt="Rencontre associative" /></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n3} alt="Formation jeunes" /></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n4} alt="Conférence citoyenne" /></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n5} alt="Espace coworking" /></Link></li>
                                    <li><Link onClick={ClickHandler} to="/"><img src={n6} alt="Vie associative" /></Link></li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bas de page */}
            <div className="tp-lower-footer">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12 text-center">
                            <p className="copyright">
                                &copy; {new Date().getFullYear()} Maison des Associations de Guédiawaye. Tous droits réservés.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;
