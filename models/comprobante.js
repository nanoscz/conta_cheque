const Sequelize = require('sequelize');

module.exports = function setupComprobanteModel (sequelize) {
  return sequelize.define('comprobante', {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comprobante: {
      type: Sequelize.STRING,
      field: 'bte',
      allowNull: false
    },
    documentoRespaldo: {
      type: Sequelize.STRING,
      field: 'docres',
      allowNull: false
    },
    fecha: Sequelize.DATE,
    glosa: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    usuarioId: {
      type: Sequelize.INTEGER,
      field: 'usuario_id',
      primaryKey: true
    },
    activo: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    creadoEl: {
      type: Sequelize.DATE,
      field: 'creado_el',
    },
    modificadoEl: {
      type: Sequelize.DATE,
      field: 'modificado_el',
    }
  },{
    timestamps: false,
    tableName: 'comprobante'
  });
}