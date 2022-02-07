const Sequelize = require("sequelize");
const { env } = require("../config/enviroments");
if (process.env.NODE_ENV == "production") {
    const sequelize = new Sequelize(process.env.DATABASE_URL);
    module.exports = sequelize;
} else {
    const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: "postgres",
    });
    module.exports = sequelize;
}