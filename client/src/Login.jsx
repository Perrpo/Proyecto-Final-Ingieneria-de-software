// client/src/Login.jsx
import React, { useState } from "react";

function Login() {
  const [usuario, setUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ usuario, contrasena }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Login exitoso. Token: " + data.token);
      setMensaje("");
      // Redirigir o guardar token si se necesita
    } else {
      setMensaje(data.mensaje || "Error al iniciar sesión");
    }
  };

  return (
    <div className="container">
      <div className="login-box">
        <h2>Iniciar Sesión</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="usuario">Usuario</label>
          <input
            type="text"
            id="usuario"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            placeholder="Tu usuario"
            required
          />

          <label htmlFor="contrasena">Contraseña</label>
          <input
            type="password"
            id="contrasena"
            value={contrasena}
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Tu contraseña"
            required
          />

          <button type="submit">Iniciar Sesión</button>
          <p id="mensaje" style={{ color: "red", marginTop: "1rem" }}>{mensaje}</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
