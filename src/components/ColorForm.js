
import React, { useState } from 'react';
import axios from 'axios';

function ColorForm() {
  const [name, setName] = useState('');
  const [hexCode, setHexCode] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/colors', { name, hexCode });
      console.log('Color added successfully');
      // Optionally, you can redirect to another page or update the color list after adding
    } catch (error) {
      console.error('Error adding color:', error);
    }
  };

  return (
    <div>
      <h2>Add Color</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
        <input type="text" placeholder="Hex Code" value={hexCode} onChange={(e) => setHexCode(e.target.value)} />
        <button type="submit">Add Color</button>
      </form>
    </div>
  );
}

export default ColorForm;
