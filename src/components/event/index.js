import React from 'react'
import event1 from '../../images/event/1.jpg'
import event2 from '../../images/event/2.jpg'
import event3 from '../../images/event/3.jpg'
import event4 from '../../images/event/1.png'
import event5 from '../../images/event/2.png'
import { Link } from 'react-router-dom'

import './style.css'

const EventSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="event-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>ÉVÉNEMENTS</span>
                            </div>
                            <h2>Les prochains rendez-vous de la Maison des Associations de Guédiawaye</h2>
                            <p>
                                La MAG organise tout au long de l’année des rencontres, formations, conférences et ateliers
                                favorisant la participation citoyenne, l’innovation sociale et le partage d’expériences.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">

                        {/* Événement 1 */}
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event1} alt="Conférence du samedi" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>NOV</span>
                                        <h4>16</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-time"></i> 10h00 - 13h00</li>
                                        <li><i className="ti-location-pin"></i> Maison des Associations, Guédiawaye</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/evenements/conference-samedi">
                                            Conférence du samedi : “Jeunesse et innovation sociale”
                                        </Link>
                                    </h2>
                                    <p>
                                        Une rencontre citoyenne pour échanger sur le rôle des jeunes dans le développement
                                        local et la création d’initiatives communautaires durables.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Événement 2 */}
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event2} alt="Atelier de formation" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>NOV</span>
                                        <h4>23</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-time"></i> 09h30 - 17h00</li>
                                        <li><i className="ti-location-pin"></i> Salle de formation, MAG</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/evenements/atelier-gestion">
                                            Atelier : Gestion de projet et financement associatif
                                        </Link>
                                    </h2>
                                    <p>
                                        Une journée de formation pratique pour renforcer les compétences en planification,
                                        suivi et mobilisation de ressources des associations locales.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Événement 3 */}
                        <div className="event-item">
                            <div className="event-img">
                                <img src={event3} alt="Forum de l'entrepreneuriat" />
                            </div>
                            <div className="event-text">
                                <div className="event-left">
                                    <div className="event-l-text">
                                        <span>DÉC</span>
                                        <h4>07</h4>
                                    </div>
                                </div>
                                <div className="event-right">
                                    <ul>
                                        <li><i className="ti-time"></i> 09h00 - 18h00</li>
                                        <li><i className="ti-location-pin"></i> Esplanade de la Mairie de Guédiawaye</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/evenements/forum-entrepreneuriat">
                                            Forum de l’entrepreneuriat et de l’innovation locale
                                        </Link>
                                    </h2>
                                    <p>
                                        Un espace de rencontre entre jeunes entrepreneurs, incubateurs et partenaires
                                        pour promouvoir la créativité, l’emploi et les startups de Guédiawaye.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="shape1"><img src={event4} alt="forme décorative" /></div>
            <div className="shape2"><img src={event5} alt="forme décorative" /></div>
        </div>
    )
}

export default EventSection;
