const { Sequelize, DataTypes, Model } = require("sequelize");
const sequelize = require("../database/config.database");

class Cliente extends Model {}

Cliente.init({
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
    },
    nombre: {
        type: DataTypes.STRING,
        length: 50,
        allowNull: false,
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha_nacimiento: {
        type: DataTypes.DATE,
        allowNull: false,
    },
}, {
    sequelize, // We need to pass the connection instance
    modelName: "Cliente", // We need to choose the model name
    tableName: "clientes",
    schema: "public",
    timestamps: true,
    createdAt: "created_at",
    updatedAt: "updated_at",
});

module.exports = Cliente;