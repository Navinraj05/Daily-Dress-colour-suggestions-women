
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchProfile() {
      try {
        const response = await axios.get('http://localhost:5000/profile');
        setUser(response.data);
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    }
    fetchProfile();
  }, []);

  return (
    <div>
      {user ? (
        <div>
          <h2>User Profile</h2>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Profile;
