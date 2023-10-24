// MenuSearch.js
import React from 'react';
import '../styles/MenuSearch.css'; // Import the CSS file

function MenuSearch() {
  return (
    <div className="menu-search">
      <button className="search-button">
        <span className="search-icon">&#128269;</span>
      </button>
      <div className="expanded-search">
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
}

export default MenuSearch;
