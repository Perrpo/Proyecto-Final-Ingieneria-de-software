import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from "./components/Login";
import SupervisorDashboard from "./dashboard/SupervisorDashboard";
import EmpleadoDashboard from "./dashboard/EmpleadoDashboard";
import Escritorio from "./components/Escritorio";
import Empleados from "./components/Empleados";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/escritorio" element={<Escritorio />} />
        <Route path="/empleados" element={<Empleados />} />
        <Route path="/dashboard/SupervisorDashboard" element={<SupervisorDashboard />} />
        <Route path="/dashboard/EmpleadoDashboard" element={<EmpleadoDashboard />} />
      </Routes>
    </div>
  );
}

export default App;
