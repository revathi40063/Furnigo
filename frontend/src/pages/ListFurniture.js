import React, { useState } from 'react';
import './ListFurniture.css';

const ListFurniture = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    rentPerMonth: '',
    category: '',
    image: null,
    contactInfo: ''
  });

  const [imagePreview, setImagePreview] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData(prev => ({
        ...prev,
        image: file
      }));
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the data to your backend API
    console.log('Form submitted:', formData);
    alert('Furniture listing submitted successfully!');
    
    // Reset form
    setFormData({
      name: '',
      description: '',
      rentPerMonth: '',
      category: '',
      image: null,
      contactInfo: ''
    });
    setImagePreview(null);
  };

  return (
    <div className="list-furniture-page">
      <div className="container">
        <h1 className="page-title">List Your Furniture</h1>
        <p className="page-subtitle">
          Share your furniture with others and earn some extra income
        </p>

        <form className="list-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Furniture Name *</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="e.g., Modern Sofa Set"
              className="form-input"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description *</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows="5"
              placeholder="Describe the condition, size, and features of your furniture..."
              className="form-textarea"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="rentPerMonth">Rent per Month ($) *</label>
              <input
                type="number"
                id="rentPerMonth"
                name="rentPerMonth"
                value={formData.rentPerMonth}
                onChange={handleChange}
                required
                min="1"
                placeholder="50"
                className="form-input"
              />
            </div>

            <div className="form-group">
              <label htmlFor="category">Category *</label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="form-select"
              >
                <option value="">Select Category</option>
                <option value="sofa">Sofa</option>
                <option value="chair">Chair</option>
                <option value="table">Table</option>
                <option value="bed">Bed</option>
                <option value="cabinet">Cabinet</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="image">Furniture Image *</label>
            <div className="image-upload-container">
              <input
                type="file"
                id="image"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
                required
                className="form-file-input"
              />
              {imagePreview && (
                <div className="image-preview">
                  <img src={imagePreview} alt="Preview" />
                </div>
              )}
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="contactInfo">Contact Info *</label>
            <input
              type="text"
              id="contactInfo"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              required
              placeholder="Email or Phone Number"
              className="form-input"
            />
          </div>

          <button type="submit" className="btn btn-primary submit-btn">
            List Furniture
          </button>
        </form>
      </div>
    </div>
  );
};

export default ListFurniture;
