import React from 'react'
import { Link } from 'react-router-dom'
import VideoModal from '../../components/ModalVideo'
import abimg from '../../images/about.jpg'
import abimg2 from '../../images/about/1.png'
import abimg3 from '../../images/about/2.png'
import abimg4 from '../../images/shape/shape2.png'

const About2 = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="about-area section-padding">
            <div className="container">
                <div className="row">

                    {/* IMAGE + VIDEO */}
                    <div className="col-lg-5 col-md-12 grid col-12">
                        <div className="video-area">
                            <img src={abimg} alt="Maison des Associations de Guédiawaye" />
                            <div className="entry-media video-holder video-btn2">
                                <VideoModal />
                            </div>
                        </div>
                    </div>

                    {/* TEXTE DU DIRECTEUR */}
                    <div className="col-lg-7 grid col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>MOT DU DIRECTEUR</span>
                                </div>
                                <h2>
                                    Maison des Associations de <span>Guédiawaye</span>
                                </h2>
                            </div>

                            <div className="about-content">
                                <p>
                                    Chers visiteurs, chers partenaires, chers porteurs de projets,
                                </p>

                                <p>
                                    Au nom de toute l’équipe de la Maison des Associations de Guédiawaye, je vous souhaite la bienvenue
                                    sur notre site web, reflet dynamique de notre engagement au service du tissu associatif, de l’innovation
                                    et du développement territorial.
                                </p>

                                <p>
                                    Notre Maison est bien plus qu’un simple lieu ; c’est un écosystème complet dédié à l’épanouissement
                                    des initiatives, à la mutualisation des compétences et à l’émergence de solutions concrètes pour notre
                                    communauté. Ici, nous croyons fermement que la force collective et l’intelligence partagée sont les leviers
                                    essentiels d’un développement durable et inclusif.
                                </p>

                                <p>
                                    Espace de capacitation, nous accompagnons les associations et les porteurs de projets dans le
                                    renforcement de leurs compétences, à travers des formations adaptées, un mentorat personnalisé et
                                    des ressources pédagogiques accessibles.
                                </p>

                                <p>
                                    Plateforme de mise en relation et de travail collaboratif, nous favorisons les synergies entre acteurs
                                    associatifs, institutionnels et privés, afin de créer des alliances fructueuses et de multiplier les impacts
                                    sur le terrain.
                                </p>

                                <p>
                                    Incubateur pour porteurs de projets et startups, nous offrons un cadre propice à l’innovation, en
                                    fournissant un appui technique, stratégique et logistique pour transformer les idées audacieuses en
                                    projets viables et créateurs de valeur.
                                </p>

                                <p>
                                    Espace de coworking et de rencontres B2B, nous mettons à disposition des infrastructures modernes
                                    et conviviales, conçues pour stimuler la créativité, faciliter les échanges et générer des opportunités
                                    d’affaires.
                                </p>

                                <p>
                                    Lieu d’organisation d’ateliers, de conférences et de foras, nous animons la vie intellectuelle et
                                    opérationnelle de Guédiawaye, en offrant un cadre d’expression, de débat et de partage d’expériences
                                    sur les enjeux clés de notre territoire.
                                </p>

                                <p>
                                    Notre ambition est de faire de la Maison des Associations un pôle de référence, catalyseur d’énergies
                                    positives et accélérateur de projets à fort impact social, économique et environnemental.
                                </p>

                                <p>
                                    Je vous invite à explorer notre site, à découvrir nos services et à nous rejoindre dans cette aventure
                                    collective. Que vous soyez une association, un entrepreneur, un partenaire technique ou financier,
                                    votre place est ici, avec nous.
                                </p>

                                <p className="director-signature">
                                    <strong>Ensemble, construisons l’avenir de Guédiawaye !</strong><br />
                                    <em>Ababacar KANTE</em><br />
                                    Directeur de la Maison des Associations de Guédiawaye
                                </p>
                            </div>

                            {/* PETITES ICÔNES */}
                            <div className="ab-icon-area">
                                <div className="about-icon-wrap">
                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <img draggable="false" src={abimg2} alt="Accompagnement associatif" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/services">
                                                    Accompagnement des associations
                                                </Link>
                                            </h2>
                                        </div>
                                    </div>

                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <img draggable="false" src={abimg3} alt="Innovation et coworking" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/innovation">
                                                    Innovation & Coworking
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

            {/* DÉCOR DE FOND */}
            <div className="ab-shape">
                <img src={abimg4} alt="" />
            </div>
        </div>
    )
}

export default About2;
