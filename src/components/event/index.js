import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './style.css';

const EventSection = (props) => {

    const [events, setEvents] = useState([]); // État pour stocker les événements récupérés
    const [loading, setLoading] = useState(true);  // Pour afficher le chargement
    const [error, setError] = useState(null); // Pour gérer les erreurs

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    // Charger les événements depuis l'API
    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const response = await axios.get('http://localhost:5001/api/activite/evenements'); // L'URL de ton API
                setEvents(response.data); // Mettre à jour l'état avec les événements
                setLoading(false); // Fin du chargement
            } catch (error) {
                console.error('Erreur lors de la récupération des événements:', error);
                setError('Une erreur est survenue lors de la récupération des événements.');
                setLoading(false); // Fin du chargement même en cas d'erreur
            }
        };

        fetchEvents();
    }, []);

    // Vérifier si les événements sont en cours de chargement
    if (loading) {
        return (
            <div className="event-area section-padding">
                <div className="container">
                    <p>Chargement des événements...</p>
                </div>
            </div>
        );
    }

    // Afficher un message d'erreur si une erreur est survenue
    if (error) {
        return (
            <div className="event-area section-padding">
                <div className="container">
                    <p>{error}</p>
                </div>
            </div>
        );
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
                        {events.length > 0 ? events.map((event) => (
                            <div className="event-item" key={event._id}>
                                <div className="event-img">
                                    <img src={event.imageUrl || '/default-image.jpg'} alt={event.title} />
                                </div>
                                <div className="event-text">
                                    <div className="event-left">
                                        <div className="event-l-text">
                                            <span>{new Date(event.startDate).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                                            <h4>{new Date(event.startDate).getDate()}</h4>
                                        </div>
                                    </div>
                                    <div className="event-right">
                                        <ul>
                                            <li><i className="ti-time"></i> {new Date(event.startDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })} - {new Date(event.endDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</li>
                                            <li><i className="ti-location-pin"></i> {event.location}</li>
                                        </ul>
                                        <h2>
                                            <Link onClick={ClickHandler} to={`/evenements/${event._id}`}>
                                                {event.title}
                                            </Link>
                                        </h2>
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <p>Aucun événement trouvé.</p>
                        )}
                    </div>
                </div>
            </div>

            {/* Éléments décoratifs */}
            <div className="shape1"><img src="/path/to/your/decorative/image1.jpg" alt="forme décorative" /></div>
            <div className="shape2"><img src="/path/to/your/decorative/image2.jpg" alt="forme décorative" /></div>
        </div>
    );
};

export default EventSection;
