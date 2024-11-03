// src/components/HogForm.js
import React, { useState } from 'react';

function HogForm({ addHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    image: '',
    'highest medal achieved': ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addHog(formData);
    setFormData({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      image: '',
      'highest medal achieved': ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
      <input name="specialty" value={formData.specialty} onChange={handleChange} placeholder="Specialty" />
      <input name="weight" value={formData.weight} onChange={handleChange} placeholder="Weight" type="number" />
      <input name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
      <label>
        Greased:
        <input name="greased" type="checkbox" checked={formData.greased} onChange={handleChange} />
      </label>
      <input name="highest medal achieved" value={formData['highest medal achieved']} onChange={handleChange} placeholder="Highest Medal Achieved" />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
