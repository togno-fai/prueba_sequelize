const {DataTypes } = require('sequelize');
const db = require("../config/db.js");

const Producto = db.define('Producto', {
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    precio: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
}, {
    tableName: 'productos'
});

module.exports = Producto;