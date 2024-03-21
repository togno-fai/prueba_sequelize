const express = require('express');
const router = express.Router();
const db = require('../config/db.js')
const Orden = require('../models/Ordenes.js');

router.get('/all', (req, res) => Orden.findAll()
    .then((ordenes) => {
        console.log(ordenes);
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(ordenes, null, 3));
    })
    .catch(err => console.log(err))
);

module.exports = router;