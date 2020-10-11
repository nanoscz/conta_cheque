const sequelize = require('sequelize');
const setupComprobanteModel = require('../models/comprobante');

const { config } = require('../config');

const DB_HOST = config.dbHost;
const USER = config.dbUser;
const PASSWORD = config.dbPassword;
const DB_NAME = config.dbName;

const DATABASE_URL = `mysql://${USER}:${PASSWORD}@${DB_HOST}/${DB_NAME}`;

class SequelizeLib {
  get sequelize() {
    if (!this._sequelize) {
      this._sequelize = new sequelize(DATABASE_URL);
      setupComprobanteModel(this._sequelize);
      this._sequelize.sync();
    }
    return this._sequelize;
  }

  getAll(model) {
    return this.sequelize.models[model].findAll();
  }

  findOne(model, id) {
    return this.sequelize.models[model].findOne({ where: { id: id } });
  }
}

module.exports = SequelizeLib;
