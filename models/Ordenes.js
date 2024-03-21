const {DataTypes } = require('sequelize');
const db = require("../config/db.js");

const Orden = db.define('Orden', {
    etiqueta: {
        type: DataTypes.STRING,
        allowNull: false
    },
    detalles: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'ordenes'
});

module.exports = Orden;