import React, { useState, useEffect } from 'react';
import './MyRentals.css';

const MyRentals = () => {
  const [rentals, setRentals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call - Replace with actual API endpoint
    const fetchRentals = async () => {
      try {
        // In a real app, you would fetch from your backend API
        // const response = await fetch('/api/my-rentals');
        // const data = await response.json();
        
        // Simulated data for demo
        setTimeout(() => {
          const mockRentals = [
            {
              id: 1,
              name: 'Modern Sofa Set',
              price: 89,
              category: 'sofa',
              image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=300&fit=crop',
              status: 'listed',
              contactInfo: 'john@example.com'
            },
            {
              id: 2,
              name: 'Wooden Dining Table',
              price: 65,
              category: 'table',
              image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
              status: 'rented',
              contactInfo: 'jane@example.com'
            }
          ];
          setRentals(mockRentals);
          setLoading(false);
        }, 500);
      } catch (error) {
        console.error('Error fetching rentals:', error);
        setLoading(false);
      }
    };

    fetchRentals();
  }, []);

  const handleRemoveListing = (id) => {
    if (window.confirm('Are you sure you want to remove this listing?')) {
      setRentals(rentals.filter(rental => rental.id !== id));
      // In a real app, you would call your API to delete the listing
    }
  };

  if (loading) {
    return (
      <div className="my-rentals-page">
        <div className="container">
          <div className="loading">Loading your rentals...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="my-rentals-page">
      <div className="container">
        <h1 className="page-title">My Rentals</h1>
        <p className="page-subtitle">
          Manage your furniture listings and track your rentals
        </p>

        {rentals.length === 0 ? (
          <div className="empty-state">
            <div className="empty-icon">📦</div>
            <h2>No Rentals Yet</h2>
            <p>You haven't listed any furniture or rented any items yet.</p>
            <a href="/list" className="btn btn-primary">
              List Your First Furniture
            </a>
          </div>
        ) : (
          <div className="rentals-grid">
            {rentals.map((rental) => (
              <div key={rental.id} className="rental-card card">
                <div className="rental-image">
                  <img src={rental.image} alt={rental.name} />
                  <span className={`status-badge ${rental.status}`}>
                    {rental.status === 'listed' ? 'Available' : 'Rented'}
                  </span>
                </div>
                <div className="rental-info">
                  <h3 className="rental-name">{rental.name}</h3>
                  <p className="rental-category">
                    {rental.category.charAt(0).toUpperCase() + rental.category.slice(1)}
                  </p>
                  <p className="rental-price">${rental.price}/month</p>
                  {rental.status === 'listed' && (
                    <p className="rental-contact">
                      Contact: {rental.contactInfo}
                    </p>
                  )}
                  <div className="rental-actions">
                    {rental.status === 'listed' && (
                      <button
                        className="btn btn-secondary"
                        onClick={() => handleRemoveListing(rental.id)}
                      >
                        Remove Listing
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MyRentals;
