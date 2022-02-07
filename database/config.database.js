const Sequelize = require("sequelize");
const { env } = require("../config/enviroments");
if (process.env.NODE_ENV == "production") {
    module.exports.sequelize = new Sequelize(process.env.DATABASE_URL);
} else {
    const sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASS, {
        host: env.DB_HOST,
        port: env.DB_PORT,
        dialect: "postgres",
    });
    module.exports = sequelize;
}