const express = require('express');
const router = express.Router();

router.use('/api/ordenes', require('./api/ordenes.js'));
router.use('/api/productos', require('./api/productos.js'));
router.use('/api/productosordenes', require('./api/productosOrdenes.js'));

module.exports = router;