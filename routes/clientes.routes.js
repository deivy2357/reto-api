const { Router } = require("express");
const controllers = require("../controllers/clientes.controller");
const router = Router();

router.get("/", controllers.getAllClientes);
router.get("/promedio-edad", controllers.getPromedio);
router.post("/", controllers.createCliente);

module.exports = router;