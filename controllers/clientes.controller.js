const Cliente = require("../models/Cliente");
const { QueryTypes } = require("sequelize");

const { uuid } = require("uuidv4");
const { response } = require("express");

const getAllClientes = async(req, res) => {
    try {
        const clientes = await Cliente.findAll();
        return res.json({
            clientes,
        });
    } catch (error) {
        return res.status(500).json({
            error: "Hubo un error inesperado",
        });
    }
};

const getPromedio = async(req, res) => {
    try {
        const records = await Cliente.sequelize.query(
            "SELECT avg( date_part('year',age(fecha_nacimiento))) as promedio FROM clientes;", { type: QueryTypes.SELECT }
        );
        return res.json(records[0]);
    } catch (error) {}
};

const createCliente = async(req, res) => {
    try {
        const { nombre, apellidos, fecha_nacimiento } = req.body;
        const id = uuid();
        let newCliente = await Cliente.create({
            id,
            nombre,
            apellidos,
            fecha_nacimiento,
        });

        if (newCliente) {
            return res.json({
                message: "cliente creado correctamente",
                data: newCliente,
            });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllClientes,
    createCliente,
    getPromedio,
};