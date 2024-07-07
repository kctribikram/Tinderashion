
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ItemList from './components/ItemList';
import CreateItem from './components/CreateItem';
import Login from './components/Login';
import './App.css';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (isLoggedIn) {
      axios.get('http://localhost:5000/items')
        .then(response => {
          setItems(response.data);
          console.log(response.data);
        })
        .catch(error => console.error('Error fetching items:', error));
    }
  }, [isLoggedIn]);

  const handleLogin = (status) => {
    setIsLoggedIn(status);
  };

  const handleCreateItem = (newItem) => {
    setItems([...items, newItem]);
  };

  const handleUpdateItem = (itemId) => {
    console.log(`Update item with ID: ${itemId}`);
  };

  const handleDeleteItem = (itemId) => {
    setItems(items.filter(item => item._id !== itemId));
    axios.delete(`http://localhost:5000/items/${itemId}`)
      .then(response => console.log('Item deleted:', response.data))
      .catch(error => console.error('Error deleting item:', error));
  };

  return (
    <div className="container">
      {isLoggedIn ? (
        <>
          <CreateItem onCreate={handleCreateItem} />
          <ItemList items={items} onUpdate={handleUpdateItem} onDelete={handleDeleteItem} />
        </>
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;