import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import VideoModal from '../ModalVideo';

import adminImg from '../../images/blog/admin.jpg';
import 'font-awesome/css/font-awesome.min.css'; 

const BlogFullwidth = () => {
  // 1. Créer un state pour stocker les associations
  const [associations, setAssociations] = useState([]);

  // 2. Récupérer les données depuis l'API au chargement du composant
  useEffect(() => {
    axios.get('http://localhost:5001/api/assos/showassos')  // Remplace par l'URL de ton backend
      .then((response) => {
        setAssociations(response.data.associations); // Stocker les associations dans le state
      })
      .catch((error) => {
        console.error('Error fetching associations:', error);
      });
  }, []); // [] signifie que cet effet ne s'exécute qu'une seule fois au montage du composant

  return (
    <section className="tp-blog-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tp-tp-blog-content">
              {/* Affichage dynamique des associations récupérées */}
              {associations.map((association) => (
                <div key={association._id} className={`post format-image`}>
                  <div className="entry-media">
                    {/* Affichage des images des associations */}
                    <img
                      src={`http://localhost:5001${association.imageUrl}`} // Utiliser l'URL de l'image depuis le backend
                      alt={association.name}
                    />
                    {/* Si tu as un champ vidéo, tu peux ajouter une condition ici pour afficher une vidéo */}
                    {/* {association.videoUrl && (
                      <div className="video-btn2">
                        <VideoModal />
                      </div>
                    )} */}
                  </div>
                  <ul className="entry-meta">
                    <li>
  <Link to="#">
<img 
  src={`http://localhost:5001${association.logoUrl}`} 
  alt={association.name} 
  style={{
    width: '60px', 
    height: '60px', 
    objectFit: 'cover', /* Assure que l'image garde son ratio tout en remplissant le cercle */
    borderRadius: '50%' /* Rend l'image circulaire */
  }} 
/>

 <Link to={`mailto:${association.contactEmail}`}>
                        <i className="fa fa-envelope" style={{ marginRight: '8px' }}></i> {/* Icône d'email avant l'email */}
                        {association.contactEmail}
                      </Link>  
                      </Link>
</li>

                    <li>
                      <Link to={`tel:${association.phone}`}> {/* Lien pour appeler */}
                        <i className="fa fa-phone" style={{ marginRight: '8px' }}></i> {/* Icône de téléphone */}
                        {association.phone} {/* Affiche le numéro de téléphone */}
                      </Link>
                    </li>
                    {/* <li>
                      <Link to="/blog-details">
                        <i className="ti-heart"></i> 0
                      </Link>
                    </li> */}
                  </ul>
                  <h3><Link to="/blog-details">{association.name}</Link></h3>
                  <p>{association.description}</p>
                  {/* <Link to="/blog-details" className="read-more">Read More...</Link> */}
                </div>
              ))}

              {/* Pagination statique */}
              <div className="pagination-wrapper pagination-wrapper-left">
                <ul className="pg-pagination">
                  <li><Link to="/blog-details" aria-label="Previous"><i className="fi ti-angle-left"></i></Link></li>
                  <li className="active"><Link to="/blog-details">1</Link></li>
                  <li><Link to="/blog-details">2</Link></li>
                  <li><Link to="/blog-details">3</Link></li>
                  <li><Link to="/blog-details" aria-label="Next"><i className="fi ti-angle-right"></i></Link></li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogFullwidth;
