import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const featuredFurniture = [
    {
      id: 1,
      name: 'Modern Sofa Set',
      price: 89,
      image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Wooden Dining Table',
      price: 65,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Comfortable Chair',
      price: 35,
      image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop'
    },
    {
      id: 4,
      name: 'Elegant Coffee Table',
      price: 45,
      image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&fit=crop'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Find Your Perfect Furniture</h1>
          <p className="hero-subtitle">
            Rent premium furniture for your home or office. Quality pieces, flexible terms, hassle-free experience.
          </p>
          <div className="hero-buttons">
            <Link to="/browse" className="btn btn-primary">
              Browse Furniture
            </Link>
            <Link to="/list" className="btn btn-secondary">
              List Furniture
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Furniture Section */}
      <section className="featured-section">
        <div className="container">
          <h2 className="section-title">Featured Furniture</h2>
          <div className="featured-grid">
            {featuredFurniture.map((item) => (
              <div key={item.id} className="furniture-card card">
                <div className="furniture-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="furniture-info">
                  <h3 className="furniture-name">{item.name}</h3>
                  <p className="furniture-price">${item.price}/month</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
