import React from 'react';

const Filters = ({ minWidth, minHeight, setMinWidth, setMinHeight, applyFilters }) => {
  const handleApplyFilters = () => {
    applyFilters();
  };

  return (
    <section id="filters">
      <label htmlFor="filter-width">Filter by Width:</label>
      <input
        type="number"
        id="filter-width"
        min="0"
        step="50"
        value={minWidth}
        onChange={(e) => setMinWidth(e.target.value)}
      /> &nbsp;&nbsp;
      <label htmlFor="filter-height">Filter by Height:</label>
      <input
        type="number"
        id="filter-height"
        min="0"
        step="50"
        value={minHeight}
        onChange={(e) => setMinHeight(e.target.value)}
      /> &nbsp;
      <button onClick={handleApplyFilters}>Apply Filters</button>
    </section>
  );
};

export default Filters;
