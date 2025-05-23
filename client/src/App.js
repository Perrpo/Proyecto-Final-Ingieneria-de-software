import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './dashboard/AdminDashboard';
import SupervisorDashboard from './dashboard/SupervisorDashboard';
import EmpleadoDashboard from './dashboard/EmpleadoDashboard';
import Escritorio from './components/Escritorio';
import Empleados from './components/Empleados';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/SupervisorDashboard" element={<SupervisorDashboard />} />
        <Route path="/dashboard/EmpleadoDashboard" element={<EmpleadoDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
