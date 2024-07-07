import React from 'react';

// Define static items data
const staticItems = [
  {
    _id: 1,
    name: 'Item 1',
    price: 25.99,
    size: ['S', 'M', 'L'],
    color: ['Red', 'Blue', 'Green'],
    image: 'https://via.placeholder.com/150',
  },
  {
    _id: 2,
    name: 'Item 2',
    price: 19.99,
    size: ['M', 'L'],
    color: ['Black', 'White'],
    image: 'https://via.placeholder.com/150',
  },
  {
    _id: 3,
    name: 'Item 3',
    price: 32.50,
    size: ['S', 'L'],
    color: ['Yellow', 'Purple'],
    image: 'https://via.placeholder.com/150',
  },
];

const ItemList = ({ items, onUpdate, onDelete }) => {
  // Use staticItems if items prop is empty (for demonstration)
  const displayItems = items.length ? items : staticItems;

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {displayItems.map((item) => (
          <li key={item._id}>
            <strong>{item.name}</strong>
            <p>Price: ${item.price.toFixed(2)}</p>
            <p>Sizes: {item.size.join(', ')}</p>
            <p>Colors: {item.color.join(', ')}</p>
            <p><img src={item.image} alt={item.name} width="100" /></p>
            <button onClick={() => onUpdate(item._id)}>Update</button>
            <button onClick={() => onDelete(item._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
