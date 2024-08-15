import React from 'react';
import { Link } from 'react-router-dom';
import './Homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Homepage = () => {
  return (
    <>
      {/* Banner Section */}
      <div className="banner-section">
        <div className="banner-overlay">
          <div className="container full-height">
            <div className="row justify-content-center align-items-center text-center full-height">
              <div className="col-md-8">
                <div className="banner-content">
                  <h1 className="animate-text">Unleash Your Creativity</h1>
                  <p className="animate-text">Discover the latest trends and design inspiration right at your fingertips.</p>
                  <a href="#" className="btn btn-custom animate-button">Explore Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="featured-section">
        <div className="featured-heading">
          <h2>Featured Products</h2>
        </div>
        <div className="row">
          <div className="col-md-4">
            <Link to="/mens-clothing">
              <div className="featured-card">
                <div className="featured-img">
                  <img src="/images/men-fashion.jpeg" className="img-fluid card-Image" alt="Men's Collection" />
                </div>
                <div className="card-body">
                  <h5>Men's Collection</h5>
                  <p>Explore the Men's Collection, modern fashion staples and standout pieces tailored to keep you looking sharp.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/womens-clothing">
              <div className="featured-card">
                <div className="featured-img">
                  <img src="/images/women-fashion.jpeg" className="img-fluid card-Image" alt="Women's Collection" />
                </div>
                <div className="card-body">
                  <h5>Women's Collection</h5>
                  <p>Discover our curated Women's Collection, featuring the latest trends designed to elevate your style effortlessly.</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-4">
            <Link to="/shoes">
              <div className="featured-card">
                <div className="featured-img">
                  <img src="/images/shoes-fashion.jpg" className="img-fluid card-Image" alt="Shoes Collection" />
                </div>
                <div className="card-body">
                  <h5>Shoes Collection</h5>
                  <p>Shop our Shoes Collection for versatile, stylish footwear designed to complete your look.</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
