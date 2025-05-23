import React, { useEffect, useState } from 'react';

function Empleados() {
  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    fetch('/api/usuario')
      .then(res => res.json())
      .then(data => setEmpleados(data))
      .catch(err => console.error('Error al cargar empleados:', err));
  }, []);

  return (
    <div style={{ background: '#c4c4c4', minHeight: '100vh', padding: 0 }}>
      <div style={{ background: '#222', color: '#fff', padding: '8px 20px', fontWeight: 'bold' }}>Empleados</div>
      <div style={{ padding: 24 }}>
        <h2 style={{ margin: 0, display: 'inline-block' }}>Lista de empleados</h2>
        <button style={{
          marginLeft: 24, background: '#e5e5e5', color: '#fff', fontSize: 28, border: 'none',
          borderRadius: 2, padding: '2px 18px', fontWeight: 400, cursor: 'pointer'
        }}>+ Agregar</button>
        <table style={{ width: '100%', marginTop: 32, background: 'transparent', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ textAlign: 'left', padding: 8 }}>ID Empleado</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Nombres</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Apellidos</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Documento</th>
              <th style={{ textAlign: 'left', padding: 8 }}>Telefono</th>
            </tr>
          </thead>
          <tbody>
            {empleados.map((emp, idx) => (
              <tr key={emp.id || idx}>
                <td style={{ padding: 8 }}>{emp.id || `0${idx + 1}`}</td>
                <td style={{ padding: 8 }}>{emp.nombre}</td>
                <td style={{ padding: 8 }}>{emp.apellidos || ''}</td>
                <td style={{ padding: 8 }}>{emp.documento || ''}</td>
                <td style={{ padding: 8 }}>{emp.telefono || ''}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Empleados;