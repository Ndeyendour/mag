import React from 'react';
import { Link } from 'react-router-dom';
import VideoModal from '../../components/ModalVideo';

import adminImg from '../../images/blog/admin.jpg';

const blogPosts = [
  {
    id: 1,
    title: "Inauguration de la Maison des Associations",
    excerpt: "La Maison des Associations de Guédiawaye ouvre ses portes pour soutenir les initiatives locales...",
    date: "Nov 5, 2025",
    author: "Admin",
    img: require('../../images/blog/img-10.jpg'),
    format: "image",
  },
  {
    id: 2,
    title: "Atelier de formation pour les associations",
    excerpt: "Un atelier de formation sur la gestion de projets et la recherche de financement a été organisé...",
    date: "Nov 8, 2025",
    author: "Admin",
    img: require('../../images/blog/img-8.jpg'),
    format: "video",
  },
  {
    id: 3,
    title: "Programme de mentorat pour porteurs de projets",
    excerpt: "Des sessions de mentorat sont désormais disponibles pour accompagner les startups locales...",
    date: "Nov 10, 2025",
    author: "Admin",
    img: require('../../images/blog/img-9.jpg'),
    format: "image",
  },
];

const BlogFullwidth = () => {
  return (
    <section className="tp-blog-pg-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="tp-tp-blog-content">
              {blogPosts.map(post => (
                <div key={post.id} className={`post format-${post.format}`}>
                  <div className="entry-media">
                    <img src={post.img} alt={post.title} />
                    {post.format === "video" && (
                      <div className="video-btn2">
                        <VideoModal />
                      </div>
                    )}
                  </div>
                  <ul className="entry-meta">
                    <li><Link to="/blog-details"><img src={adminImg} alt="Admin" /> By {post.author}</Link></li>
                    <li><Link to="/blog-details"><i className="ti-calendar"></i> {post.date}</Link></li>
                    <li><Link to="/blog-details"><i className="ti-heart"></i> 0</Link></li>
                  </ul>
                  <h3><Link to="/blog-details">{post.title}</Link></h3>
                  <p>{post.excerpt}</p>
                  <Link to="/blog-details" className="read-more">Read More...</Link>
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
