const express = require("express"); //de esta forma se importa en node
const { env } = require("./config/enviroments");
const sequelize = require("./database/config.database");
const cors = require("cors");
const routes = require("./routes/clientes.routes");

//Creando el servidor express
const app = express();
app.use(cors());
app.use(express.json());
app.use("/cliente", routes);

sequelize
    .authenticate()
    .then(() => {
        app.listen(env.SERVER_PORT, () => {
            console.log(`Server run at ${env.SERVER_PORT}`);
        });
    })
    .catch(() => {
        console.error("no se conectó a la base de datos");
    });