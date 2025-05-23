import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import AdminDashboard from './dashboard/AdminDashboard';
import SupervisorDashboard from './dashboard/SupervisorDashboard';
import EmpleadoDashboard from './dashboard/EmpleadoDashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/supervisor" element={<SupervisorDashboard />} />
        <Route path="/dashboard/empleado" element={<EmpleadoDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
