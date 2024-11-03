// src/components/FilterControls.js
import React from 'react';

function FilterControls({ showGreased, setShowGreased, sortOption, setSortOption }) {
  return (
    <div className="filter-controls">
      <label>
        Show Greased Only:
        <input 
          type="checkbox" 
          checked={showGreased} 
          onChange={() => setShowGreased(!showGreased)} 
        />
      </label>

      <label>
        Sort by:
        <select value={sortOption} onChange={(e) => setSortOption(e.target.value)}>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </label>
    </div>
  );
}

export default FilterControls;
