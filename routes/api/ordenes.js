const express = require('express');
const router = express.Router();
const ordenes = require('../../models/Ordenes.js');

router.get('/', (req, res) => {
    console.log(`obtener todas las ordenes`);
    ordenes.findAll()
        .then((ordenes) => res.json(ordenes));
}
);

router.get('/:id', (req, res) => {
    console.log(`obtener orden con id = ${req.params.id}`);
    ordenes.findByPk(parseInt(req.params.id))
        .then((orden) => res.json(orden))
});
router.put('/:id', (req, res) => {
    ordenes.findByPk(parseInt(req.params.id))
        .then((orden) => {
            if (orden !== null) {
                orden.update(req.body);
                orden.save();
            }
            res.json(orden)
        });
});
router.delete('/:id', (req, res) => {
    ordenes.findByPk(parseInt(req.params.id))
        .then((orden) => {
            if (orden !== null) {
                orden.destroy();
            }
            res.json(orden)
        });
});

module.exports = router;