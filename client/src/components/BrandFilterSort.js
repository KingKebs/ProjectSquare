// BrandFilterSort.js
import React from 'react';
import './BrandFilterSort.css'; // Import the associated CSS file

const BrandFilterSort = () => {
  return (
    <div className="brand-filter-sort">
      <select className="filter">
        <option value="">All Brands</option>
        <option value="category1">Category 1</option>
        <option value="category2">Category 2</option>
        {/* Add more categories as needed */}
      </select>
      <select className="sort">
        <option value="name">Sort by Name</option>
        <option value="published">Sort by Published</option>
      </select>
    </div>
  );
};

export default BrandFilterSort;
