import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3001/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: username, contrasena: password })
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Error en login');

      const token = data.token;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      const rol = payload.rol;

      if (rol === 'admin') {
        navigate('/dashboard/admin');
      } else if (rol === 'supervisor') {
        navigate('/dashboard/supervisor');
      } else if (rol === 'empleado') {
        navigate('/dashboard/empleado');
      } else {
        setError('Rol no reconocido');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-box">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Usuario</label>
        <input value={username} onChange={e => setUsername(e.target.value)} />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Entrar</button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
