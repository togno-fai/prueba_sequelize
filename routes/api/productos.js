const express = require('express');
const router = express.Router();
const productos = require('../../models/Productos.js');

router.get('/', (req, res) =>
    productos.findAll()
        .then((productos) => res.json(productos))
);

router.get('/:id', (req, res) => {
    productos.findByPk(parseInt(req.params.id))
        .then((producto) => res.json(producto))
});
router.put('/:id', (req, res) => {
    productos.findByPk(parseInt(req.params.id))
        .then((producto) => {
            if (producto !== null) {
                producto.update(req.body);
                producto.save();
            }
            res.json(producto)
        });
});
router.delete('/:id', (req, res) => {
    productos.findByPk(parseInt(req.params.id))
        .then((producto) => {
            if (producto !== null) {
                producto.destroy();
            }
            res.json(producto)
        });
});

module.exports = router;