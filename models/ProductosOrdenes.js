const { DataTypes } = require('sequelize');
const db = require("../config/db.js");
const Ordenes = require("./Ordenes.js");
const Productos = require("./Productos.js");

const ProductoOrden = db.define('ProductoOrden', {
    cantidad: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'Productos_ordenes'
});
Productos.belongsToMany(Ordenes, { through: ProductoOrden })
Ordenes.belongsToMany(Productos, { through: ProductoOrden })


module.exports = ProductoOrden;