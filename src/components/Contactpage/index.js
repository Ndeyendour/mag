import React from 'react';
import ContactForm from '../ContactFrom';
import './style.css';

const ContactPageMAG = () => {

    return (
        <section className="contact-pg-contact-section section-padding">
            <div className="container">
                <div className="row">
                    {/* === INFOS DE CONTACT === */}
                    <div className="col col-lg-6 col-12">
                        <div className="section-title-s3 section-title-s5">
                            <h2>Contactez la Maison des Associations de Guédiawaye</h2>
                        </div>

                        <div className="contact-details">
                            <p>
                                La Maison des Associations de Guédiawaye (MAG) est à votre écoute pour toute demande
                                d'information, partenariat, inscription à une activité ou proposition de collaboration.
                                N'hésitez pas à nous écrire ou à venir nous rencontrer !
                            </p>

                            <ul>
                                <li>
                                    <div className="icon">
                                        <i className="ti-location-pin"></i>
                                    </div>
                                    <h5>Adresse</h5>
                                    <p>
                                        Maison des Associations de Guédiawaye<br />
                                        Rue des Institutions, Quartier Sam Notaire<br />
                                        Guédiawaye – Dakar, Sénégal
                                    </p>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="ti-mobile"></i>
                                    </div>
                                    <h5>Téléphone</h5>
                                    <p>+221 33 800 00 00 / +221 77 123 45 67</p>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="ti-email"></i>
                                    </div>
                                    <h5>Adresse e-mail</h5>
                                    <p>contact@mag.sn / info@mag.sn</p>
                                </li>

                                <li>
                                    <div className="icon">
                                        <i className="ti-world"></i>
                                    </div>
                                    <h5>Réseaux sociaux</h5>
                                    <p>
                                        <a href="https://facebook.com/magguediawaye" target="_blank" rel="noreferrer">Facebook</a> |
                                        <a href="https://instagram.com/magguediawaye" target="_blank" rel="noreferrer"> Instagram</a> |
                                        <a href="https://linkedin.com/company/magguediawaye" target="_blank" rel="noreferrer"> LinkedIn</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* === FORMULAIRE DE CONTACT === */}
                    <div className="col col-lg-6 col-12">
                        <div className="contact-form-area">
                            <div className="section-title-s3 section-title-s5">
                                <h2>Formulaire de contact</h2>
                            </div>
                            <div className="contact-form">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </div>

                {/* === CARTE GOOGLE MAPS === */}
                <div className="row">
                    <div className="col col-xs-12">
                        <div className="contact-map">
                            <iframe
                                title="Carte Guédiawaye"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15344.540304104435!2d-17.39879587564381!3d14.781218215444153!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec10cbbef49a8b3%3A0x888ccc61d4bdb4c!2sGu%C3%A9diawaye%2C%20S%C3%A9n%C3%A9gal!5e0!3m2!1sfr!2ssn!4v1707582325671!5m2!1sfr!2ssn"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPageMAG;
