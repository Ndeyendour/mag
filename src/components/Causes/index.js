import React from 'react'
import { Link } from 'react-router-dom'
import causesimg from '../../images/cause/img-1.png'
import causesimg2 from '../../images/cause/img-2.jpg'
import causesimg3 from '../../images/cause/img-3.jpg'
import causesimg4 from '../../images/cause/img-4.jpg'
import causesimg5 from '../../images/cause/img-5.jpg'
import causesimg6 from '../../images/cause/img-6.jpg'
import './style.css'

const Causes = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title section-title2 text-center">
                        <div className="thumb-text">
                            <span>PROGRAMMES & PROJETS</span>
                        </div>
                        <h2>Les initiatives de la Maison des Associations de Guédiawaye</h2>
                        <p>
                            Découvrez les programmes phares qui soutiennent la vie associative, la créativité,
                            l’entrepreneuriat et l’engagement citoyen à Guédiawaye.
                        </p>
                    </div>
                </div>

                <div className="row">

                    {/* 1. Accompagnement associatif */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg} alt="Accompagnement associatif" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="#formations" className="theme-btn">
                                            En savoir plus
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="#formations">
                                        Renforcement des capacités des associations
                                    </Link>
                                </h3>
                                <p>
                                    Formations, ateliers et coaching pour professionnaliser la gestion des organisations communautaires.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 2. Entrepreneuriat local */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg2} alt="Entrepreneuriat et Startups" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="#/entrepreneuriat" className="theme-btn">
                                            Découvrir
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="#/entrepreneuriat">
                                        Soutien à l’entrepreneuriat et aux startups locales
                                    </Link>
                                </h3>
                                <p>
                                    Incubation, mentorat et appui aux jeunes porteurs de projets dans les domaines technologiques et artistiques.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 3. Réseautage et partenariats */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg3} alt="Réseautage et échanges" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="#/reseautage" className="theme-btn">
                                            Participer
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="#/reseautage">
                                        Réseautage et échanges professionnels
                                    </Link>
                                </h3>
                                <p>
                                    Organisation de rencontres B2B, de jumelages et de partenariats locaux et internationaux.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 4. Insertion et formation */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg4} alt="Insertion socioprofessionnelle" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="#/insertion" className="theme-btn">
                                            Rejoindre
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="#/insertion">
                                        Insertion socioprofessionnelle des jeunes
                                    </Link>
                                </h3>
                                <p>
                                    Programmes de formation, stages et appui à l’emploi pour une meilleure intégration des jeunes dans la vie active.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 5. Conférences du samedi */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg5} alt="Conférences du samedi" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/conferences" className="theme-btn">
                                            S’inscrire
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="/conferences">
                                        Conférences thématiques du samedi
                                    </Link>
                                </h3>
                                <p>
                                    Un espace d’échanges citoyens sur les enjeux sociaux, économiques et culturels du territoire.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* 6. Partenariats et soutien */}
                    <div className="col-lg-4 col-md-6 col-12">
                        <div className="cause-item">
                            <div className="cause-top">
                                <div className="cause-img">
                                    <img src={causesimg6} alt="Partenariats et appui" />
                                    <div className="case-btn">
                                        <Link onClick={ClickHandler} to="/partenaires" className="theme-btn">
                                            Collaborer
                                            <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="cause-text">
                                <h3>
                                    <Link onClick={ClickHandler} to="/partenaires">
                                        Recherche de partenaires et d’appuis techniques
                                    </Link>
                                </h3>
                                <p>
                                    Mobilisation de partenaires institutionnels, techniques et financiers pour soutenir les projets locaux.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Causes;
