import React from 'react';
import { useNavigate } from 'react-router-dom';

function Escritorio() {
  const navigate = useNavigate();

  return (
    <div style={{ background: '#c4c4c4', minHeight: '100vh' }}>
      {/* Header superior */}
      <div style={{
        background: '#222',
        color: '#fff',
        padding: '4px 0 0 8px',
        fontWeight: 'bold',
        fontSize: 16
      }}>
        Escritorio
      </div>
      {/* Barra superior con logo y botones */}
      <div style={{
        background: '#e5e5e5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 32px 12px 16px'
      }}>
        {/* Logo */}
        <img src="/logo-inout.png" alt="Logo" style={{ height: 60 }} />
        {/* Botones */}
        <div>
          <button
            style={{
              background: '#555',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 24px',
              marginRight: 12,
              fontSize: 16,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }}
            onClick={() => navigate('/empleados')}
          >
            Empleados
            <img src="/empleados.png" alt="Empleados" style={{ height: 24 }} />
          </button>
          <button
            style={{
              background: '#555',
              color: '#fff',
              border: 'none',
              borderRadius: 4,
              padding: '10px 24px',
              fontSize: 16,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8
            }}
            onClick={() => navigate('/registros')}
          >
            Registros
            <img src="/registros.png" alt="Registros" style={{ height: 24 }} />
          </button>
        </div>
        {/* Usuario */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <img src="/admin.png" alt="Admin" style={{ height: 32 }} />
          <span>Admin</span>
        </div>
      </div>
      {/* Cuerpo principal */}
      <div style={{ display: 'flex', height: 'calc(100vh - 110px)' }}>
        {/* Empleados */}
        <div
          style={{
            flex: 1,
            background: '#bdbdbd',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/empleados')}
        >
          <img src="/empleados.png" alt="Empleados" style={{ height: 180, marginBottom: 16 }} />
          <span style={{ fontSize: 64, fontWeight: 400 }}>Empleados</span>
        </div>
        {/* Registros */}
        <div
          style={{
            flex: 1,
            background: '#969696',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/registros')}
        >
          <img src="/registros.png" alt="Registros" style={{ height: 180, marginBottom: 16 }} />
          <span style={{ fontSize: 64, fontWeight: 400, color: '#fff' }}>Registros</span>
        </div>
      </div>
    </div>
  );
}

export default Escritorio;