module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define('Usuario', {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    contrasena: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    tableName: 'usuarios',
    timestamps: false
  });

  Usuario.associate = function(models) {
    Usuario.belongsTo(models.Rol, {
      foreignKey: 'rol_id',
      as: 'Rol'
    });
  };

  return Usuario;
};
