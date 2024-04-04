const express = require('express');
const router = express.Router();
const productosOrdenes = require('../../models/ProductosOrdenes.js');

router.get('/', (req, res) =>
productosOrdenes.findAll()
        .then((productos) => res.json(productos))
);

router.get('/:id', (req, res) => {
    productosOrdenes.findByPk(parseInt(req.params.id))
        .then((producto) => res.json(producto))
});
router.put('/:id', (req, res) => {
    productosOrdenes.findByPk(parseInt(req.params.id))
        .then((producto) => {
            if (producto !== null) {
                producto.update(req.body);
                producto.save();
            }
            res.json(producto)
        });
});
router.delete('/:id', (req, res) => {
    productosOrdenes.findByPk(parseInt(req.params.id))
        .then((producto) => {
            if (producto !== null) {
                producto.destroy();
            }
            res.json(producto)
        });
});

module.exports = router;