import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const Formations = () => {
    const [formations, setFormations] = useState([]);
    const [loading, setLoading] = useState(true);  // Pour indiquer le chargement
    const [error, setError] = useState(null); // Pour gérer les erreurs

    // Fonction pour charger les formations depuis l'API
    useEffect(() => {
        const fetchFormations = async () => {
            try {
                // Remplace l'URL par celle de ton API qui fournit les formations
                const response = await axios.get('http://localhost:5001/api/activite/formations');
                setFormations(response.data.formations); // On met les formations dans l'état
                setLoading(false); // Fin du chargement
            } catch (error) {
                console.error('Erreur lors de la récupération des formations:', error);
                setError('Une erreur est survenue lors de la récupération des formations.');
                setLoading(false);
            }
        };

        fetchFormations();
    }, []);

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    };

    // Si les formations sont en train de charger, on affiche un message de chargement
    if (loading) {
        return (
            <div className="case-area section-padding">
                <div className="container text-center">
                    <p>Chargement des formations...</p>
                </div>
            </div>
        );
    }

    // Si une erreur survient, on affiche un message d'erreur
    if (error) {
        return (
            <div className="case-area section-padding">
                <div className="container text-center">
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    return (
        <div className="case-area section-padding">
            <div className="container">
                <div className="col-lg-6 offset-lg-3">
                    <div className="section-title section-title2 text-center">
                        <div className="thumb-text">
                            <span>PROGRAMMES & PROJETS</span>
                        </div>
                        <h2>Les formations de la Maison des Associations de Guédiawaye</h2>
                        <p>
                            Découvrez les programmes de formations disponibles pour renforcer les compétences et promouvoir l'entrepreneuriat à Guédiawaye.
                        </p>
                    </div>
                </div>

                <div className="row">
                    {formations.map((formation) => (
                        <div key={formation._id} className="col-lg-4 col-md-6 col-12">
                            <div className="cause-item">
                                <div className="cause-top">
                                    <div className="cause-img">
                                        <img src={formation.imageUrl || 'default-image.png'} alt={formation.title} />
                                        <div className="case-btn">
                                            <Link onClick={ClickHandler} to={`/formation/${formation._id}`} className="theme-btn">
                                                En savoir plus
                                                <i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="cause-text">
                                    <h3>
                                        <Link onClick={ClickHandler} to={`/formation/${formation._id}`}>
                                            {formation.title}
                                        </Link>
                                    </h3>
                                    <p>{formation.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Formations;
