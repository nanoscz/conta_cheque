const SequelizeLib = require('../lib/sequelize');

class ComprobanteService {
  constructor() {
    this.model = 'comprobante';
    this.sequelizeLib = new SequelizeLib();
  }
  
  async getComprobantes() {
    const comprobantes = await this.sequelizeLib.getAll(this.model);
    return comprobantes || [];
  }

  async getComprobante(id) {
    const comprobante = await this.sequelizeLib.findOne(this.model, id);
    return comprobante;
  }
}

module.exports = ComprobanteService;