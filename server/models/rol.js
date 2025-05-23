module.exports = (sequelize, DataTypes) => {
  const Rol = sequelize.define('Rol', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    tableName: 'roles',
    timestamps: false
  });

  Rol.associate = function(models) {
    Rol.hasMany(models.Usuario, {
      foreignKey: 'rol_id',
      as: 'usuarios'
    });
  };

  return Rol;
};
