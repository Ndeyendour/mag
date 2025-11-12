import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import test1 from '../../images/testimonials/img-1.png'
import test2 from '../../images/testimonials/img-2.png'
import test3 from '../../images/testimonials/img-3.png'
import test4 from '../../images/ts.png'

import './style.css'

class Testimonial extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nav1: null,
            nav2: null
        };
    }

    componentDidMount() {
        this.setState({
            nav1: this.slider1,
            nav2: this.slider2
        });
    }

    render() {
        return (
            <section className="testimonials-section section-padding">
                <div className="container">
                    <div className="row">
                        <div className="col col-xs-12">
                            <div className="testimonials-slider">
                                {/* Images du slider */}
                                <div className="testimonial-thumb-active">
                                    <Slider
                                        asNavFor={this.state.nav2}
                                        fade={true}
                                        prevArrow={<button type="button" className="slick-prev"><i className="fa fa-angle-double-left"></i></button>}
                                        nextArrow={<button type="button" className="slick-next"><i className="fa fa-angle-double-right"></i></button>}
                                        ref={slider => (this.slider1 = slider)}
                                    >
                                        <div className="test-img">
                                            <img src={test1} alt="Témoignage 1 - Maison des Associations de Guédiawaye" />
                                        </div>
                                        <div className="test-img">
                                            <img src={test2} alt="Témoignage 2 - Maison des Associations de Guédiawaye" />
                                        </div>
                                    </Slider>
                                </div>

                                {/* Contenu des témoignages */}
                                <div className="testimonial-content-active text-center">
                                    <Slider
                                        asNavFor={this.state.nav1}
                                        ref={slider => (this.slider2 = slider)}
                                        slidesToShow={1}
                                        swipeToSlide={true}
                                        arrows={false}
                                        fade={true}
                                    >
                                        {/* Témoignage 1 */}
                                        <div className="grid">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                            </ul>
                                            <p>
                                                “Grâce à la Maison des Associations de Guédiawaye, notre organisation a pu bénéficier d’un espace de travail moderne,
                                                de formations adaptées et d’un accompagnement personnalisé. Aujourd’hui, nous collaborons avec d’autres structures
                                                locales pour renforcer notre impact social.”
                                            </p>
                                            <div className="info">
                                                <h5>Ndèye Fatou Faye</h5>
                                                <p>Présidente de l’association Femmes Solidaires de Guédiawaye</p>
                                            </div>
                                        </div>

                                        {/* Témoignage 2 */}
                                        <div className="grid">
                                            <ul>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><i className="fa fa-star"></i></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                                <li><span><i className="fa fa-star"></i></span></li>
                                            </ul>
                                            <p>
                                                “En tant que jeune entrepreneur, j’ai trouvé à la MAG un cadre stimulant pour développer mon projet numérique.
                                                Les conseils reçus et le réseau de partenaires m’ont permis de passer de l’idée à la concrétisation.
                                                C’est une véritable chance pour les jeunes de Guédiawaye.”
                                            </p>
                                            <div className="info">
                                                <h5>Mamadou Ba</h5>
                                                <p>Fondateur de la start-up JàmmTech</p>
                                            </div>
                                        </div>
                                    </Slider>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Décorations visuelles */}
                <div className="testi-shape">
                    <img src={test3} alt="Décor Maison des Associations" />
                </div>
                <div className="testi-shape2">
                    <img src={test4} alt="Décor secondaire" />
                </div>
            </section>
        );
    }
}

export default Testimonial;
