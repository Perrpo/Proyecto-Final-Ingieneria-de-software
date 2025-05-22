const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './proyecto_final.db'
});

// Pasar DataTypes a los modelos
const Rol = require('./rol')(sequelize, DataTypes);
const Usuario = require('./usuario')(sequelize, DataTypes);

// Definir asociaciones
Rol.hasMany(Usuario, { foreignKey: 'rol_id' });
Usuario.belongsTo(Rol, { foreignKey: 'rol_id' });

module.exports = { sequelize, Usuario, Rol };
