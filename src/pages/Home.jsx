// Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to My Social Network</h2>
      <p>This is a training app for React, global state handling, and tokens. Here, authentication and routing will be used to create a small social media website.</p>
      <p>
        <Link to="/login">Login</Link> or <Link to="/signup">Register</Link>
      </p>
    </div>
  );
}

export default Home;
