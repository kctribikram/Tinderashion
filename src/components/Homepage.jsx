import React from 'react';
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

      {/* About Us Section */}
      <div className="About-us-section">
        <div className="row">
          <div className="col-md-6">
            <div className="about-home">
              <img src="/images/about-us.jpg" alt="about-image" className="img-fluid" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-home-content">
              <h2>Discover your perfect style match with every swipe at Tindershion.</h2>
              <p>Welcome to Tindershion, where the thrill of discovery meets the elegance of fashion. At Tindershion, we've reimagined the shopping experience by combining the swipe culture of Tinder with the world of fashion. Our innovative platform lets you explore and shop for the latest trends in a fun, engaging way. Swipe right to add your favorite styles to your wardrobe and swipe left to discover new looks tailored to your taste.
                <br /><br />
                Our mission is to make fashion shopping exciting and personalized. With Tindershion, every swipe introduces you to curated collections and unique pieces that speak to your individual style. Say goodbye to endless scrolling and hello to a smarter, more intuitive way to find your fashion favorites. Embrace the future of fashion shopping with Tindershion – where every swipe is a step closer to your perfect style match.</p>
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
          <div className="col-md-3">
            <div className="featured-card">
              <div className="featured-img">
                <img src="/images/women-fashion.jpeg" className="img-fluid card-Image" alt="" />
              </div>
              <div className="card-body">
                <h5>Women's Collection</h5>
                <p>Discover our curated Women's Collection, featuring the latest trends designed to elevate your style effortlessly.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="featured-card">
              <div className="featured-img">
                <img src="/images/men-fashion.jpeg" className="img-fluid card-Image" alt="" />
              </div>
              <div className="card-body">
                <h5>Men's Collection</h5>
                <p>Explore the Men's Collection, modern fashion staples and standout pieces tailored to keep you looking sharp.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="featured-card">
              <div className="featured-img">
                <img src="/images/kids-fashion.jpeg" className="img-fluid card-Image" alt="" />
              </div>
              <div className="card-body">
                <h5>Kids' Collection</h5>
                <p>Browse our Kids' Collection for playful, comfortable, and stylish outfits that keep your little ones looking their best.</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="featured-card">
              <div className="featured-img">
                <img src="/images/unisex-fashion.jpeg" className="img-fluid card-Image" alt="" />
              </div>
              <div className="card-body">
                <h5>Unisex Collection</h5>
                <p>Shop our Unisex Collection for versatile, stylish pieces designed to transcend gender and offer universal appeal.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Homepage;
