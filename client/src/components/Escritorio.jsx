import React from 'react';
import { useNavigate } from 'react-router-dom';

function Escritorio() {
  const navigate = useNavigate();

  const handleNavigate = (ruta) => {
    navigate(ruta);
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <div
        style={{ flex: 1, backgroundColor: '#bfbfbf', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => handleNavigate('/empleados')}
      >
        <img src="/icons/employees.png" alt="Empleados" style={{ width: 100, marginBottom: 20 }} />
        <h1>Empleados</h1>
      </div>
      <div
        style={{ flex: 1, backgroundColor: '#999999', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}
        onClick={() => handleNavigate('/registros')}
      >
        <img src="/icons/records.png" alt="Registros" style={{ width: 100, marginBottom: 20 }} />
        <h1 style={{ color: 'white' }}>Registros</h1>
      </div>
    </div>
  );
}

export default Escritorio;