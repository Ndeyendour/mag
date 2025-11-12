import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
import tm1 from '../../images/team/1.png'
import tm2 from '../../images/team/2.png'
import tm3 from '../../images/team/3.png'
import tm4 from '../../images/team/4.png'

const TeamSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className={`volunteer-area section-padding ${props.addclass}`}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>ÉQUIPE</span>
                            </div>
                            <h2>L’équipe de la Maison des Associations de Guédiawaye</h2>
                            <p>
                                Une équipe engagée au service du développement local, de la coopération et de l’innovation sociale.
                                Ensemble, nous accompagnons les associations, entrepreneurs et jeunes porteurs de projets dans leur réussite.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="volunteer-wrap">
                    <div className="row">

                        {/* Membre 1 */}
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm1} alt="Directrice de la MAG" />
                                </div>
                                <div className="volunteer-content">
                                    <h2>
                                        <Link onClick={ClickHandler} to="/equipe/directrice">
                                            Aïssatou Diop
                                        </Link>
                                    </h2>
                                    <span>Directrice de la MAG</span>
                                </div>
                            </div>
                        </div>

                        {/* Membre 2 */}
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm2} alt="Coordinateur de programmes" />
                                </div>
                                <div className="volunteer-content">
                                    <h2>
                                        <Link onClick={ClickHandler} to="/equipe/coordinateur">
                                            Mamadou Ndiaye
                                        </Link>
                                    </h2>
                                    <span>Coordinateur des programmes et formations</span>
                                </div>
                            </div>
                        </div>

                        {/* Membre 3 */}
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm3} alt="Chargée de communication" />
                                </div>
                                <div className="volunteer-content">
                                    <h2>
                                        <Link onClick={ClickHandler} to="/equipe/communication">
                                            Fatou Sylla
                                        </Link>
                                    </h2>
                                    <span>Chargée de communication & partenariats</span>
                                </div>
                            </div>
                        </div>

                        {/* Membre 4 */}
                        <div className="col col-lg-3 col-md-6 custom-grid col-12">
                            <div className="volunteer-item">
                                <div className="volunteer-img">
                                    <img src={tm4} alt="Responsable administratif" />
                                </div>
                                <div className="volunteer-content">
                                    <h2>
                                        <Link onClick={ClickHandler} to="/equipe/administratif">
                                            Ibrahima Cissé
                                        </Link>
                                    </h2>
                                    <span>Responsable administratif & financier</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TeamSection;
