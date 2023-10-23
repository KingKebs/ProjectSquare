import React, { useEffect, useState } from 'react';
import '../styles/Brands.css';

function Brands() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    // Define the URL of your API endpoint
    const apiUrl = 'http://localhost:3000/api/brands'; // Update with your actual API URL

    // Make the API request to fetch the list of brands
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Update the 'brands' state with the fetched data
        setBrands(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="brands">
      <h1 className="heading1">You'll be in good hands</h1>
      <h2 className="heading2">Trusted by leading brands</h2>
      <div className="brand-row top-row">
        {/* Top row content */}
      </div>
      <div className="brand-row middle-row">
        {/* Middle row content */}
      </div>
      <div className="brand-row bottom-row">
        {/* Bottom row content */}
      </div>
    </div>
  );
}

export default Brands;
