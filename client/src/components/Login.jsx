import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Enviando login');
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ usuario: username, contrasena: password })
      });

      const data = await res.json();
      console.log('Respuesta:', data);
      if (!res.ok) throw new Error(data.mensaje || 'Error en login');

      const token = data.token;
      localStorage.setItem('token', token);
      const payload = JSON.parse(atob(token.split('.')[1]));
      const rol = payload.rol;
      console.log('Rol:', rol);

      if (rol === 'administrador' || rol === 'supervisor') {
        console.log('Redirigiendo a /escritorio');
        navigate('/escritorio');
      } else if (rol === 'empleado') {
        console.log('Redirigiendo a /dashboard/empleado');
        navigate('/dashboard/empleado');
      } else {
        setError('Rol no reconocido');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error en login:', err);
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
