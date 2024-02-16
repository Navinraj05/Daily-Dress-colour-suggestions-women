// frontend/src/components/ColorList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ColorList() {
  const [colors, setColors] = useState([]);

  useEffect(() => {
    async function fetchColors() {
      try {
        const response = await axios.get('http://localhost:5000/colors');
        setColors(response.data);
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    }
    fetchColors();
  }, []);

  return (
    <div>
      <h2>Color List</h2>
      <ul>
        {colors.map((color) => (
          <li key={color._id}>{color.name} - {color.hexCode}</li>
        ))}
      </ul>
    </div>
  );
}

export default ColorList;
