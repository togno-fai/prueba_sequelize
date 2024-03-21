const express = require('express');
const PORT = 3000;
const db = require('./config/db.js')
const Orden = require('./models/Ordenes.js');
const Producto = require('./models/Productos.js');
const ProductoOrden = require('./models/ProductosOrdenes.js');


// db.sync({alter:true});
// Producto.create({nombre: 'coca', precio: 2000});
ProductoOrden.create();
/*
const orden = Orden.build({ etiqueta: 'Orden X', detalles: 'builded orden' });

Orden.findOne({ where: { etiqueta: 'Orden C' } })
    .then(unaOrden => console.log(unaOrden.toJSON()))
    .catch(err => console.log(err));
*/

app = express();
app.get('/', (req, res) => res.send("hi"));
app.use('/ordenes', require('./routes/ordenes.js'));

app.listen(PORT, () => console.log("escuchando en puerto: " + PORT));

