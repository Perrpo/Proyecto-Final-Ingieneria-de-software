import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import AdminDashboard from "./components/admin";
import SupervisorDashboard from "./dashboard/SupervisorDashboard";
import EmpleadoDashboard from "./dashboard/EmpleadoDashboard";
import Escritorio from "./components/Escritorio";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/dashboard/SupervisorDashboard" element={<SupervisorDashboard />} />
        <Route path="/dashboard/EmpleadoDashboard" element={<EmpleadoDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
