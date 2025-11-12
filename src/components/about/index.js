import React from 'react'
import { Link } from 'react-router-dom'
import abimg from '../../images/about/img-1.jpg'
import abimg2 from '../../images/about/1.png'
import abimg3 from '../../images/about/2.png'
import abimg4 from '../../images/shape/shape2.png'
import './style.css'

const About = (props) => {
    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="about-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 col-md-12 grid col-12">
                        <div className="about-cercle">
                            <div className="about-img">
                                <img src={abimg} alt="Maison des Associations de Guédiawaye" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 offset-lg-1 grid col-md-12 col-12">
                        <div className="about-text">
                            <div className="section-title">
                                <div className="thumb-text">
                                    <span>À PROPOS</span>
                                </div>
                                <h2>
                                    La <span>Maison des Associations</span> de <span>Guédiawaye</span>
                                </h2>
                            </div>
                            <p>
                                Située au cœur d’un territoire dynamique et jeune, la Maison des Associations de Guédiawaye (MAG)
                                est un espace dédié à la collaboration, à l’innovation et au développement du tissu associatif local.
                                Elle soutient et accompagne les associations, entrepreneurs et porteurs de projets pour renforcer
                                leur impact social, économique et culturel dans la région de Dakar.
                            </p>

                            <div className="ab-icon-area">
                                <div className="about-icon-wrap">

                                    <div className="about-icon-item">
                                        <div className="ab-icon">
                                            <img draggable="false" src={abimg2} alt="Espaces de travail" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/espaces">
                                                    Espaces & Infrastructures
                                                </Link>
                                            </h2>
                                            <p>
                                                Bureaux équipés, salles de réunion, espace de coworking, incubateur Tech & Art,
                                                grande salle multifonctionnelle et terrasse conviviale.
                                            </p>
                                        </div>
                                    </div>

                                    <div className="about-icon-item">
                                        <div className="ab-icon ab-icon2">
                                            <img draggable="false" src={abimg3} alt="Programmes d'accompagnement" />
                                        </div>
                                        <div className="ab-text">
                                            <h2>
                                                <Link onClick={ClickHandler} to="/activites">
                                                    Activités & Accompagnement
                                                </Link>
                                            </h2>
                                            <p>
                                                Formations, coaching, incubation, réseautage et conférences thématiques
                                                pour dynamiser la vie associative et entrepreneuriale locale.
                                            </p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ab-shape">
                <img src={abimg4} alt="Décor graphique" />
            </div>
        </div>
    )
}

export default About;
