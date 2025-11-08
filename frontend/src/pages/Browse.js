import React, { useState } from 'react';
import './Browse.css';

const Browse = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState('all');

  const furnitureItems = [
    { id: 1, name: 'Modern Sofa Set', price: 89, category: 'sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop' },
    { id: 2, name: 'Wooden Dining Table', price: 65, category: 'table', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
    { id: 3, name: 'Comfortable Chair', price: 35, category: 'chair', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
    { id: 4, name: 'Elegant Coffee Table', price: 45, category: 'table', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&fit=crop' },
    { id: 5, name: 'Leather Recliner', price: 75, category: 'chair', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop' },
    { id: 6, name: 'Sectional Sofa', price: 120, category: 'sofa', image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop' },
    { id: 7, name: 'Office Desk', price: 55, category: 'table', image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop' },
    { id: 8, name: 'Bar Stool Set', price: 40, category: 'chair', image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=400&h=300&fit=crop' },
    { id: 9, name: 'Lounge Chair', price: 50, category: 'chair', image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=400&h=300&fit=crop' },
    { id: 10, name: 'Console Table', price: 42, category: 'table', image: 'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400&h=300&fit=crop' }
  ];

  const categories = ['all', 'sofa', 'chair', 'table'];

  const handleAddToCart = (item) => {
    alert(`${item.name} added to cart!`);
    // Here you would typically add to cart state or call an API
  };

  const filteredItems = furnitureItems.filter(item => {
    const categoryMatch = selectedCategory === 'all' || item.category === selectedCategory;
    const priceMatch = 
      priceRange === 'all' ||
      (priceRange === 'low' && item.price < 50) ||
      (priceRange === 'medium' && item.price >= 50 && item.price < 80) ||
      (priceRange === 'high' && item.price >= 80);
    
    return categoryMatch && priceMatch;
  });

  return (
    <div className="browse-page">
      <div className="container">
        <h1 className="page-title">Browse Furniture</h1>

        {/* Filters */}
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="category">Category:</label>
            <select
              id="category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Categories</option>
              <option value="sofa">Sofa</option>
              <option value="chair">Chair</option>
              <option value="table">Table</option>
            </select>
          </div>

          <div className="filter-group">
            <label htmlFor="price">Price Range:</label>
            <select
              id="price"
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="filter-select"
            >
              <option value="all">All Prices</option>
              <option value="low">Under $50</option>
              <option value="medium">$50 - $80</option>
              <option value="high">$80+</option>
            </select>
          </div>
        </div>

        {/* Furniture Grid */}
        <div className="furniture-grid">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="furniture-item card">
                <div className="furniture-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="furniture-info">
                  <h3 className="furniture-name">{item.name}</h3>
                  <p className="furniture-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</p>
                  <p className="furniture-price">${item.price}/month</p>
                  <button
                    className="btn btn-primary add-to-cart-btn"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">No furniture found matching your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Browse;
