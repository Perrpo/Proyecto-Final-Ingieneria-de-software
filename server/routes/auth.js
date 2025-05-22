const express = require('express');
const router = express.Router();
const { Usuario, Rol } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// 📌 Ruta para login
router.post('/login', async (req, res) => {
  const { usuario, contrasena } = req.body;

  if (!usuario || !contrasena) {
    return res.status(400).json({ mensaje: 'Faltan datos' });
  }

  try {
    const user = await Usuario.findOne({
      where: { nombre: usuario },
      include: Rol
    });

    if (!user) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    const isMatch = await bcrypt.compare(contrasena, user.contrasena);

    if (!isMatch) {
      return res.status(401).json({ mensaje: 'Contraseña incorrecta' });
    }

    const token = jwt.sign(
      { id: user.id, rol: user.Rol.nombre },
      'secreto123',
      { expiresIn: '2h' }
    );

    // ✅ Incluye el rol en la respuesta para que el frontend pueda redirigir
    res.json({ mensaje: 'Acceso exitoso', token, rol: user.Rol.nombre });

  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

// ✅ Ruta de prueba para obtener todos los usuarios
const { Usuario: User } = require('../models'); // renombramos para evitar conflicto

router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll({ include: Rol });
    res.json(users);
  } catch (error) {
    console.error("Error al obtener usuarios:", error);
    res.status(500).json({ message: 'Error al obtener usuarios' });
  }
});

module.exports = router;
