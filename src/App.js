// src/App.js
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Filters from './components/Filters';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

const App = () => {
  const [minWidth, setMinWidth] = useState('');
  const [minHeight, setMinHeight] = useState('');
  const [catData, setCatData] = useState([]);

  useEffect(() => {
    // Fetch cat images from the API
    fetch('https://api.thecatapi.com/v1/images/search?format=json&limit=10')
      .then((response) => response.json())
      .then((data) => setCatData(data))
      .catch((error) => console.error('Error fetching cat images:', error));
  }, []); // Fetch images only once when the component mounts

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
