
import React, { useState } from 'react';
import axios from 'axios';

const CreateItem = ({ onCreate }) => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [image, setImage] = useState(null);

  const handleCreate = () => {
    if (!id || !name || !price || !size || !color || !image) {
      alert('Please fill in all fields.');
      return;
    }

    const formData = new FormData();
    formData.append('id', id);
    formData.append('name', name);
    formData.append('price', price);
    formData.append('size', size);
    formData.append('color', color);
    formData.append('image', image);

    axios.post('http://localhost:5000/items/add', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    .then(response => {
      console.log('Item created:', response.data);
      onCreate({
        id: parseInt(id, 10),
        name,
        price: parseFloat(price),
        size: size.split(',').map(s => s.trim()),
        color: color.split(',').map(c => c.trim()),
        image: response.data.image
      });

      setId('');
      setName('');
      setPrice('');
      setSize('');
      setColor('');
      setImage(null);
    })
    .catch(error => console.error('Error creating item:', error));
  };

  return (
    <div>
      <h2>Create Item</h2>
      <label>ID:</label>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} /><br />
      
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br />
      
      <label>Price:</label>
      <input type="number" step="0.01" value={price} onChange={(e) => setPrice(e.target.value)} /><br />
      
      <label>Size (comma-separated):</label>
      <input type="text" value={size} onChange={(e) => setSize(e.target.value)} /><br />
      
      <label>Color (comma-separated):</label>
      <input type="text" value={color} onChange={(e) => setColor(e.target.value)} /><br />
      
      <label>Image:</label>
      <input type="file" onChange={(e) => setImage(e.target.files[0])} /><br />
      
      <button onClick={handleCreate}>Create Item</button>
    </div>
  );
};

export default CreateItem;
