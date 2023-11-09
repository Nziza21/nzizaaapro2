// src/App.js
import React, { useState } from 'react';
import header from './components/header';

const App = () => {
  const [minWidth, setMinWidth] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [catData, setCatData] = useState([]);

  const applyFilters = () => {
    // Logic to filter catData based on minWidth and minHeight
    // Update the state with the filtered data
  };

  return (
    <div>
      <Header />
      <Filters
        minWidth={minWidth}
        minHeight={minHeight}
        setMinWidth={setMinWidth}
        setMinHeight={setMinHeight}
        applyFilters={applyFilters}
      />
      <Gallery catData={catData} />
      <Footer />
    </div>
  );
};

export default App;
