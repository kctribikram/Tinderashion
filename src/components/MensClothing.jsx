import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './MensClothing.css';
import data from '../data/mens_clothing.json';
import 'rc-slider/assets/index.css';
import Slider from 'rc-slider';

const MensClothing = ({ cart, setCart }) => {
  const [index, setIndex] = useState(0);
  const [filteredData, setFilteredData] = useState(data);
  const [filters, setFilters] = useState({ price: 100, sizes: [], colors: [] });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const colors = [...new Set(data.flatMap(product => product.color))];
  const sizes = [...new Set(data.flatMap(product => product.size))];

  const nextProduct = () => {
    setIndex((prevIndex) => (prevIndex + 1) % filteredData.length);
  };

  const likeProduct = () => {
    const product = { ...filteredData[index], quantity: 1 };
    setCart([...cart, product]);
    nextProduct();
  };

  const toggleFilter = (filterType, value) => {
    setFilters(prevFilters => {
      const filterValues = prevFilters[filterType];
      return {
        ...prevFilters,
        [filterType]: filterValues.includes(value)
          ? filterValues.filter(item => item !== value)
          : [...filterValues, value]
      };
    });
  };

  const applyFilters = () => {
    const filtered = data.filter(product =>
      (filters.price ? product.price <= filters.price : true) &&
      (filters.sizes.length ? filters.sizes.some(size => product.size.includes(size)) : true) &&
      (filters.colors.length ? filters.colors.some(color => product.color.includes(color)) : true)
    );
    setFilteredData(filtered);
    setIndex(0);
  };

  const resetFilters = () => {
    setFilters({ price: 100, sizes: [], colors: [] });
    setFilteredData(data);
    setIndex(0);
  };

  useEffect(() => {
    applyFilters();
  }, [filters]);

  const handlers = useSwipeable({
    onSwipedLeft: nextProduct,
    onSwipedRight: likeProduct,
  });

  return (
    <div className="mens-clothing">
      <h1>Men's Clothing</h1>
      <div className="content">
        <button className="filter-toggle" onClick={() => setIsFilterOpen(!isFilterOpen)}>
          {isFilterOpen ? 'Hide Filters' : 'Sort / Filter'}
        </button>
        <div className={`filters ${isFilterOpen ? 'open' : ''}`}>
          <div className="filter-section">
            <h3>Filter by Color</h3>
            <ul>
              {colors.map((color) => (
                <li 
                  key={color} 
                  className={filters.colors.includes(color) ? 'selected' : ''}
                  onClick={() => toggleFilter('colors', color)}
                >
                  {color}
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-section">
            <h3>Filter by Size</h3>
            <ul>
              {sizes.map((size) => (
                <li 
                  key={size} 
                  className={filters.sizes.includes(size) ? 'selected' : ''}
                  onClick={() => toggleFilter('sizes', size)}
                >
                  {size}
                </li>
              ))}
            </ul>
          </div>
          <div className="filter-section">
            <h3>Filter by Price</h3>
            <div className="price-filter">
              <Slider
                min={0}
                max={100}
                value={filters.price}
                onChange={(value) => setFilters({ ...filters, price: value })}
              />
              <p>Max Price: ${filters.price}</p>
            </div>
          </div>
          <div className="filter-buttons">
            <button onClick={applyFilters}>Set Filter</button>
            <button onClick={resetFilters}>Reset</button>
          </div>
        </div>
        <div className="product-section">
          {filteredData.length > 0 && (
            <div className="product-card" {...handlers}>
              <img src={filteredData[index].image} alt={filteredData[index].name} />
              <h2>{filteredData[index].name}</h2>
              <p>Price: ${filteredData[index].price}</p>
              <p>Size: {filteredData[index].size.join(', ')}</p>
              <p>Colors: {filteredData[index].color.join(', ')}</p>
              <div className="buttons">
                <button className='like' onClick={likeProduct}>
                  <i className="fas fa-heart"></i>
                  <span >Like</span>
                </button>
                <button className='unlike' onClick={nextProduct}>
                  <i className="fas fa-times"></i>
                  <span >Unlike</span>
                </button>
              </div>
            </div>
          )}
          {filteredData.length === 0 && <p>No products found.</p>}
        </div>
      </div>
    </div>
  );
};

export default MensClothing;
