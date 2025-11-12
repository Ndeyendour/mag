import React from 'react'
import blog1 from '../../images/blog/img-1.jpg'
import blog2 from '../../images/blog/img-2.jpg'
import blog3 from '../../images/blog/img-3.jpg'
import blog4 from '../../images/blog/img-4.jpg'
import { Link } from 'react-router-dom'

import './style.css'

const BlogSection = (props) => {

    const ClickHandler = () => {
        window.scrollTo(10, 0);
    }

    return (
        <div className="blog-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <div className="section-title section-title2 text-center">
                            <div className="thumb-text">
                                <span>Actualités</span>
                            </div>
                            <h2>Les dernières nouvelles de la Maison des Associations</h2>
                            <p>
                                Découvrez les événements, formations, programmes et initiatives
                                qui font vivre le tissu associatif et entrepreneurial de Guédiawaye.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="blog-wrap">
                    <div className="row">

                        {/* Article 1 */}
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog1} alt="Atelier de formation à la MAG" />
                                </div>
                                <div className="blog-content">
                                    <ul>
                                        <li>11 Novembre, 2025</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>85</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i>32</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/blog-details">
                                            Lancement du programme de formation pour les associations locales
                                        </Link>
                                    </h2>
                                    <p>
                                        La Maison des Associations a lancé une série d’ateliers de renforcement de capacités
                                        destinés aux acteurs communautaires pour améliorer la gestion de projets et la communication.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Article 2 */}
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-content">
                                    <ul>
                                        <li>28 Octobre, 2025</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>62</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i>20</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/blog-details">
                                            Retour sur la conférence citoyenne du samedi
                                        </Link>
                                    </h2>
                                    <p>
                                        La conférence a réuni des jeunes, des leaders associatifs et des représentants institutionnels
                                        autour du thème : <em>“Innovation sociale et développement local à Guédiawaye.”</em>
                                    </p>
                                </div>
                                <div className="blog-img">
                                    <img src={blog2} alt="Conférence citoyenne à la MAG" />
                                </div>
                            </div>
                        </div>

                        {/* Article 3 */}
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-content">
                                    <ul>
                                        <li>15 Septembre, 2025</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>47</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i>14</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/blog-details">
                                            Appel à projets : entrepreneuriat local et innovation sociale
                                        </Link>
                                    </h2>
                                    <p>
                                        La MAG lance un appel à projets pour soutenir les initiatives locales dans les domaines
                                        de l’économie solidaire, du numérique et de l’art communautaire.
                                    </p>
                                </div>
                                <div className="blog-img">
                                    <img src={blog3} alt="Appel à projets de la MAG" />
                                </div>
                            </div>
                        </div>

                        {/* Article 4 */}
                        <div className="col col-lg-6 col-12">
                            <div className="blog-item">
                                <div className="blog-img">
                                    <img src={blog4} alt="Espace coworking MAG" />
                                </div>
                                <div className="blog-content">
                                    <ul>
                                        <li>02 Août, 2025</li>
                                        <li><i className="fa fa-heart" aria-hidden="true"></i>73</li>
                                        <li><i className="fa fa-comments-o" aria-hidden="true"></i>28</li>
                                    </ul>
                                    <h2>
                                        <Link onClick={ClickHandler} to="/blog-details">
                                            Un nouvel espace de coworking pour les jeunes entrepreneurs
                                        </Link>
                                    </h2>
                                    <p>
                                        L’espace coworking de la Maison des Associations accueille désormais de jeunes porteurs de projets,
                                        favorisant la créativité, le partage d’idées et le travail collaboratif.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogSection;
