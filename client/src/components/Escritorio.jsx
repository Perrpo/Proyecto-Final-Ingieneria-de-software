import React from 'react';
import { useNavigate } from 'react-router-dom';

function Escritorio() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#c4c4c4', minHeight: '100vh', padding: 0 }}>
      <div style={{ background: '#222', color: '#fff', padding: '8px 20px', fontWeight: 'bold' }}>
        Escritorio
      </div>
      <div style={{ display: 'flex', gap: 16, padding: 24 }}>
        <button
          style={{
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px 32px',
            fontSize: 18,
            cursor: 'pointer',
            fontWeight: 500
          }}
          onClick={() => navigate('/empleados')}
        >
          Empleados
        </button>
        <button
          style={{
            background: '#222',
            color: '#fff',
            border: 'none',
            borderRadius: 6,
            padding: '12px 32px',
            fontSize: 18,
            cursor: 'pointer',
            fontWeight: 500
          }}
          onClick={() => navigate('/registros')}
        >
          Registros
        </button>
      </div>
      <div style={{ padding: 24 }}>
        <h2>Selecciona una opción para ver la información</h2>
      </div>
    </div>
  );
}

export default Escritorio;