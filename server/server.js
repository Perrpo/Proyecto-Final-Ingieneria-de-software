const express = require('express');
const { sequelize, Usuario, Rol } = require('./models');
const authRoutes = require('./routes/auth');
const bcrypt = require('bcryptjs');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // sirve HTML

app.get('/', (req, res) => {
  res.send('API Proyecto Final corriendo ✅');
});

app.use('/api', authRoutes);

// Base de datos 
async function init() {
  await sequelize.sync({ force: true }); // recrea todo

  const adminRole = await Rol.create({ nombre: 'administrador' });
  const supervisorRole = await Rol.create({ nombre: 'supervisor' });

  await Usuario.create({
    nombre: 'Admin Juan',
    contrasena: await bcrypt.hash('admin123', 10),
    rol_id: adminRole.id
  });

  await Usuario.create({
    nombre: 'Super Laura',
    contrasena: await bcrypt.hash('super456', 10),
    rol_id: supervisorRole.id
  });

  console.log('Base de datos inicializada');
}

app.listen(3000, async () => {
  await init();
  console.log('Servidor corriendo en http://localhost:3000');
});
