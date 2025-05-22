const express = require('express');
const router = express.Router();
const { Usuario, Rol } = require('../models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

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

    res.json({ mensaje: 'Acceso exitoso', token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: 'Error del servidor' });
  }
});

module.exports = router;
