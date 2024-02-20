import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Code pour envoyer les données de connexion au backend
      // Par exemple, utiliser une requête HTTP avec Axios
      console.log('Login data:', formData);
      // Ici, vous pouvez appeler votre API pour gérer l'authentification
      // et mettre à jour l'état utilisateur en conséquence
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div>
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <input
      type="email"
      name="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      required
    />
    <input
      type="password"
      name="password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      required
    />
    <button type="submit">Login</button>
  </form>
  Don't have an account? <Link to="/register">Sign up</Link>
</div>
);
}

export default Login;
