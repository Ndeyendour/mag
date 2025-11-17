import React from 'react';
import SidebarWrap from '../SidebarWrap';  // Si tu souhaites utiliser un sidebar
import incubatorImage from '../../images/incubator-image.jpg';  // Remplace par l'image de ton incubateur
import './style.css';

const IncubatorPage = () => {
    return (
        <div className="wpo-event-details-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col col-lg-12">
                        <div className="tp-case-details-wrap">
                            <div className="tp-case-details-text">
                                <div id="Description">
                                    {/* Image de l'incubateur */}
                                    <div className="tp-case-details-img">
                                        <img src={incubatorImage} alt="Incubateur Tech & Art" className="incubator-image" />
                                    </div>
                                    <div className="tp-case-content">
                                        <div className="tp-case-text-top">
                                            <h2>Incubateur Tech & Art : Un espace d’accompagnement à la création de startups et de projets numériques et artistiques</h2>
                                            <div className="case-b-text">
                                                <p>L’incubateur Tech & Art est un espace dédié à l'accompagnement des projets innovants dans les secteurs technologiques et artistiques. Il offre un cadre propice pour la création de startups, l’innovation sociale, et la collaboration entre entrepreneurs, artistes, et professionnels du numérique.</p>
                                                <p>Notre objectif est de soutenir les porteurs de projets dans la réalisation de leurs idées en leur offrant des ressources, des formations, et des opportunités de financement. Que vous soyez dans le domaine des technologies numériques, de l’art, ou d’autres secteurs créatifs, notre incubateur vous aide à transformer vos idées en projets concrets.</p>
                                            </div>

                                            <div className="case-bb-text">
                                                <h3>Notre Mission</h3>
                                                <p>Nous accompagnons des projets à fort potentiel dans le domaine du numérique et de l’art en leur offrant un environnement propice à leur développement. Notre mission est de créer un écosystème dynamique qui favorise l’innovation et l’entrepreneuriat au service de la société.</p>
                                                <ul>
                                                    <li>Accompagnement personnalisé pour la création de startups</li>
                                                    <li>Formation et ateliers sur l'innovation numérique et artistique</li>
                                                    <li>Accès à un réseau d'experts et de mentors</li>
                                                    <li>Partenariats avec des investisseurs et des entreprises technologiques</li>
                                                    <li>Soutien à la mise en réseau et aux événements de l'industrie</li>
                                                </ul>
                                            </div>

                                            <div className="case-bb-text">
                                                <h3>Rejoignez l'incubateur</h3>
                                                <p>En rejoignant notre incubateur, vous aurez accès à des ressources uniques et à un réseau dynamique. Nous offrons des espaces de travail collaboratifs, des formations spécialisées, des opportunités de financement, ainsi qu'un accompagnement sur mesure pour chaque projet.</p>
                                                <p>Vous avez une idée ou un projet dans le domaine numérique ou artistique ? Postulez dès maintenant pour rejoindre notre incubateur et bénéficier de nos services d’accompagnement.</p>
                                            </div>

                                            {/* <div className="case-bb-text">
                                                <h3>Localisation</h3>
                                                <div id="Map" className="tab-pane">
                                                    
                                                </div>
                                            </div> */}

                                            {/* Bouton pour soumettre une candidature ou demander plus d'infos */}
                                            <div className="submit-area sub-btn">
                                                <a href="/incubateur/postuler" className="theme-btn submit-btn">Postuler pour rejoindre l'incubateur</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Optionnel : Sidebar pour des liens supplémentaires */}
                    {/* <SidebarWrap/> */}
                </div>
            </div>
        </div>
    );
}

export default IncubatorPage;
