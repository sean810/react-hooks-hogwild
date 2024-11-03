// src/App.js
// src/App.js
import React, { useState } from 'react';
import Nav from './components/Nav';
import HogList from './components/HogList';
import FilterControls from './components/FilterControls';
import HogForm from './components/HogForm';
import hogsData from './porkers_data'; 


function App() {
  const [hogs, setHogs] = useState(hogsData);
  const [showGreased, setShowGreased] = useState(false);
  const [sortOption, setSortOption] = useState('name');

  const addHog = (newHog) => {
    setHogs([...hogs, newHog]);
  };

  const filteredHogs = hogs.filter(hog => !showGreased || hog.greased);
  const sortedHogs = [...filteredHogs].sort((a, b) => 
    sortOption === 'name' ? a.name.localeCompare(b.name) : a.weight - b.weight
  );

  return (
    <div className="App">
      <Nav />
      <FilterControls 
        showGreased={showGreased} 
        setShowGreased={setShowGreased} 
        sortOption={sortOption} 
        setSortOption={setSortOption} 
      />
      <HogForm addHog={addHog} />
      <HogList hogs={sortedHogs} />
    </div>
  );
}

export default App;
