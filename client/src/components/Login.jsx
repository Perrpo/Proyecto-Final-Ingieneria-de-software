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

      if (rol === 'administrador' || rol === 'supervisor') {
        navigate('/escritorio');
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
    <div>
      <div style={{
        background: '#000',
        padding: '1.5rem 0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <img src="/logo.png" alt="Logo" style={{ height: 60 }} />
      </div>
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '80vh'
      }}>
        <div style={{
          background: '#fff',
          borderRadius: 20,
          boxShadow: '0 4px 24px #0002',
          padding: 40,
          minWidth: 350,
          textAlign: 'center'
        }}>
          <h2 style={{ marginBottom: 32 }}>Iniciar Sesión</h2>
          <form onSubmit={handleSubmit}>
            <label style={{ display: 'block', textAlign: 'left', marginBottom: 4 }}>Usuario</label>
            <input
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Tu usuario"
              style={{
                width: '100%',
                padding: 10,
                marginBottom: 16,
                borderRadius: 6,
                border: '1px solid #ccc'
              }}
            />
            <label style={{ display: 'block', textAlign: 'left', marginBottom: 4 }}>Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              style={{
                width: '100%',
                padding: 10,
                marginBottom: 24,
                borderRadius: 6,
                border: '1px solid #ccc'
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                background: '#000',
                color: '#fff',
                border: 'none',
                borderRadius: 8,
                padding: '12px 0',
                fontSize: 18,
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Iniciar Sesión
            </button>
            {error && <p style={{ color: 'red', marginTop: 16 }}>{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
