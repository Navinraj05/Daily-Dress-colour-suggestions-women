// frontend/src/components/ColorDetail.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ColorDetail({ match }) {
  const [color, setColor] = useState(null);
  const colorId = match.params.id;

  useEffect(() => {
    async function fetchColor() {
      try {
        const response = await axios.get(`http://localhost:5000/colors/${colorId}`);
        setColor(response.data);
      } catch (error) {
        console.error('Error fetching color:', error);
      }
    }
    fetchColor();
  }, [colorId]);

  return (
    <div>
      {color ? (
        <div>
          <h2>Color Details</h2>
          <p>Name: {color.name}</p>
          <p>Hex Code: {color.hexCode}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ColorDetail;
