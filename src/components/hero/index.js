import React, { Component } from "react";
import Slider from "react-slick";
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import hero1 from '../../images/slider/slide-1.jpg'
import hero2 from '../../images/slider/slide-2.jpg'
import hero3 from '../../images/slider/slide-3.png'
import hero4 from '../../images/shape/shape.png'

import './style.css'



class Hero extends Component {
    render() {

        var settings = {
            dots: true,
            arrows: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            fade: true
        };

        return (
            <section className="hero-slider hero-style-1">
                <Slider {...settings}>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero1})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>MAG</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Un espace collaboratif au service des acteurs locaux.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>
Découvrez un lieu d’échange, de formation et d’innovation citoyenne au cœur de Guédiawaye, dédié aux associations, jeunes entrepreneurs et créateurs.
                                    </p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Découvrir la Maison <i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                                <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero2})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>INNOVATION & SOLIDARITÉ</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Accompagner et valoriser les initiatives locales.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Formations, incubation, réseautage et coworking : la Maison soutient les acteurs engagés pour un développement durable et inclusif.</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Voir les activités<i className="fa fa-angle-double-right" aria-hidden="true"></i></Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide">
                        <div className="slide-inner" style={{ backgroundImage: `url(${hero3})`}}>
                            <div className="container">
                                <div className="slide-thumb">
                                    <span>ENSEMBLE POUR GUÉDIAWAYE</span>
                                </div>
                                <div className="slide-title">
                                    <h2>Participez à la dynamique associative et citoyenne.</h2>
                                </div>
                                <div data-swiper-parallax="400" className="slide-text">
                                    <p>Rejoignez un réseau d’associations, d’entrepreneurs et d’artistes qui construisent l’avenir de Guédiawaye.</p>
                                </div>
                                <div  className="slide-btns">
                                    <Link to="/donate" className="theme-btn">Devenir partenaire<i className="fa fa-angle-double-right" aria-hidden="true"></i>
                                    </Link>
                                </div>
                            </div>
                            <div className="slide-shape">
                               <img src={hero4} alt="" />
                            </div>
                        </div>
                    </div>
                </Slider>
            </section>
        )
    }
}

export default Hero;