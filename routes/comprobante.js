const express = require('express');
const ComprobanteService = require('../services/comprobante');

function comprobanteApi(app) {
  const router = express.Router();
  app.use('/api/comprobante', router);

  const comprobanteService = new ComprobanteService();

  router.get('/', async function(req, res, next) {

    try {
      const comprobantes = await comprobanteService.getComprobantes();

      res.status(200).json({
        data: comprobantes,
        message: 'comprobantes listed'
      });
    } catch (err) {
      next(err);
    }
  });

  router.get('/:id', async function(req, res, next) {
    const comprobanteId = req.params.id;
    try {
      const comprobantes = await comprobanteService.getComprobante(comprobanteId);

      res.status(200).json({
        data: comprobantes,
        message: 'comprobantes listed'
      });
    } catch (err) {
      next(err);
    }
  });
}

module.exports = comprobanteApi;