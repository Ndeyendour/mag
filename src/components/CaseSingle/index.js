import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SidebarWrap from '../SidebarWrap';
import './style.css';

const CaseSingle = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fonction pour charger les séminaires depuis l'API
  useEffect(() => {
    const fetchSeminars = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/activite/seminaires');
        setSeminars(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Erreur lors de la récupération des séminaires:', error);
        setError('Une erreur est survenue lors de la récupération des séminaires.');
        setLoading(false);
      }
    };

    fetchSeminars();
  }, []);

  const SubmitHandler = (e) => {
    e.preventDefault();
  };

  // Gestion des états de chargement et d'erreur
  if (loading) {
    return (
      <div className="tp-case-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <p>Chargement des séminaires...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="tp-case-details-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col col-lg-12">
              <p className="error-message">{error}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="tp-case-details-area section-padding">
      <div className="container">
        <div className="row">
          <div className="col col-lg-12">
            <div className="tp-case-details-wrap">
              <div className="tp-case-details-text">
                <div id="Description">
                  <h2>Liste des séminaires</h2>
                  
                  {seminars.length > 0 ? (
                    seminars.map(seminar => (
                      // Une row complète pour chaque séminaire
                      <div className="row seminar-row mb-5" key={seminar._id}>
                        <div className="col-md-6">
                          <div className="tp-case-details-img">
                            <img 
                              src={seminar.imageUrl} 
                              alt={seminar.title}
                              className="img-fluid rounded"
                              style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="tp-case-text-top">
                            <h3 className="mb-3">{seminar.title}</h3>
                            <p className="text-muted mb-3">{seminar.description}</p>
                            
                            <div className="seminar-info mb-3">
                              <p className="mb-2">
                                <strong>Date :</strong> {new Date(seminar.startDate).toLocaleDateString('fr-FR')}
                              </p>
                              <p className="mb-2">
                                <strong>Lieu :</strong> {seminar.location}
                              </p>
                              {seminar.endDate && (
                                <p className="mb-2">
                                  <strong>Date de fin :</strong> {new Date(seminar.endDate).toLocaleDateString('fr-FR')}
                                </p>
                              )}
                            </div>
                            
                            <div className="case-b-text">
                              <Link to={`/seminaire/${seminar._id}`} className="theme-btn">
                                Voir les détails
                                <i className="fa fa-angle-double-right ms-2" aria-hidden="true"></i>
                              </Link>
                            </div>
                          </div>
                        </div>
                        
                        {/* Séparateur entre les séminaires */}
                        <div className="col-12 mt-4">
                          <hr className="border-secondary" />
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="row">
                      <div className="col-12">
                        <p className="text-center text-muted">Aucun séminaire trouvé.</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          {/* <SidebarWrap /> */}
        </div>
      </div>
    </div>
  );
};

export default CaseSingle;